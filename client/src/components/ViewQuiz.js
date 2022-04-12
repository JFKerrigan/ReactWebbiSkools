import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'



const ViewQuiz = (props) => {
    const [questions, setQuestions] = useState({})
    const {quiz} = useParams()
    console.log(quiz)
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
        console.log(questions)
    }, [])

    return (
        <div>
            view quiz test
     
        </div>
    )
}

export default ViewQuiz
