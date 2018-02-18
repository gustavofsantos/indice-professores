import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Professor = (props) => (
  <div className='professor'>
    <Link className='professor--link' to={`/professor/${props.id}`}>
      <button className='professor--link'>
        <div className='professor__info-box'>
          <p className='professor__name'>{props.name}</p>
          <p className='professor__unit'>{props.unit.toUpperCase()}</p>
        </div>
      </button>
    </Link>
  </div>
)

export default Professor