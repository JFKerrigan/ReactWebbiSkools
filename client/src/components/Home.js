import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div class="container">
            <h1>Welcome to WebbiSkools</h1>
            <h3>Please login to access your quizzes</h3>
            <button class='button'>
                <Link to='/login'>Login</Link>
            </button>
        </div>
    )
}

export default Home
