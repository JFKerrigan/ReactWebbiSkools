import React, {useState} from 'react';
import CreateQuestion from './CreateQuestion';
import Button from './Button';

const Create = () => {

	const [title, setTitle] = useState('')
	const [question, setQuestion] = useState({
		question: '',
		correctAnswer: '',
		answer1: '',
		answer2: '',
		answer3: '',
		answer4:''
	})
	const [components, setComponents] = useState([""]); 


	const handleChangeValue = event => {
		setTitle(event.target.value);
	  };

	function addComponent() {
		setComponents([...components, "Question"]) 
	}

	async function registerQuiz(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({title: title}
                
			),
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
				<Button onClick={addComponent} text="Click here to create another question" />
				<ol>
						{components.map((item, i) => ( 
							<li>
								<CreateQuestion text={item} question={question} onChange={setQuestion}/>
							</li> 
						))} 
					
				</ol>
				<input type="submit" value="Create" />
			</form>
			
		</div>
        </div>
    )
}

export default Create
