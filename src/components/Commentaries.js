import React from 'react'

const Commentary = (props) => (
  <div className='commentary'>
    <p className='commentary__usename'>{props.username}</p>
    <p className='commentary__commentary'>{props.commentary}</p>
  </div>
)

export default Commentary