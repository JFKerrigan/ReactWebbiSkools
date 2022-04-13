import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Quizzes = (props) => {

    const [title, setTitle] = useState([]);
    const [quiz, setQuiz] = useState('');


    useEffect((props) => {
        fetch('http://localhost:1337/api/quizzes')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .then(data => {
            setTitle(data)
         
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    
	
    return (
        <div class="available">
            <h1>Available Quiz Titles</h1>
            <div class="container">
                {title.quiz?.map((item, index) => (
                        <div class="available" >
                            <input class="radio" type='radio' name="titles" key={index} value={item} onClick={(e) => setQuiz(e.target.value)}/>
                            <h3>{item}</h3>
                        </div>
                ))}
                <div class='container'>
                    <button class='button'>
                        <Link to={{
                            pathname:`/viewQuiz/${quiz}`, 
                            state: quiz
                            }}>View more details for this Title</Link>
                    </button>
                    
                    <button class='button'>
                        <Link to='/dashboard'>Back to the dashboard </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quizzes