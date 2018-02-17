import React from 'react'

const ButtonText = (props) => {
  if (props.renderButton) {
    return (
      <div className='button-text'>
          <button
            className='button-text__mais'
            onClick={(e) => props.handleClickMore()}>
              mais
          </button>
      </div>
    )
  }
  else {
    return (
      <div>
      </div>
    )
  }
}


export default ButtonText