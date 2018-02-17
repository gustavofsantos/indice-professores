import React from 'react' 

const renderFullComment = (props) => (
  <div className='commentary-box'>
    <p className='commentary-box__text'>{props.commentary.commentary}</p>
    <p>{props.commentary.ups}</p>
    <p>{props.commentary.downs}</p>
    <div className='commentary-box__button'>
      <button className='commentary-box__button--up'
        onClick={() => props.handleClickUp(props.index)}>up</button>
      <button className='commentary-box__button--down'
        onClick={() => props.handleClickDown(props.index)}>down</button>
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