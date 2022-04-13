import React, {useState, useEffect} from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import '../App.css'

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
    })
    const [accessLevel, setAccessLevel] = useState({
        access: '',
    })

    async function populateUser() {
		const req = await fetch('http://localhost:1337/api/dashboard', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
            setUserInfo({
                ...userInfo,
                name: data.name,
                })
            setAccessLevel({
                ...accessLevel,
                access: data.access
            })
            console.log('please', data)
		} else { 
            window.location.href = '/login'
		}
    }
    
    useEffect(() => {
        populateUser()

    },[])

    return (
        <div class='container'>
            <h1>Dashboard</h1>
            <h2>Hello {userInfo.name}</h2>
            <h3>Welcome to your Quiz Manager</h3>
            <div>
            {accessLevel.access === 'edit' &&               
                <button type="submit" class='button'>
                    <Link to='/create' accessLevel={accessLevel}>
                        Click here to create a new quiz
                    </Link>
                    </button>   
            }
                    <button type="submit" class='button'>
                    <Link to='/quizzes' accessLevel={accessLevel}>
                        Click here to view available quizzes
                    </Link>
                    </button>
            </div>
        </div>
    )
}

export default Dashboard
