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

}

exports.logout = async (req, res) => {

}

exports.readCookies = async (req, res) => {

}