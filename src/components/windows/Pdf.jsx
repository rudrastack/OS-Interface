import React from 'react'
import OsWindow from './OsWindow'
import './Pdf.scss'


const Pdf = () => {
  return (
    <OsWindow>
        <div className="pdf-window">
            <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
    </OsWindow>
  )
}

export default Pdf