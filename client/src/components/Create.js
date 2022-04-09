import React, {useState} from 'react'

const Create = () => {

	const [title, setTitle] = useState('')
    const [question, setQuestion] = useState([])


	const handleChangeValue = event => {
		setTitle(event.target.value);
	  };
	
	const handleChangeArray = event => {
		setQuestion(event.target.value);
	};

	async function registerQuiz(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                title: title.title,
                question: question.heading
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			// navigate('/login')
		}
	}
    return (
        
        <div>
            <h1>Create test</h1>
            <div>
			<form onSubmit={registerQuiz}>
                <label>Quiz Title</label>
				<input
          			value={title.code}
          			onChange={handleChangeValue}
					type="text"
					placeholder="Title"
				/>
				<br />
				<div>
					<label>Question</label>
					<input
						value={question.code}
						onChange={handleChangeArray}
						type="text"
						placeholder="Question"
					/>
					<br />
					<label>Answers</label>
					<input type="text" required placeholder="required" />
					<input type="text" required placeholder="required"/>
					<input type="text" required placeholder="required"/>
					<input type="text" placeholder="optional" />
					<input type="text" placeholder="optional" />
					<br />
				</div>
				<button type="submit">
					Create another question for this quiz
				</button>

                
                
			</form>
		</div>
        </div>
    )
}

export default Create
