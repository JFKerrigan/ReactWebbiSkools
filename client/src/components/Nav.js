import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Logout from './Logout'


const Nav = () => {
    return (
        <div className="nav">
            <Link to='/dashboard'>Dahsboard</Link>
            <Logout />

        </div>
    )
}

export default Nav
