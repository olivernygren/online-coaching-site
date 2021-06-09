const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: 'String',
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: 'String',
    required: true,
    minlength: 6,
  },
  name: {
    type: 'String',
    required: true
  },
  gender: {
    type: 'String',
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
})

userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email })

  if (user) {
    const auth = await bcrypt.compare(password, user.password)
    if (auth) {
      return user
    }
    throw Error('Fel lösenord')
  }
  throw Error('Fel email')
}

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel