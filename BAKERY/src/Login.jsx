import React, { useState } from 'react';
import {Link,useNavigate}from "react-router-dom";


const Login = () => {
  const Navigate = useNavigate();
    function gotoHome(){
      Navigate("/");
    }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };
  function inputlogin(e){
    let {name,value}=e.target;
  }

  return (
    <div className='login'>
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text"id="username" value={username} onChange={inputlogin}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password"id="password" value={password} onChange={inputlogin}/>
        </div>
        <button type="submit" className="login-button"onClick={gotoHome}>Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;