import React, { useState } from 'react';


export default function Auth() {
    const [value, setValue] = useState({})
    function handleChange(event) {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }

    function handleUnsuccesfulAuth() {
        window.alert("Not An Authorized User!")
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await fetch("https://capstone-back-ck.herokuapp.com/auth", {
            method: 'POST',
            headers: {'Content-Type': 'application/JSON'},
            credentials: 'include',
            body: JSON.stringify({
                client: {
                    email: value.email,
                    password: value.password
                }
            })
        })
        console.log({response})
        const data = await response.json();
        (data.status === "Authorized") ? console.log("authorized") : handleUnsuccesfulAuth()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='auth-page'>
                <input
                    type='text'
                    name='email'
                    placeholder='Your Email'
                    value={value.email}
                    onChange={handleChange} />

                <input
                    type='password'
                    name='password'
                    placeholder='Your Password'
                    value={value.password}
                    onChange={handleChange} />

                    <button className='login-btn btn' type='submit'>Login</button>
            </form>
        </div>
    );
}