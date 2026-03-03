import React from 'react'
import './Navbar.scss'
import DateTime from './DateTime.jsx'

const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="./nav-icon/apple.svg" alt="" />
            </div>
            <div className="nav-item">
                <p>Rudra Choudhary</p>
            </div>
            <div className="nav-item">
                 <p>File</p>
            </div>
            <div className="nav-item">
               <p>window</p>
            </div>
            <div className="nav-item">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="apple-icon">
                <img src="./nav-icon/wifi.svg" alt="" />
            </div>
            <div className="nav-item">
                <DateTime />
            </div>
        </div>
    </nav>
  )
}

export default Navbar