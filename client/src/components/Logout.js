import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const Logout = () => {
    const logoutHandler = () => {
        localStorage.clear()
    }

    return (
        <div>
            <Link to='/login' onClick={(logoutHandler)}>Logout</Link>
        </div>
    )
}

export default Logout
