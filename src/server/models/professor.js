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
  votes: {
    type: Number,
    required: true
  }
})

/*
 * TODO: Implementar uma forma de guardar o voto
 * junto da data em que foi votado, para gerar gráficos
 */

module.exports = { Professor }