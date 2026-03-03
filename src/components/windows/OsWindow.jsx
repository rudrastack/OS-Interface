import React from 'react'
import { Rnd } from 'react-rnd'
import './OsWindow.scss'

const OsWindow = ({children}) => {
  return (
    <Rnd default={{
        x: 300,
        y: 200,
        width: "40vw",
        height: "40vh",
    }}>
        <div className="os-window">
            <div className="window-header">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title">rudrachoudhary - zsh</div>
            </div>
            <div className="window-content">{children}</div>
              </div>
    </Rnd>)
}

export default OsWindow