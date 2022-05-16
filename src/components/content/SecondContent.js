import React from 'react'
import './SecondContent.css'
import {FaTwitter} from 'react-icons/fa'

export default function SecondContent() {
    return (
        <div className="secondContent">
            <div className="card">
                <div className="textos">
                  <h1><span  style={{color: '#97CF00'}}>350 + </span><span style={{color: '#00A9E5'}}>woloxers </span></h1>
                </div>
                <button className="btnFollow" onClick={()=> window.open('https://twitter.com/wolox?lang=es','_blank')}>Siguenos</button>

                <button className="btnTwitter"><FaTwitter/> @Wolox</button>

            </div>
            <div className="motivation" >
            <h1 className='txtSecondContent'>Trabajamos para <span  style={{color: '#97CF00'}}>convertir </span><span style={{color: '#00A9E5'}}>ideas </span>en proyectos.</h1>

            </div>
        </div>
    )
}
