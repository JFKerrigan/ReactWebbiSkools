import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout'


const Nav = () => {

    return (
        <div className="nav">
            <Link to={{
                        pathname:`/dashboard
                    `}}>Dashboard</Link>
            <Logout />

        </div>
    )
}

export default Nav
