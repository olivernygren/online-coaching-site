import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import '../css/main.css'
import '../css/login.css'

function Login() {
  
  const history = useHistory();

  const [showLogin, setShowLogin] = useState(true)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [logInSuccessMsg, setLogInSuccessMsg] = useState("");

  const handleShowRegisterForm = () => {
    console.log('clicked')
    setShowLogin(false)
  }
  
  const handleShowLoginForm = () => {
    console.log('clicked')
    setShowLogin(true)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setEmailError('')
    setPasswordError('')

    const formData = { email, password }

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
      const res = await fetch('/api/users/login', options)
      const data = await res.json()

      if (data.errors) {
        if (data.errors.email !== "") {
          setEmailError(data.errors.email)
        }
        if (data.errors.password !== "") {
          setPasswordError(data.errors.password)
        }
      }

      if (data.user) {
        setLogInSuccessMsg("Inloggning lyckades. Du skickas nu vidare...");

        setTimeout(() => {
          history.push("/");
        }, 2000);
      }
    } catch (err) {
      console.error(err)
    }

  }

  function LoginForm() {

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
            <label htmlFor="password">Lösenord</label>
            <input onChange={handlePasswordChange} type="password" name="password" required />
            <span className="login-error">{passwordError}</span>
            <button onClick={handleLoginSubmit} className="login-btn" type="submit">Logga in <i className="fas fa-sign-in-alt"></i> </button>
            <span className="login-success-msg">{logInSuccessMsg}</span>
          </form>
        </div>
      </div>
    )
  }

  function RegisterForm() {

    return (
      <div className="login-container">
        <div className="headers">
          <h4 onClick={handleShowLoginForm} className="login-text">Logga in</h4>
          <div className="circle-left-ca">
            <div className="circle"></div>
          </div>
          <h4 className="create-account-text active">Skapa konto</h4>
          <div className="circle-right-ca">
            <div className="circle"></div>
          </div>
        </div>
        <div className="create-account active">
          <form>
            <h2>Skapa konto</h2>
            <label htmlFor="name">Namn <small>(för- och efternamn)</small> </label>
            <input type="text" name="name" required />
            <span className="login-error"></span>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
            <span className="login-error"></span>

            <div className="split-row">
              <div>
                <label htmlFor="gender">Kön</label>
                <select name="gender" id="gender">
                  <option value="male">Man</option>
                  <option value="female">Kvinna</option>
                </select>
              </div>
              <div>
                <label htmlFor="age">Ålder</label>
                <input type="number" name="age" required />
                <span className="login-error"></span>
              </div>
            </div>

            <div className="split-row-2">
              <div>
                <label htmlFor="height">Längd <small>(cm)</small></label>
                <input type="number" name="height" required />
                <span className="login-error"></span>
              </div>
              <div>
                <label htmlFor="weight">Vikt <small>(kg)</small></label>
                <input type="number" name="weight" required />
                <span className="login-error"></span>
              </div>
            </div>

            <label htmlFor="password">Lösenord</label>
            <input type="password" name="password" required />
            <span className="login-error"></span>
            
            <label htmlFor="password">Upprepa lösenord</label>
            <input type="password" name="password" required />
            <span className="login-error"></span>

            <button className="create-account-btn" type="submit">Skapa konto <i className="fas fa-user"></i> </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <>
      { showLogin ? <LoginForm/> : <RegisterForm /> }
    </>
  )
}

export default Login
