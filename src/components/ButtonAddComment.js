import React from 'react'

import { Link } from 'react-router-dom'
const ButtonAddComment = (props) => (
  <div className='button-text'>
    <Link to={`/comment/${props.id}`}>
      <button className='button-text__mais'>
        comentar
      </button>
    </Link>
  </div>
)

export default ButtonAddComment