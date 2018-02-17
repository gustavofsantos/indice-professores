const mongoose = require('mongoose')

const Professor = mongoose.model('Professor', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  unit: {
    type: String,
    required: true,
    trim: true
  },
  index: {
    type: String,
    default: null
  },
  votes: [
    {
      vote: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: null
      }
  }],
  commentaries: [{
    commentary: {
      type: String,
      required: true,
      default: null
    },
    ups: {
      type: Number,
      required: true,
      default: 0
    },
    downs: {
      type: Number,
      required: true,
      default: 0
    },
    visible: { 
      type: Boolean,
      required: true,
      default: true
    }
  }]
})

/*
 * TODO: Implementar uma forma de guardar o voto
 * junto da data em que foi votado, para gerar gráficos
 */

module.exports = { Professor }