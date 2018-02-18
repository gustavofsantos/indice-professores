import React from 'react' 
import axios from 'axios'
import TiArrowSortedUp from 'react-icons/lib/ti/arrow-sorted-up'
import TiArrowSortedDown from 'react-icons/lib/ti/arrow-sorted-down'

export default class BoxVote extends React.Component {
  state = {
    id: '',
    index: 0,
    posVotes: 0,
    negVotes: 0,
    consumedProp: false,
    voted: false
  }

  updateIndex = () => {
    console.log('update index')
    let newIndex = this.state.posVotes*10 / (this.state.posVotes + this.state.negVotes)
    console.log(newIndex)
    this.setState(() => ({
      index: newIndex
    }))
  }

  componentDidUpdate() {
    if (!this.state.consumedProp) {
      console.log('did update')
      if (this.props.votes) {
        if (this.props.votes.length > 0) {
          let votes = this.props.votes
          console.log(votes)

          let posVotes = 0
          let negVotes = 0

          votes.forEach(vote => {
            if (vote.vote > 0) {
              posVotes += 1
            }
            else {
              negVotes += 1
            }
          })

          this.setState(() => ({
            id: this.props.id,
            posVotes: posVotes,
            negVotes: negVotes,
            index: 10*posVotes/(posVotes + negVotes)
          }))
        }
        else {
          this.setState(() => ({
            id: this.props.id
          }))
        }
      }
      this.setState(() => ({
        consumedProp: true
      }))
    }
  }

  handleClickPos = () => {
    console.log('click pos', this.state)
    if (!this.state.voted) {
      // first modify the state
      this.setState(() => ({
        voted: true,
        posVotes: this.state.posVotes + 1,
        index: (this.state.posVotes + 1)*10/(this.state.posVotes + this.state.negVotes + 1)
      }))

      console.log('enviou')

      axios.patch('/addposvote', {
        id: this.state.id
      })
      .then(res => {
        if (!res) {
          console.log('error')
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
    else {
      alert('Você já avaliou o professor.')
    }
  }

  handleClickNeg = () => {
    console.log('click neg', this.state)
    if (!this.state.voted) {
      // first modify the state
      this.setState(() => ({
        voted: true,
        negVotes: this.state.negVotes + 1,
        index: (this.state.posVotes)*10/(this.state.posVotes + this.state.negVotes + 1)
      }))

      axios.patch('/addnegvote', {
        id: this.state.id
      })
      .then(res => {
        if (!res) {
          console.log('error')
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
    else {
      alert('Você já avaliou o professor.')
    }
  }

  render() {
    return (
      <div className='box-vote'>
        <button className='box-vote__button-pos' onClick={() => this.handleClickPos()}>
          <TiArrowSortedUp /> 
        </button>
        <p className='box-vote__index'>{this.state.index.toFixed(1) || "N/A"}</p>
        <button className='box-vote__button-neg' onClick={() => this.handleClickNeg()}>
          <TiArrowSortedDown />
        </button>
      </div>
    )
  }
}
