import React from 'react'

import Commentaries from './Commentaries'
import ButtonAddComment from './ButtonAddComment'

/* FAZER UMA CLASSE */
const AddCommentView = (props) => (
  <div>
    <div className='container'>
      <div>
        <h1 className='professor__name'>{props.professor.name}</h1>
        <h1 className='professor__unit'>{props.professor.unit}</h1>
      </div>
      <div>
        <form className='search' onSubmit={props.handleAddComment()}>
          <input className='search__input' type='text' name='comment'/>
          <button className='button' onClick={props.handleAddComment()}>comentar</button>
        </form>
      </div>
    </div>

    <div>
      <p className='container-comments__message'>Use o bom senso</p>
    </div>
  </div>
)

export default AddCommentView