import React from 'react'
import { NavLink } from 'react-router-dom'

const Professor = (props) => (
  <div className='professor'>
    <div>
      <p className='professor__name'>{props.name}</p>
      <p className='professor__unit'>{props.unit}</p>
    </div>
    <button
      className='button button--link'
      onClick={(e) => {
        props.handleClickProfessor(props.id)
      }}
    >
      abrir
    </button>
  </div>
)

export default Professor