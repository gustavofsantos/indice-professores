import React from 'react'

const Header = (props) => (
  <div className='header'>
    <div className='container' id='v-gradient'>
      <h1 className='header__title'>{props.title || "nonSense"}</h1>
      <h6 className='header__subtitle'>{props.subtitle}</h6>
    </div>
  </div>
)

export default Header