import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import '../App.css'



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


    const listItems = 
    questions.questionsDB?.map((d) => 
        <> 
        <div class='listQ'>
        <li class="test" key={d.question}>{d.question}</li>
        {accessLevel.access === 'edit' &&  
            <div class='allDetails'>
                <ol type='A'>
                    <div class='answers'>
                    <li key={d.correctAnswer}>{d.correctAnswer}</li>
                    <li key={d.answer1}>{d.answer1}</li>
                    <li key={d.answer2}>{d.answer2}</li>
                    <li key={d.answer3}>{d.answer3}</li>
                    <li key={d.answer4}>{d.answer4}</li>     
                    </div> 
                </ol>
            </div>
        }
        {accessLevel.access === 'view' &&  
            <ol type='A'>
                <div class='allDetails'> 
                <li key={d.correctAnswer}>{d.correctAnswer}</li>
                <li key={d.answer1}>{d.answer1}</li>
                <li key={d.answer2}>{d.answer2}</li>
                <li key={d.answer3}>{d.answer3}</li>
                <li key={d.answer4}>{d.answer4}</li>   
                </div>  
                   
            </ol>
        }</div>
        </>
)

    return (
        <div class='container'>
            <h1>{quiz} quiz</h1>
            <div class='quiz=ListCont'>
                <ol class="quizList">
                    {listItems}
                </ol>
            </div>
            <div class="buttonContainer">
            {accessLevel.access === 'edit' &&                
                <button type="submit" class="quizButton">
                    <Link to={{
                        pathname:`/delete/${quiz}`, 
                        }}>Click to delete entire quiz</Link>
                </button>         
            }
            <button class='quizButton'>
                <Link to='/dashboard'>Return to dashboard</Link>
            </button>   
            </div>
        </div>
    )
}

export default ViewQuiz
