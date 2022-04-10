import React, {useState} from 'react';
import CreateQuestion from './CreateQuestion';
import Button from './Button';

const Create = () => {

	const [title, setTitle] = useState('')
	const [question, setQuestion] = useState([''])
	const [components, setComponents] = useState(["Sample Component"]); 


	const handleChangeValue = event => {
		setTitle(event.target.value);
	  };
	
	const handleChangeArray = event => {
		setQuestion([event.target.value]);
	};

	function addComponent() {
		setComponents([...components, "Sample Component"]) 
	}

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
				<Button onClick={addComponent} text="Click here to create a question" />
				{components.map((item, i) => ( <CreateQuestion text={item} /> ))} 
			
			</form>
		</div>
        </div>
    )
}

export default Create
