import {useState} from 'react'
import './App.scss'
import Dock from './components/Dock.jsx';
import Navbar from './components/Navbar.jsx';
import Github from './components/windows/Github.jsx';
import Notes from './components/windows/Notes.jsx';
import Pdf from './components/windows/Pdf.jsx';
import Spotify from './components/windows/Spotify.jsx';
import Cli from './components/windows/Cli.jsx';

function App() {
const [isOpen, setIsOpen] = useState({
  github: false,
  notes: false,
  pdf: false,
  spotify: false,
  cli: false
});

  return (
    <>
      <main>
        <Navbar />
        <Dock isOpen ={isOpen} setIsOpen={setIsOpen} />
        {isOpen.github && <Github windowName="github" isOpen ={isOpen} setIsOpen={setIsOpen} />}
        {isOpen.notes && <Notes windowName="notes" isOpen ={isOpen} setIsOpen={setIsOpen} />}
        {isOpen.pdf && <Pdf windowName="pdf" isOpen ={isOpen} setIsOpen={setIsOpen} />}
        {isOpen.spotify && <Spotify windowName="spotify" isOpen ={isOpen} setIsOpen={setIsOpen} />}
        {isOpen.cli && <Cli windowName="cli" isOpen ={isOpen} setIsOpen={setIsOpen} />}
      </main>
    </>
  )
}

export default App
