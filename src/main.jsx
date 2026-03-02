import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Dock from './components/Dock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Dock />
  </StrictMode>,
)
