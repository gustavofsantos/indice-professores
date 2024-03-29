import React from 'react' 

const ProfessorInfo = (props) => (
  <div>
    <h1 className='container-professor__name'>{props.name}</h1>
    <h2 className='container-professor__unit'>{props.unit}</h2>
    <p  className='container-professor__votes'>{props.votes || "0"} avaliações</p>
  </div>
)

export default ProfessorInfo