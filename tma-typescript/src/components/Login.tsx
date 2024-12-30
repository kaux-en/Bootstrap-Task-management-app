import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login:React.FC = () => {
    const [username, setUsername] = useState<any>('')
    const [password, setPassword] = useState<any>('')
    const {loginWithRedirect} = useAuth0();
  

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/Dashboard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = response.json();
            const jwt = data.token;
            sessionStorage.setItem('jwtToken', jwt)

        } catch (error) {
            console.log('Error Logging In:', error)
        }
    }

    return (
        <div>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
            <input 
                type="text"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <input 
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    )
};

export default Login;