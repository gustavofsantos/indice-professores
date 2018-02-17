import React from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import axios from 'axios'

// custom components
import Header from './Header'
import Search from './Search'
import Professors from './Professors'
import ProfessorPage from './ProfessorPage'
import ButtonText from './ButtonText'
import AddCommentView from './AddCommentView';
export default class App extends React.Component {
  state = {
    professors: [],
    view: 'initial',
    prevView: '',
    professor: {},
    query: ' '
  }

  handleQuery = (text) => {
    if (!text) {
      return "Entre com um texto válido"
    }

    axios.get(`/query/${text}`)
      .then(res => {
        console.log(res.data.professors)
        this.setState(() => ({
          query: text,
          professors: res.data.professors
        }))
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleClickProfessor = (id) => {
    if (!id) {
      return "Error by clicking in professor"
    }
    console.log('click professor', id)

    axios.get(`/prof/${id}`)
      .then(res => {
        console.log(res.data)

        if (res) {
          this.setState(() => ({
            prevView: 'initial',
            view: 'professor',
            professor: {
              _id: res.data.professor._id,
              name: res.data.professor.name,
              unit: res.data.professor.unit,
              index: res.data.professor.index || null,
              votes: res.data.professor.votes,
              comments: res.data.professor.comments || []
            }
          }))
        }
        else {
          alert('erro.')
        }        
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleClickMore = () => {
    const query = this.state.query
    const quantity = this.state.professors.length + 10
    axios.get(`/queryqtd/${query}/${quantity}`)
      .then(res => {
        console.log(res)
        this.setState(() => ({
          professors: res.data.professors
        }))
      })
      .catch(error => console.log(error))
  }

  handleAddComment = () => {
    console.log('handleAddComment')
    console.log(this.state.professor)
  }

  handleAddCommentView = () => {
    this.setState(() => ({
      view: 'addcomment'
    }))
  }

  componentDidMount() {
    console.log('componente montado')

    console.log(this.state)

    axios.get('/top')
      .then(res => {
        console.log(res.data)
        this.setState(() => ({
          professors: res.data.professors10
        }))
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update', this.state)
  }
  render() {
    if (this.state.view === 'initial') {
      return (
        <div>
          <Header 
            title='default'/>
          
        </div>
      )
    }
    else if (this.state.view === 'professor') {
      return (
        <div>
          <Header
            username='default' />
          <div className='widget'>
            <ProfessorPage
              name={this.state.professor.name}
              unit={this.state.professor.unit}
              index={this.state.professor.index}
              votes={this.state.professor.votes}
              commentaries={[]}
              handleAddCommentView={this.handleAddCommentView}
              profId={this.state.professor._id} />
          </div>
        </div>
      )
    }
    else if (this.state.view === 'addcomment') {
      return (
        <div>
          <Header
            username='default' />
          <div className='widget'>
            <AddCommentView
              professor={this.state.professor} 
              handleAddComment={this.handleAddComment}/>
          </div>
        </div>
      )
    }
  }
}