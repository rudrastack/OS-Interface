import './App.scss'
import Dock from './components/Dock.jsx';
import Navbar from './components/Navbar.jsx';
import Github from './components/windows/Github.jsx';
import Notes from './components/windows/notes.jsx';
import Pdf from './components/windows/pdf.jsx';
import Spotify from './components/windows/Spotify.jsx';

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Dock />
        <Github />
        <Notes />
        <Pdf />
        <Spotify />
      </main>
    </>
  )
}

export default App
