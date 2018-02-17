import React from 'react'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'

const renderFullComment = (props) => (
  <div className='commentary-box'>
    <p className='commentary-box__text'>
      {props.commentary.commentary}
    </p>
    
    <div className='commentary-box__button'>
      <button className='commentary-box__button--up commentary-box__counters--text'
        onClick={() => props.handleClickUp(props.index)}>
          <TiThumbsUp size={24}/> {props.commentary.ups}
      </button>
      <button className='commentary-box__button--down commentary-box__counters--text'
        onClick={() => props.handleClickDown(props.index)}>
        <TiThumbsDown size={24}/> {props.commentary.downs}
      </button>
    </div>
  </div>
)

const renderHiddenComment = () => (
  <div className='commentary-box'>
    <p className='commentary-box__text'>
      Este comentário recebeu muitos votos negativos.
    </p>
  </div>
)

const Commentary = (props) => {
  if (props.commentary.visible) {
    return renderFullComment(props)
  }
  return renderHiddenComment()
}

export default Commentary