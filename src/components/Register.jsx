import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import '../css/main.css'
import '../css/login.css'
import PasswordValidator from 'password-validator';
import validator from 'validator';

function Register() {

  let schema = new PasswordValidator()

  schema
  .is().min(6) //minlength 6 char
  .is().max(100) // maxlength 100 char
  .has().uppercase() // must have uppercase letters
  .has().lowercase() // must have  lowercase letters
  .has().digits(1) // must have 1 digit
  .has().not().spaces() // must not have spaces
  .is().not().oneOf(['Passw0rd, Password123']) // cannot use these

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
  const [weight, setWeight] = useState(Number)
  const [weightError, setWeightError] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [repeatPasswordError, setRepeatPasswordError] = useState("")

  const [registerSuccessMsg, setRegisterSuccessMsg] = useState("");

  const handleShowLoginForm = () => {
    history.push('/login')
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }

  const handleHeightChange = (e) => {
    setHeight(e.target.value)
  }

  const handleWeightChange = (e) => {
    setWeight(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value)
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()

    setNameError('')
    setEmailError('')
    setAgeError('')
    setHeightError('')
    setWeightError('')
    setPasswordError('')
    setRepeatPasswordError('')

    // FRONT END VALIDATION:

    // name
    if (name.length < 2 || name.includes(1 || 2 || 3 || 4 || 5 || 6|| 7 || 8 || 9 || 0)) {
      setNameError('Ange ett giltigt namn')
      return
    }

    // email
    if (!email.includes('@' && '.')) {
      setEmailError('Ange en giltig email-adress')
      return
    }

    // age
    if (!validator.isNumeric(age)) {
      setAgeError('Ange din ålder i siffror')
      return
    }

    //height
    if (!validator.isNumeric(height)) {
      setHeightError('Ange din längd i siffror')
      return
    }

    // weight
    if (!validator.isNumeric(weight)) {
      setWeightError('Ange din vikt i siffror')
      return
    }

    if (schema.validate(password) === false) {
      if (password === "Passw0rd" || password === "Password123") {
        setPasswordError('Ange ett starkare lösenord')
        return
      }
      setPasswordError('Ange ett lösenord med; mellan 6-100 tecken, minst en siffra, minst en versal, minst en gemen och utan mellanslag')
      return
    }

    if (!password === repeatPassword) {
      setRepeatPasswordError('Lösenorden stämmer inte överens')
    }

    const formData = {
      name, 
      email,
      gender,
      age,
      height,
      weight,
      password
    }

    const options = {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    try {
      const res = await fetch('/api/users/register', options)
      const data = await res.json()

      if (data.errors) {
        setEmailError(data.errors.email)
        return
      } else {
        setRegisterSuccessMsg('Konto skapat! Du skickas nu vidare till logga-in-sidan...')

        setTimeout(() => {
          history.push('/login')
        }, 2000)
      }
    } catch (err) {
      console.error(err)
    }
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
          <input type="text" name="name" onChange={handleNameChange} required />
          <span className="login-error">{nameError}</span>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleEmailChange} required />
          <span className="login-error">{emailError}</span>

          <div className="split-row">
            <div>
              <label htmlFor="gender">Kön</label>
              <select name="gender" id="gender" onChange={handleGenderChange}>
                <option value="Man">Man</option>
                <option value="Kvinna">Kvinna</option>
              </select>
            </div>
            <div>
              <label htmlFor="age">Ålder</label>
              <input type="number" name="age" onChange={handleAgeChange} required />
              <span className="login-error">{ageError}</span>
            </div>
          </div>

          <div className="split-row-2">
            <div>
              <label htmlFor="height">Längd <small>(cm)</small></label>
              <input type="number" name="height" onChange={handleHeightChange} required />
              <span className="login-error">{heightError}</span>
            </div>
            <div>
              <label htmlFor="weight">Vikt <small>(kg)</small></label>
              <input type="number" name="weight" onChange={handleWeightChange} required />
              <span className="login-error">{weightError}</span>
            </div>
          </div>

          <label htmlFor="password">Lösenord</label>
          <input type="password" name="password" onChange={handlePasswordChange} required />
          <span className="login-error">{passwordError}</span>
          
          <label htmlFor="password">Upprepa lösenord</label>
          <input type="password" name="password" onChange={handleRepeatPasswordChange} required />
          <span className="login-error">{repeatPasswordError}</span>

          <button className="create-account-btn" type="submit" onClick={handleRegisterSubmit}>Skapa konto <i className="fas fa-user"></i> </button>
          <span className="login-success-msg">{registerSuccessMsg}</span>
        </form>
      </div>
    </div>
  )
}

export default Register
