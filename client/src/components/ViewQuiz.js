import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'



const ViewQuiz = (props) => {
    const [questions, setQuestions] = useState([])
    const {quiz} = useParams()
  
    useEffect(() => {
        fetch(`http://localhost:1337/api/viewQuizzes/${quiz}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .then(data => {
            setQuestions(data)
        })
        .catch(error => {
            console.log(error)
        })
        
    }, [])
    
    const listItems = questions.map((d) => <li key={d.question}>{d.question}</li>)

    return (
        <div>
            view quiz test
            <ol>
                {listItems}
            {/* {questions.map(({question}, item) => (
                    <li name="questions" key={question._id} value={item.question}/>   
            ))} */}
            </ol>
        </div>
    )
}

export default ViewQuiz
