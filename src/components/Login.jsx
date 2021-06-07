import React, { useState } from 'react'
import '../css/main.css'
import '../css/login.css'

function Login() {

  const [showLogin, setShowLogin] = useState(true)

  const handleRegisterClick = () => {
    console.log('clicked')
    setShowLogin(false)
  }
  
  const handleLoginClick = () => {
    console.log('clicked')
    setShowLogin(true)
  }

  function LoginForm() {

    return (
      <div className="login-container">
        <div className="headers">
          <h4 className="login-text active">Logga in</h4>
          <h4 onClick={handleRegisterClick} className="create-account-text">Skapa konto</h4>
        </div>
        <div className="login-section active">
          <form>
            <h2>Logga in</h2>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
            <span className="login-error"></span>
            <label htmlFor="password">Lösenord</label>
            <input type="password" name="password" required />
            <span className="login-error"></span>
            <button className="login-btn" type="submit">Logga in</button>
          </form>
        </div>
      </div>
    )
  }

  function RegisterForm() {

    return (
      <div className="login-container">
        <div className="headers">
          <h4 onClick={handleLoginClick} className="login-text">Logga in</h4>
          <h4 className="create-account-text active">Skapa konto</h4>
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

            <button className="create-account-btn" type="submit">Skapa konto</button>
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
