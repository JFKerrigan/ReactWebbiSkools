import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'



const ViewQuiz = (props) => {
    const {quiz} = useParams()
    console.log(quiz)
    useEffect(() => {
        fetch(`http://localhost:1337/api/viewQuizzes/${quiz}`)
    })

    return (
        <div>
            view quiz test
     
        </div>
    )
}

export default ViewQuiz
