const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Quiz = require('./models/quiz.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://JennyK:H37m10n3@cluster0.zdits.mongodb.net/quiz?retryWrites=true&w=majority")
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error);
    }
} 
connectDB(); 

// Register functionality not required in this iteration of the website
app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.get('/api/dashboard', async (req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, 'secret123')
        const email = decoded.email
        const user = await User.findOne({email: email })
        console.log({user: user.name})
        return res.json({ status: 'ok', name: user.name})

    } catch (error) {
        console.log(error)
        res.json({status: "error", error: "invalid token"})
    }
})

app.post('/api/create', async (req, res) => {
	console.log(req.body)
	try {
		await Quiz.create({
			title: req.body.title,

		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error' })
	}
})


app.listen(1337, () => {
	console.log('Server started on 1337')
})