import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Quizzes = () => {

    const [title, setTitle] = useState([]);
    const [quiz, setQuiz] = useState('');

    useEffect(() => {
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
        <div>
            <h1>Test</h1>
            
                {title.quiz?.map((item, index) => (
                    <>
                    <input type='radio' name="titles" key={index} value={item} onClick={(e) => setQuiz(e.target.value)}/>
                    <h3>{item}</h3>
                    </>
                ))}
                <button>
                    <Link to={{
                        pathname:`/viewQuiz/${quiz}`, 
                        state: quiz }}>View more details for this Title</Link>
                </button>
                
            <button>
                    <Link to='/dashboard'>Back to the dashboard </Link>
            </button>

        </div>
    )
}

export default Quizzes