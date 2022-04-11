import React, { useState } from 'react'

const CreateQuestion = ({addQuestion,  idx}) => {

	const [question, setQuestion] = useState('');

	const handleChange = (event) => {
		setQuestion(event.target.value);
	  };


	  const handleSubmit = (e) => {
		e.preventDefault();
		addQuestion({ id: idx + 1, body: question });
		setQuestion('');
	  };
	
	  
    return (
          
            
		<div className="Component">
      <form onSubmit={handleSubmit}>
        <label></label>
        <input
          name="question"
          id="question"
          value={question}
          onChange={handleChange}
          type="text"
          placeholder="Question"
        />
        <button>ADD QUESTION</button>
      </form>
	
					<label>Correct answer</label>
					<br />
					<input 
						type="text" 
						required 
						placeholder="required" 
						name="correctAnswer"
						id="correctAnswer"
						/>
					<br />
					<label>Answers</label>
					<br />
					<input 
						type="text" 
						required 
						placeholder="required"
						name="answer1"
						id="answer1"
						/>
					<br />
					<input 
						type="text" 
						required 
						placeholder="required"
						name="answer2"
						id="answer2"
						/>
					<br />
					<input 
						type="text" 
						placeholder="optional"
						name="answer3"
						id="answer3"
						/>
					<br />
					<input
						type="text" 
						placeholder="optional"
						name="answer4"
						id="answer4"
						/>					
					<br />

        </div>
    )
}



export default CreateQuestion
