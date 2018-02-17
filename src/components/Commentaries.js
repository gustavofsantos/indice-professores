import React from 'react'

import Commentary from './Commentary'

const Commentaries = (props) => (
  <div>
    <p className='add-commentary__message'>comentários</p>
  {
    props.commentaries.length === 0 &&
      <p>Ainda não existem comentários.</p>
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