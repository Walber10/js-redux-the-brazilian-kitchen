import React from 'react'
import logo from '../../Resources/logo.jpeg'
import '../Logo/logo.css'

const Logo = () => {
  return (
    <div className='logo'>
        <img src={logo} alt='logo' />
    </div>
  )
}

export default Logo