import React from 'react'
import './ThankYou.css';

export default function ThankYou() {
  return (
    <div className="footerContent">
      <h1 className='complete'>Gracias por <span style={{ color: '#00A9E5' }}>completar el ejercicio </span> <br />Te invitamos a ver mas información</h1>
      <button className='btnShowInfo'onClick={()=> window.open('http://www.wolox.com.ar/','_blank')}>Conocer más</button>
    </div>
  )
}
