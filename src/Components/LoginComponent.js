
import React, { useState, createContext, useContext} from "react";
import { Context } from "../Nav";
const LoginForm=()=>{
    const[formData, setFormData]= useContext(Context)

    const[inputUsername, setInputUsername] = useState('');

const handleSubmit = (e)=>{
    e.preventDefault();
    setFormData({...formData, username: inputUsername});
    alert(`Welcome ${inputUsername}`)
}
    return(
        <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id="username"
            name="username"
            value={inputUsername}
            onChange={(e)=>setInputUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
            
            <button type="submit"  className="submitButton">Log in</button>
        </form>

    )
}

export default LoginForm