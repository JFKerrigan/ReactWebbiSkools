import React, {useState, useEffect} from 'react';
import axios from 'axios';



const Quizzes = () => {

    const [title, setTitle] = useState([]);

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
            <h2>{title.quizTitle.data}</h2>

            <ul>
                {title.quizTitle.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Quizzes
