import React from 'react'

const CreateQuestion = (props) => {
    return (
          
            
		<div className="Component">

				<h3>{props.text}</h3>
					<label>Question</label>
					<input
						name="question"
						value={props.question.value}
						id="question"
						onChange={props.formValues}
						type="text"
						placeholder="Question"
					/>
					<br />
					<label>Correct answer</label>
					<br />
					<input type="text" required placeholder="required" />
					<br />
					<label>Answers</label>
					<br />
					<input type="text" required placeholder="required"/>
					<br />
					<input type="text" required placeholder="required"/>
					<br />
					<input type="text" placeholder="optional" />
					<br />
					<input type="text" placeholder="optional" />
					<br />
        
        </div>
    )
}

export default CreateQuestion
