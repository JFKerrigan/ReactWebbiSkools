import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Quizzes from './components/Quizzes';
import Create from './components/Create';
import Logout from './components/Logout';
import ViewQuiz from './components/ViewQuiz';
import Delete from './components/Delete';
import Edit from './components/Edit';
import Nav from './components/Nav';
import Home from './components/Home'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Nav />
        		<Routes>
				  <Route exact path="/" element={<Home />} />
				  <Route exact path="/login" element={<Login />} />
				  <Route exact path="/register" element={<Register />} />
				  <Route exact path="/dashboard" element={<Dashboard />} />
				  <Route exact path='/quizzes' element={<Quizzes />} />
				  <Route exact path='/create' element={<Create />} />
				  <Route path='/viewQuiz/:quiz' element={<ViewQuiz />} />
				  <Route path='/delete/:quiz' element={<Delete />} />
				  <Route path='/edit/:quiz/:q' element={<Edit />} />
        		</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App