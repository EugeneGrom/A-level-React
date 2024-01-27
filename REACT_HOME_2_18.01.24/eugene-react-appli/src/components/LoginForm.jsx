import React from "react";
import { useState } from "react";

// onLogin = (login, password) => ({login, password});
const LoginForm = ({onLogin = (login, password) => console.log({login, password})}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')

    return (
        <>
            <h2>Login Form</h2>
            <div><input type="text" onChange={log => setLogin(log.target.value)} /></div>

            <div><input type='password' onChange={pass => setPassword(pass.target.value)} /></div>
            <button onClick={() => onLogin(login,password)} disabled={login.length < 5 || password.length < 8}>
                БАТТОН ДИЗАБЛЕД(або ні)!!!
            </button>
        </>
    )
}

export default LoginForm;