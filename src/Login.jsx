import React from 'react';

import Form from './Form'

function Login() {
    
    return (
        <div>
            <h1>This is the login page</h1>
            <Form/>
            <p>Not a user? <span>  <a href="/register">Register Now</a></span></p>
        </div>
    )
}

export default Login
