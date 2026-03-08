import React from 'react'
import OsWindow from './OsWindow'
import './Spotify.scss'

const Spotify = ({windowName, isOpen, setIsOpen}) => {
    return (
        <OsWindow windowName={windowName} isOpen={isOpen} setIsOpen={setIsOpen} width="25vw" height="22vh" >
            <div className="window-spotify">
                <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbVhgADFy3im?utm_source=generator&theme=0" 
                width="100%" height="352" frameBorder="0" allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </OsWindow>
    )
}

export default Spotify