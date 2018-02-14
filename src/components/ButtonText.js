import React from 'react'

const ButtonText = (props) => (
  <div className='header'>
    <div className='container'>
      <button
        className='button button--link'
        onClick={(e) => props.handleClickMore()}
      >
        mais
      </button>
    </div>
  </div>
)

export default ButtonText