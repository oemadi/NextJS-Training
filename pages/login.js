import React, { useState } from 'react'
import LoginForm from '../component/loginForm'

export default function login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details)
    setUser({
      email: details.email,
    })
  }
  const Logout = () => {
    console.log("Logout");
    setUser({
      email: "",
    })

  }
  return (
    <div className="formLogin">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome,<span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  )
}

