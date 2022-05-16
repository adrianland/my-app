import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Workshops from '../../svg/logo_full_color.svg';
import { Link } from 'react-scroll'
import Modal from "../modal/Modal";
import { FaBars} from 'react-icons/fa'


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [modalOpen, setModalOpen] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  return (
    <nav>
      <img className='logo' src={Workshops} />
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">Inicio</li>
          <li className="items"><Link to='benefitsDev'>Beneficios</Link></li>
          <button className="btnLogin"
            onClick={() => {
              setModalOpen(true);
            }}>Login</button>
        </ul>
      )}
      {modalOpen && <Modal setOpenModal={setModalOpen} />}

      <button onClick={toggleNav} className="btn"><FaBars/></button>
    </nav>
  )
}
