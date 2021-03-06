const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const User = require('./models/user.model')
const Quiz = require('./models/quiz.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { db } = require('./models/user.model')
dotenv.config({ path: './.env' });

app.use(cors())
app.use(express.json())
mongoose
  .connect(process.env.dbURL, { useNewURLParser: true
  })
  .then(() => console.log('MongoDB is connected'));

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

app.get('/', (req, res) => {
	
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
        console.log('Kerrigan', {user: user.name}, {user: user.accessLevel})
        return res.json({ status: 'ok', name: user.name, access: user.accessLevel})

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
			question: req.body.question.question,
			correctAnswer: req.body.question.correctAnswer,
			answer1: req.body.question.answer1,
			answer2: req.body.question.answer2,
			answer3: req.body.question.answer3,
			answer4: req.body.question.answer4,
	
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error' })
	}
})

app.get('/api/quizzes', async (req, res) => {
	try {
	  const quizDB = await Quiz.find().distinct("title");
	  
	  res.json({
		quiz: quizDB
	  });
	} catch (error) {
	  res.json(
	
	  );
	}
  });

app.get('/api/viewQuizzes/:quiz', async(req, res) => {
	const token = req.headers['x-access-token']
	const quizTitle = req.params.quiz
	console.log(quizTitle)
	

	try {
		const questionsDB = await Quiz.find({title: quizTitle})
        const decoded = jwt.verify(token, 'secret123')
        const email = decoded.email
        const user = await User.findOne({email: email })
		res.json({questionsDB: questionsDB, access: user.accessLevel})
		console.log({questionsDB: questionsDB, access: user.accessLevel})

	} catch (error) {
		console.log(error)
	}
})

app.get("/api/delete/:quiz", async (req, res) => {
	const quizTitle = req.params.quiz
	try {
		const deleteQuiz = await Quiz.deleteMany({title: quizTitle})
		console.log(deleteQuiz)
		res.json({status: 'ok', deleteQuiz: deleteQuiz})
	} catch (error) {
		console.log(error)
	}
	
})

app.get("/api/edit/:quiz/:q", async (req, res) => {
	const quizQ = req.params.q
	try {
		const quizDB = await Quiz.find({question: quizQ});
		console.log('jenny', quizDB)
		res.json({
		  quizDB : quizDB
		  
		});
	  } catch (error) {
		res.json(
	  
		);
	  }
})

app.post("/api/edit/:quiz/:q", async (req, res) => {
	const quizQ = req.params.q
	const filter = await Quiz.find({question: quizQ});
	const update = {question: req.body.question,
	correctAnswer: req.body.correctAnswer,
	answer1: req.body.answer1,
	answer2: req.body.answer2,
	answer3: req.body.answer3,
	answer4: req.body.answer4,}

	console.log(req.body, filter)
	try {
		const updateQuiz = await Quiz.findOneAndUpdate({filter}, {
			question: req.body.question,
			correctAnswer: req.body.correctAnswer,
			answer1: req.body.answer1,
			answer2: req.body.answer2,
			answer3: req.body.answer3,
			answer4: req.body.answer4,})
		
			res.json({status: 'ok', updateQuiz: updateQuiz})
	} catch (error) {
		console.log(error)
	}
})

  app.get("/*", (req, res) => {
	res.send("404 error page doesn't exist, please return to the home page");
  });

app.listen(1337, () => {
	console.log('Server started on 1337')
})