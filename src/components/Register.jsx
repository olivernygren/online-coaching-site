import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Register() {

  const history = useHistory()

  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [gender, setGender] = useState("Man")
  const [age, setAge] = useState(Number)
  const [ageError, setAgeError] = useState("")
  const [height, setHeight] = useState(Number)
  const [heightError, setHeightError] = useState("")
  const [reapeatPassword, setReapeatPassword] = useState("")
  const [repeatPasswordError, setRepeatPasswordError] = useState("")

  const [registerSuccessMsg, setRegisterSuccessMsg] = useState("");

  const handleShowLoginForm = () => {
    history.push('/login')
  }
  
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

export default Register
