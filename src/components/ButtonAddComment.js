import React from 'react'

const ButtonAddComment = (props) => (
  <div className='header'>
    <div className='container'>
      <button
        className='button button--link'
        onClick={(e) => props.handleAddCommentView()}
      >
        comentar
      </button>
    </div>
  </div>
)

export default ButtonAddComment