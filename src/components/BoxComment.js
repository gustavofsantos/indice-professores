import React from 'react'

const BoxComment = (props) => (
  <div>
    <form onSubmit={props.handleAddComment}>
      <textarea className='add-commentary__text' type='text' name='comment' 
        rows="12" autoFocus required/>
      <div className='button-text' >
          <button className='button-text__mais'>comentar</button>
      </div>
    </form>
    <div>
      <p className='add-commentary__message'>Use o bom senso</p>
    </div>
  </div>
)

export default BoxComment