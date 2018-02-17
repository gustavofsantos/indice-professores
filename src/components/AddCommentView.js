import React from 'react'
import axios from 'axios'

import Commentaries from './Commentaries'
import ButtonAddComment from './ButtonAddComment'

import BoxComment from './BoxComment'

/* FAZER UMA CLASSE */
export default class AddCommentView extends React.Component {
  state = {
    id: '',
    name: '',
    unit: ''
  }

  

  componentWillMount() {
    let id = this.props.match.params.id

    this.setState(() => ({
      id: id
    }))
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div>
            <h1 className='professor__name'>{this.state.name}</h1>
            <h1 className='professor__unit'>{this.state.unit}</h1>
          </div>
          <div>
            <BoxComment 
              handleAddComment={this.handleAddComment} />
          </div>
        </div>
      </div>
    )
  }
}