import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import '../css/main.css'
import '../css/login.css'

function Login() {
  
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [logInSuccessMsg, setLogInSuccessMsg] = useState("");

  const handleShowRegisterForm = () => {
    history.push('/register')
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    console.log('clicked')

    setEmailError('')
    setPasswordError('')

    const formData = { email, password }
    console.log(formData)

    //Email validation
    if (!email.includes('@' && '.')) {
      setEmailError('Ange en giltig email-adress')
      return
    }

    const options = {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    try {
      console.log('trycatch')
      const res = await fetch('/api/users/login', options)
      console.log(res)
      const data = await res.json()
      console.log(data)

      if (data.errors) {
        console.log(data.errors)
        if (data.errors.email !== "") {
          setEmailError(data.errors.email)
        }
        if (data.errors.password !== "") {
          setPasswordError(data.errors.password)
        }
      }

      if (data.user) {
        console.log(data.user)
        setLogInSuccessMsg("Inloggning lyckades. Du skickas nu vidare...");

        setTimeout(() => {
          history.push("/");
        }, 2000);
      }
    } catch (err) {
      console.error(err)
    }

  }

  return (
    <div className="login-container">
      <div className="headers">
        <div className="circle-left">
          <div className="circle"></div>
        </div>
        <h4 className="login-text active">Logga in</h4>
        <div className="circle-right">
          <div className="circle"></div>
        </div>
        <h4 onClick={handleShowRegisterForm} className="create-account-text">Skapa konto</h4>
      </div>
      <div className="login-section active">
        <form>
          <h2>Logga in</h2>
          <label htmlFor="email">Email</label>
          <input onChange={handleEmailChange} type="text" name="email" required />
          <span className="login-error">{emailError}</span>
          <label htmlFor="password">L??senord</label>
          <input onChange={handlePasswordChange} type="password" name="password" required />
          <span className="login-error">{passwordError}</span>
          <button onClick={handleLoginSubmit} className="login-btn" type="submit">Logga in <i className="fas fa-sign-in-alt"></i> </button>
          <span className="login-success-msg">{logInSuccessMsg}</span>
        </form>
      </div>
    </div>
  )
}

export default Login
