import React from 'react'

const BoxComment = (props) => (
  <div >
    <form className='add-commentary' onSubmit={props.handleAddComment}>
      <textarea className='add-commentary__text' type='text' name='comment' 
        rows="6" autoFocus required/>
      <div  >
          <button className='add-commentary__button'>comentar</button>
      </div>
    </form>
  </div>
)

export default BoxComment