import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

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
			alert(data.error)
		}
    }
    
    useEffect(() => {
        populateUser()

    },[])

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Hello {userInfo.name}</p>
            <h1>test</h1>
            {accessLevel.access === 'edit' &&                
            <button type="submit">
                <Link to="/create">
                    Click here to create a new quiz
                </Link>
            </button>         
            }
            <button type="submit">
                <Link to="/quizzes">
                    Click here to view available quizzes
                </Link>
            </button>

        </div>
    )
}

export default Dashboard
