import React, {useEffect, useState} from 'react';
import {useParams, Link, useNavigate } from 'react-router-dom'

const Edit = () => {
    const [questions, setQuestions] = useState([])
    const [accessLevel, setAccessLevel] = useState({
        access: ''
    })
    const [question, setQuestion] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')

    const {quiz} = useParams()
    const {q} = useParams()
    const navigate = useNavigate()
  
    useEffect(() => {
        fetch(`http://localhost:1337/api/edit/${quiz}/${q}`, {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .then(data => {
            setQuestions({...questions,
                quizDB: data.quizDB
            })
            setAccessLevel({
                ...accessLevel,
                access: data.access
            })
         
        })
        .catch(error => {
            console.log(error)
        })
        
    }, [])

    async function updateQuestion(event) {
		event.preventDefault()

		const response = await fetch(`http://localhost:1337/api/edit/${quiz}/${q}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                question,
                correctAnswer,
                answer1,
                answer2,
                answer3,
                answer4,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate('/dashboard')
		}
	}
    return (
        <div>
            <h1>Edit question</h1>
            <form onSubmit={updateQuestion}>
				<label class='label'>Question</label>
					<input
						name="question"
						id="question"
						onChange={(e) => setQuestion(e.target.value)}
						type="text"
						placeholder="Question"
					/>
					<br />
					<label class='label'>Correct answer</label>
					<br />
					<input 
						type="text" 
                        required 
                        value= {questions.correctAnswer}
						placeholder="required" 
						name="correctAnswer"
						id="correctAnswer"
						onChange={(e) => setCorrectAnswer(e.target.value)}
						/>
					<br />
					<label class='label'>Answers</label>
					<br />
					<input 
						type="text" 
						required 
						placeholder="required"
						name="answer1"
						id="answer1"
						onChange={(e) => setAnswer1(e.target.value)}
						/>
					<br />
					<input 
						type="text" 
						required 
						placeholder="required"
						name="answer2"
						id="answer2"
						onChange={(e) => setAnswer2(e.target.value)}
						/>
					<br />
					<input 
						type="text" 
						placeholder="optional"
						name="answer3"
						id="answer3"
						onChange={(e) => setAnswer3(e.target.value)}
						/>
					<br />
					<input
						type="text" 
						placeholder="optional"
						name="answer4"
						id="answer4"
						onChange={(e) => setAnswer4(e.target.value)}
						/>					
					<br />
					
				<input class='button' type="submit" value="Update Question" />
			</form>
            <button class='button'>
				<Link to='/dashboard'>Return to dashboard</Link>
			</button>
        </div>
    )
}

export default Edit
