const mongoose = require('mongoose')

const UserModel = mongoose.model('UsersIPPELApp', {
  username: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 4
  },
  tokens: [{
    acess: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
})

module.exports = { UserModel }