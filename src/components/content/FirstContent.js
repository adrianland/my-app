import React from 'react'
import './FirstContent.css'

export default function FirstContent() {

  return (
    <div className='firstContent'>
      <div className='txtWelcome'>
       <h1 className='txtFirstContent'><span style={{fontWeight: 'normal'}}>Bienvenido a tu </span><span style={{fontWeight: 'bold'}}>Entrevista Práctica </span>en<span style={{color: '#97CF00'}}> Wolox</span></h1>
      </div>
      <img src={require('../../image/Img Hero/Ic_ilustra_Hero.png')} width={'auto'} height={'auto'} />
    </div>
  )
}
