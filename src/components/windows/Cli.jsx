import React from 'react'
import OsWindow from './OsWindow'
import Terminal from 'react-console-emulator'
import './Cli.scss'

const Cli = () => {
  return (
    <OsWindow>
<div className="Cli-window">
    <Terminal
    commands={{
          echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  },
  date: {
    description: 'Show current date and time.',
    usage: 'date',
    fn: () => new Date().toString()
  },
  whoami: {
    description: 'Show the current user.',
    usage: 'whoami',
    fn: () => 'Rudra Choudhary'
  },
  ls: {
    description: 'List files in the current (dummy) directory.',
    usage: 'ls',
    fn: () => 'README.md  notes.txt  app.log'
  },
  pwd: {
    description: 'Print working directory (dummy).',
    usage: 'pwd',
    fn: () => '/home/guest'
  },
  calc: {
    description: 'Simple calculator that echoes the expression for now.',
    usage: 'calc <expression>',
    fn: (...args) => args.join(' ')
  },
  portfolio: {
    description: 'Show a brief portfolio summary.',
    usage: 'portfolio',
    fn: () => 'Name: Rudra Choudhary\nRole: Frontend Developer\nHighlights: React projects, interactive UI, small utilities'
  },
  projects: {
    description: 'List notable projects (dummy).',
    usage: 'projects',
    fn: () => '1. OS-Interface (this demo)\n2. Productivity Dashboard\n3. Notes App'
  },
  contact: {
    description: 'Show contact info (dummy).',
    usage: 'contact',
    fn: () => 'Email: you@example.com\nTwitter: @yourhandle'
  },
  resume: {
    description: 'Show resume link (dummy).',
    usage: 'resume',
    fn: () => 'Resume: https://example.com/resume.pdf'
  },
  github: {
    description: 'Show GitHub link (dummy).',
    usage: 'github',
    fn: () => 'GitHub: https://github.com/rudrastack'
  }
    }}
        welcomeMessage={'Welcome! Type `help` to list available commands.'}
        promptLabel={'rudrachoudhary:~$'}
        promptLabelStyle={{ color: 'green' }}
    
    />

</div> 
    </OsWindow>
  )
}

export default Cli