import React, {useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'

const Delete = () => {
    const {quiz} = useParams()
    useEffect(() => {
        fetch(`http://localhost:1337/api/delete/${quiz}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .catch(error => {
            console.log(error)
        })
    })
    return (
        <div>
            <h1>Quiz deleted</h1>
            <button>
                <Link to="/dashboard">
                    Return to dashboard
                </Link>
            </button>
        </div>
    )
    
    }
export default Delete
