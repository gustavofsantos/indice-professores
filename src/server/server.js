require('./config/config')

const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')

const { mongoose } = require('./db/mongoose')
const { Professor } = require('./models/professor')
const { UserModel } = require('./models/user')
const { ObjectID } = require('mongodb')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyparser.json())

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

app.patch('/addcomment', (req, res) => {
  console.log('POST /addcomment')
  let id = req.body.id
  let comment = req.body.comment

  console.log(id)
  console.log(comment)

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  console.log(`Append no DB: ${comment}`)

  if (comment) {
    Professor.findByIdAndUpdate(id, 
      {$push: { 
        commentaries: { 
          commentary: comment, 
          ups: 0, 
          downs: 0, 
          visible: true 
        } 
      }})
      .then(prof => {
        if (!prof) {
          return res.status(404).send()
        }
        console.log(prof)
      })
      .catch(error => {
        res.status(404).send()
        console.log(error)
      })
  }
})

// click do botão up no comentário
app.patch('/ecu', (req, res) => {
  console.log('PATH /ecu Will eval up comment')
  let id = req.body.id
  let index = parseInt(req.body.index)

  console.log("id", id)
  console.log('index', index)

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Professor.findByIdAndUpdate(id)
    .then(prof => {
      // update the ups field
      prof.commentaries[index].ups += 1
      prof.save().then(doc => {
          res.status(200).send()
      }).catch(error => {
        console.log(error)
      })
    })
    .catch(error => {
      console.log(error)
    })
  })

  app.patch('/ecd', (req, res) => {
    console.log('PATH /ecd Will eval down comment')
    let id = req.body.id
    let index = parseInt(req.body.index)
  
    console.log("id", id)
    console.log('index', index)
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send()
    }
  
    Professor.findByIdAndUpdate(id)
      .then(prof => {
        console.log(prof)
        prof.commentaries[index].downs += 1
        let ups = prof.commentaries[index].ups
        let downs = prof.commentaries[index].downs
        if (ups - downs < -10) { // threshold of ten negative votes
          prof.commentaries[index].visible = false;
        }
        prof.save().then(doc => {
            res.status(200).send()
        }).catch(error => {
          console.log(error)
        })
      })
      .catch(error => {
        console.log(error)
      })
    })

app.listen(port, () => {
  console.log(`Started at port ${port}`)
})