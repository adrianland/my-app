import React from 'react'
import Navbar from './components/navbar/Navbar';
import FirstContent from './components/content/FirstContent';
import SecondContent from './components/content/SecondContent';
import ThirdContent from './components/content/ThirdContent';
import ThankYou from './components/content/ThankYou';
import Footer from './components/footer/Footer';
import './App.css'

export default function Wolox() {
  return (
    <div className="App">
    <div className="header">
      <Navbar/>
      <FirstContent/>
    </div>
    <SecondContent/>
    <h2 className='benefits' id='benefitsDev'>Entre los beneficios que ofrecemos se encuentran <span style={{color: '#00A9E5'}}> ;) </span></h2>
    <ThirdContent />
    <div className="thankyou" >
    <ThankYou />
    </div>
    <Footer />
  </div>
  )
}
