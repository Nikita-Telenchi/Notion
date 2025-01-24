import React from 'react'
import s from './ButtonS.module.css'

const Button = ({title = "", active = false}) => {
    const styleButton = {
        backgroundColor: active ? "#fff" : "#c4c4c4"
    }
  return (
    <button className={s.button} style={styleButton}>{title}</button>
  )
}

export default Button