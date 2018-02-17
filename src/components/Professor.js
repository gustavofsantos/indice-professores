import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Professor = (props) => (
  <div className='professor'>
    <Link to={`/professor/${props.id}`}>
      <button className='professor--link'>
        <div className='professor__info-box'>
          <p className='professor__name'>{props.name}</p>
          <p className='professor__unit'>{props.unit}</p>
        </div>
        {/*
        <div>
          <h2>{props.index || "N/A"}</h2>
        </div>
        */}
      </button>
    </Link>
  </div>
)

export default Professor