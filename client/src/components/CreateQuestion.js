import React, {useCallback} from 'react'

const CreateQuestion = (question, setQuestion) => {

	const handleInputChange = useCallback(event => {
		setQuestion({...question, 
			[event.target.name]: event.target.value})
	}, [setQuestion]);
	
    return (
          
            
		<div className="Component">
					<label>Question</label>
					<input
						name="question"
						id="question"
						onChange={handleInputChange}
						type="text"
						placeholder="Question"
					/>
					<br />
					<label>Correct answer</label>
					<br />
					<input 
						type="text" 
						required 
						placeholder="required" 
						name="correctAnswer"
						id="correctAnswer"
						onChange={handleInputChange}
						type="text"/>
					<br />
					<label>Answers</label>
					<br />
					<input 
						type="text" 
						required 
						placeholder="required"
						name="answer1"
						id="answer1"
						onChange={handleInputChange}
						type="text"/>
					<br />
					<input 
						type="text" 
						required 
						placeholder="required"
						name="qanswer2"
						id="answer2"
						onChange={handleInputChange}
						type="text"/>
					<br />
					<input 
						type="text" 
						placeholder="optional"
						name="qanswer3"
						id="answer3"
						onChange={handleInputChange}
						type="text"/>
					<br />
					<input
						type="text" 
						placeholder="optional"
						name="qanswer3"
						id="answer3"
						onChange={handleInputChange}
						type="text"/>					
					<br />
        
        </div>
    )
}

export default CreateQuestion
