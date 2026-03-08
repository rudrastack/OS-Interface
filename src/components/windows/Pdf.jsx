import React from 'react'
import OsWindow from './OsWindow'
import './Pdf.scss'


const Pdf = ({windowName, isOpen, setIsOpen}) => {
  return (
    <OsWindow windowName={windowName} isOpen={isOpen} setIsOpen={setIsOpen} title="Pdf">
        <div className="pdf-window">
            <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
    </OsWindow>
  )
}

export default Pdf