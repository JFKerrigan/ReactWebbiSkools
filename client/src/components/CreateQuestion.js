import React from 'react'

const CreateQuestion = (props) => {

	// const handleQInputChange = useCallback(event => {
	// 	setQuestion({...question, 
	// 		[event.target.name]: event.target.value})
	// }, [setQuestion]);

	// const handleQInputChange = event => {
	// 	setQuestion(event.target.value)
	// }

	function handleQInputChange( event ) {
		props.onChange(event.target.value)
	}
	
	
    return (
          
            
		<div className="Component">
					<label>Question</label>
					<input
						name="question"
						id="question"
						value={props.value}
						onChange={props.handleQInputChange}
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
