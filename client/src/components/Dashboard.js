import React, {useState, useEffect} from 'react'

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
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
                name: data.name})
            console.log(data.status, data.name)
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
        </div>
    )
}

export default Dashboard
