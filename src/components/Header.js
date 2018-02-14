import React from 'react'

const Header = (props) => (
  <div className='header'>
    <div className='container'>
      <h1 className='header__title'>Indice de Professores</h1>
      <h6 className='header__subtitle'>Universidade Federal de Pelotas</h6>
      {/*<p className='header__username'>{props.username}</p>*/}
    </div>
  </div>
)

export default Header