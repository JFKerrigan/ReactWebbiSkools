import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Create = () => {

	const [title, setTitle] = useState('');
	const [question, setQuestion] = useState({
		question: '',
		correctAnswer: '',
		answer1: '',
		answer2: '',
		answer3: '',
		answer4: '',
	});

	const handleChangeValue = event => {
		setTitle(event.target.value);
	};

	// const handleQInputChange = event => {
	// 	setQuestion(event.target.value)
	// }
	const addQuestion = (event) => {
		setQuestion({
			...question,
			[event.target.name]: event.target.value
		})
	}

	async function registerQuiz(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({title: title, question: {
				question: question.question,
				correctAnswer: question.correctAnswer,
				answer1: question.answer1,
				answer2: question.answer2,
				answer3: question.answer3,
				answer4: question.answer4,
			}}
                
			),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			// navigate('/login')
		}
	}
    return (
        
        <div class='container'>
            <h1>Create a new quiz</h1>
            <div>
			<form onSubmit={registerQuiz}>
                <label class='label'>Quiz Title</label>
				<input
          			value={title.code}
          			onChange={handleChangeValue}
					type="text"
					placeholder="Title"
				/>
				<br />
				<label class='label'>Question</label>
					<input
						name="question"
						id="question"
						
						onChange={addQuestion}
						type="text"
						placeholder="Question"
					/>
					<br />
					<label class='label'>Correct answer</label>
					<br />
					<input 
						type="text" 
						required 
						placeholder="required" 
						name="correctAnswer"
						id="correctAnswer"
						onChange={addQuestion}
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
						onChange={addQuestion}
						/>
					<br />
					<input 
						type="text" 
						required 
						placeholder="required"
						name="answer2"
						id="answer2"
						onChange={addQuestion}
						/>
					<br />
					<input 
						type="text" 
						placeholder="optional"
						name="answer3"
						id="answer3"
						onChange={addQuestion}
						/>
					<br />
					<input
						type="text" 
						placeholder="optional"
						name="answer4"
						id="answer4"
						onChange={addQuestion}
						/>					
					<br />
					
				<input class='button' type="submit" value="Create Question" />
			</form>
			<button class='button'>
				<Link to='/dashboard'>Return to dashboard</Link>
			</button>
		</div>
        </div>
    )
}

export default Create
