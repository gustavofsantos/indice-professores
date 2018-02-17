import React from 'react'
import axios from 'axios'

import Commentaries from './Commentaries'
import ButtonAddComment from './ButtonAddComment'
import Link from 'react-router-dom/Link';
import ProfessorInfo from './ProfessorInfo';

export default class ProfessorPage extends React.Component {
  state = {
    _id: '',
    name: '',
    unit: '',
    index: '',
    votes: '',
    comments: [],
    haveVoted: false
  }

  getServerProfessor = (id) => {
    if (!id) {
      return "Error by clicking in professor"
    }
    // console.log('click professor', id)

    axios.get(`/prof/${id}`)
      .then(res => {
        // console.log(res.data)

        if (res) {
          this.setState(() => ({
            _id: res.data.professor._id,
            name: res.data.professor.name,
            unit: res.data.professor.unit,
            index: res.data.professor.index,
            votes: res.data.professor.votes,
            comments: res.data.professor.commentaries
          }))
        }      
      })
      .catch(error => {
        console.log(error)
      })
  }

  addComment = () => {
    console.log('link pra view de comentário.')
  }

  handleClickUp = (index) => {
    console.log(`Up [${index}]`)

    if (this.state.haveVoted) {
      return alert('Você já votou.')
    }

    axios.patch('/ecu', {
      id: this.state._id,
      index: index
    })
    .then(res => {
      console.log(res)
      this.setState(() => ({
        haveVotted: true
      }))
    })
    .catch(error => {
      console.log(error)
    })
  }


  handleClickDown = (index) => {
    console.log(`Down [${index}]`)

    if (this.state.haveVoted) {
      return alert('Você já votou.')
    }

    axios.patch('/ecd', {
      id: this.state._id,
      index: index
    })
    .then(res => {
      console.log(res)
      this.setState(() => ({
        haveVotted: true
      }))
    })
    .catch(error => {
      console.log(error)
    })
  }

  componentWillMount() {
    console.log('Componente ProfessorPage irá montar...')
    let id = this.props.match.params.id
    if (id) {
      this.getServerProfessor(id)
    }
    else {
      console.log('erro ao obter o id')
    }
  }

  componentDidMount() {
    console.log('Componente ProfessorPage montado.')
  }
  render() {
    return (
        <div className='container'>
          <div>
            <ProfessorInfo
              name={this.state.name}
              unit={this.state.unit.toUpperCase()}
              index={this.state.index}
              votes={this.state.votes} />
          </div>
          <div className='container-comments'>
              <Commentaries 
                commentaries={this.state.comments} 
                handleClickUp={this.handleClickUp}
                handleClickDown={this.handleClickDown} />
          </div>
          <div className='widget'>
            <ButtonAddComment id={this.state._id} />
          </div>
        </div>
    )
  }
}