import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'



const ViewQuiz = () => {
    const [questions, setQuestions] = useState([])
    const [accessLevel, setAccessLevel] = useState({
        access: ''
    })

    const {quiz} = useParams()

  
    useEffect(() => {
        fetch(`http://localhost:1337/api/viewQuizzes/${quiz}`, {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .then(data => {
            setQuestions({...questions,
                questionsDB: data.questionsDB
            })
            setAccessLevel({
                ...accessLevel,
                access: data.access
            })
         
        })
        .catch(error => {
            console.log(error)
        })
        
    }, [])


//     const listItems = 

//     questions.map((d) => 
//         <> 
//         <li key={d.question}>{d.question}</li>
        
//             <ol type='A'>
//                 <li key={d.correctAnswer}>{d.correctAnswer}</li>
//                 <li key={d.answer1}>{d.answer1}</li>
//                 <li key={d.answer2}>{d.answer2}</li>
//                 <li key={d.answer3}>{d.answer3}</li>
//                 <li key={d.answer4}>{d.answer4}</li>      
//             </ol>

//         </>
// )

    return (
        <div>
            view quiz test
            <ol>
                {/* {listItems} */}
            </ol>
        </div>
    )
}

export default ViewQuiz
