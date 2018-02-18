import React from 'react'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'

import Commentary from './Commentary'

const Commentaries = (props) => (
  <div>
    <p className='add-commentary__message'>comentários</p>
  {
    props.commentaries.length === 0 &&
      <div>
      <p className='commentary-box__text-message '>
        Ainda não existem comentários.
      </p>
      <p className='commentary-box__text-message '>
        Conte a sua história com <TiHeartFullOutline />, 
      </p>
      <p className='commentary-box__text-message '>
        será para sempre anônima.
      </p>
      </div>
  }
  {
    props.commentaries.map((commentary, index) => (
      <Commentary
        key={index}
        index={index}
        commentary={commentary}
        handleClickUp={props.handleClickUp}
        handleClickDown={props.handleClickDown} />
    ))
  }
  </div>
)

export default Commentaries