import React from 'react'
import Button from '../Button/Button'
import s from './NavbarS.module.css'

const Navbar = () => {
  return (
    <header className={s.header}>
        <Button title={"Edit Users"} active={true}/>    
        <Button title={"Users"} active={false}/>    
    </header>
  )
}

export default Navbar