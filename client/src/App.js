import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Quizzes from './components/Quizzes';
import Create from './components/Create';

const App = () => {
	return (
		<div>
			<BrowserRouter>
        		<Routes>
				  <Route exact path="/login" element={<Login />} />
				  <Route exact path="/register" element={<Register />} />
				  <Route exact path="/dashboard" element={<Dashboard />} />
				  <Route exact path='/quizzes' element={<Quizzes />} />
				  <Route exact path='/create' element={<Create />} />
        		</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App