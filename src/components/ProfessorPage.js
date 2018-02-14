import React from 'react'

import Commentaries from './Commentaries'
import ButtonAddComment from './ButtonAddComment'

const ProfessorPage = (props) => (
  <div>
    <div className='container'>
      <h1 className='container-professor__name'>{props.name}</h1>
      <h2 className='container-professor__unit'>{props.unit}</h2>
      <h3 className='container-professor__index'>{props.index}</h3>
      <p  className='container-professor__votes'>{props.votes}</p>
    </div>

    <div className='container-comments'>
      <div>
        <p className='container-comments__message'>
          Ainda não existem comentários sobre este professor.
        </p>
      </div>
      <div className='container-comments__addcomment'>
        <ButtonAddComment 
          handleAddCommentView={props.handleAddCommentView}
        />
      </div>
      <div>
        <Commentaries
          commentaries={props.commentaries} />
      </div>
    </div>
  </div>
)

export default ProfessorPage