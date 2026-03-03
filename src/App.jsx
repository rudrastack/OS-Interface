import './App.scss'
import Dock from './components/Dock.jsx';
import Navbar from './components/Navbar.jsx';
import Github from './components/windows/Github.jsx';


function App() {
  return (
    <>
     <main>
      <Navbar />
          <Dock />
          <Github />
         
     </main>
    </>
  )
}

export default App
