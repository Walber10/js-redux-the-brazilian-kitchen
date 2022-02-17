import React from 'react'
import logo from '../../Resources/Brazilian_kitchen.svg'
import '../Logo/logo.css'

const Logo = () => {
  return (
    <div className='logo'>
        <img src={logo} alt='logo' />
    </div>
  )
}

export default Logo