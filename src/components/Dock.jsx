import React from "react";
import './Dock.scss';

const Dock = ({ isOpen, setIsOpen}) => {
  return (
    <footer className="dock">
      <div onClick={()=>{window.open("https://calendar.google.com/calendar/r?tab=rc&pli=1","_blank")}}
      className="icon calender"><img src="/doc-icon/calender.svg" alt="" /></div>

      <div onClick={()=>{setIsOpen(state=>({...state, github: true})) }}
       className="icon github"><img src="/doc-icon/github.svg" alt="" /></div>

      <div 
       onClick={()=>{window.open("https://www.linkedin.com/in/rudra-choudhary-3186ab378/","_blank")}}
      
      className="icon link"><img src="/doc-icon/link.svg" alt="" /></div>
      <div 
           onClick={()=>{window.open("mailto:someone@example.com","_blank")}}
      className="icon mail"><img src="/doc-icon/mail.svg" alt="" /></div>

      <div onClick={()=>{setIsOpen(state=>({...state, notes: true}))}}
      className="icon note"><img src="/doc-icon/note.svg" alt="" /></div>
      <div onClick={()=>{setIsOpen(state=>({...state, pdf: true}))}}
      className="icon pdf"><img src="/doc-icon/pdf.svg" alt="" /></div>
      <div onClick={()=>{setIsOpen(state=>({...state, spotify: true}))}}
      className="icon spotify"><img src="/doc-icon/spotify.svg" alt="" /></div>
      <div onClick={()=>{setIsOpen(state=>({...state, cli: true}))}}
      className="icon cli"><img src="/doc-icon/cli.svg" alt="" /></div>

    </footer>
  )
};

export default Dock;