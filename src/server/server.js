require('./config/config')

const express = require('express')
const path = require('path')

const { mongoose } = require('./db/mongoose')
const { Professor } = require('./models/professor')
const { UserModel } = require('./models/user')
const { ObjectID } = require('mongodb')

const app = express()
const port = process.env.PORT || 3000

const search = (data, term) => {
  var results = []

  data.forEach(professor => {
    if (professor.name.toLowerCase().indexOf(term.toLowerCase()) >= 0) {
      results.push(professor)
    }
    if (professor.unit.toLowerCase().indexOf(term.toLowerCase()) >= 0) {
      results.push(professor)
    }
  })

  return results
}

app.use(express.static(path.join(__dirname, './../../public')));

app.get('/query/:id', (req, res) => {
  console.log('GET /query/:id')

  const query = req.params.id
  console.log(query)

  Professor.find({}, (error, resp) => {
    if (!error) {
      const professorsQuery = search(resp, query)

      console.log('Foram encontrados', professorsQuery.length, 'resultados para a query ', query)

      const professors = professorsQuery.slice(0, 10)
      if (professors.length > 0) {
        res.status(200).send({ professors })
      }
    }  
    else {
      res.status(404).send()
    }
  })
})

app.get('/queryqtd/:query/:qtd', (req, res) => {
  console.log('GET /queryqtd/:query/:qtd')
  console.log(req.params)
  const query = req.params.query
  const qtd = parseInt(req.params.qtd) 

  console.log(query, qtd)

  Professor.find({}, (error, resp) => {
    if (!error) {
      const professorsQuery = search(resp, query)
      const professors = professorsQuery.slice(0, qtd)

      if (professors.length > 0) {
        res.status(200).send({ professors })
      }
    }
    else {
      res.status(404).send()
    }
  })
})

app.get('/prof/:id', (req, res) => {
  console.log('GET /prof/:id')
  console.log(req.params.id)

  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    res.status(404).send()
  }
  Professor.findById(id).then(professor => {
    if (!professor) {
      return res.status(404).send()
    }
    res.status(200).send({ professor })
  }).catch(e => res.status(400).send())
})

app.get('/top', (req, res) => {
  Professor.find().then(professors => {
    professors10 = professors.slice(0, 10)
    //console.log(professors10)
    res.status(200).send({ professors10 })
  }).catch(error => {
    console.log('error at GET /top')
    console.log(error)
  })
})

app.listen(port, () => {
  console.log(`Started at port ${port}`)
})