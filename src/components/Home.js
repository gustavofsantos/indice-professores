import React from 'react'
import axios from 'axios'

import Search from './Search'
import Professors from './Professors'
import ButtonText from './ButtonText'

export default class Home extends React.Component {
  state = {
    professors: [],
    query: ' ',
    renderButton: false
  }

  handleQuery = (text) => {
    if (!text) {
      return "Entre com um texto válido"
    }

    axios.get(`/query/${text}`)
      .then(res => {
        let profLen = res.data.professors.length || 0
        if (profLen < 10) {
          this.setState(() => ({
            query: text,
            professors: res.data.professors,
            renderButton: false
          }))
        }
        else {
          this.setState(() => ({
            query: text,
            professors: res.data.professors,
            renderButton: true
          }))
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
        // console.log(res)
        if (res.data.professors.length >= quantity) {
          this.setState(() => ({
            professors: res.data.professors,
            renderButton: true
          }))
        } else {
          this.setState(() => ({
            professors: res.data.professors,
            renderButton: false
          }))
        }
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    console.log('componente montado')

    /*
    axios.get('/home')
      .then(res => {
        // console.log(res.data)
        this.setState(() => ({
          professors: res.data.professors10,
          renderButton: true
        }))
      })
      .catch(error => {
        console.log(error)
      })
      */
  }

  render() {
    return (
      <div className='container'>
        <Search handleQuery={this.handleQuery} />
        <div className='widget'>
          <Professors 
            professors={this.state.professors} />
        </div>
        <div className='widget'>
          <ButtonText
            renderButton={this.state.renderButton}
            handleClickMore={this.handleClickMore} />
        </div>
      </div>
    )
  }
}