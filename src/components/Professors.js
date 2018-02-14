import React from 'react'
import Professor from './Professor'

const Professors = (props) => (
  <div>
    {props.professors.length === 0 &&
      <p>Pesquise por um professor para começar</p>
    }
    {
      props.professors.map((professor, index) => (
        <Professor
          key={index}
          name = {professor.name}
          unit = {professor.unit}
          index = {professor.index}
          id = {professor._id}
          votes = {professor.votes}
          handleClickProfessor = {props.handleClickProfessor}
        />
      ))
    }
  </div>
)

export default Professors;