const UserModel = require('./model')
const bcrypt = require('bcrypt')

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find()
    res.send(users)
  } catch (err) {
    console.error(err)
  }
}

exports.registerUser = async (req, res) => {
  const { email, password, name, gender, age, height, weight } = req.body
  const emailExists = await UserModel.exists({ email })

  if (!emailExists) {
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
      email,
      password: hashedPassword,
      name,
      gender,
      age,
      height,
      weight
    }

    try {
      const user = await UserModel.create(newUser)
      res.status(201).json(user)
    } catch (err) {
      res.status(400).json(err)
    }
  } else {
    let errors = { email: '' }

    // if email already exists in db
    errors.email = 'Denna email finns redan registrerad'
    res.status(400).json({ errors })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  let errors = { email: '', password: '' }

  try {
    const user = await UserModel.login(email, password)
    res.cookie('user', user._id, { maxAge: 1000 * 60 * 60 * 24 })
    res.status(200).json({ user })
  } catch (err) { // här fångas error från "throw"

    //incorrect email
    if (err.message === 'Fel email') {
      errors.email = 'Denna email finns ej registrerad'
    }
    
    //incorrect password
    if (err.message === 'Fel lösenord') {
      errors.password = 'Fel lösenord'
    }

    res.status(400).json({ errors })
  }
}

exports.logout = async (req, res) => {

}

exports.readCookies = async (req, res) => {

}