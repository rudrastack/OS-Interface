import React, {useEffect, useState} from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import OsWindow from './OsWindow'
import './Notes.scss'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'


const Notes = () => {
 
    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        fetch("./note.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, [])

  return (
    <OsWindow title="Notes">
        <div className="notes-window">
            {markdown ? <SyntaxHighlighter language="typescript" style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
        </div>
        </OsWindow>
  )
}

export default Notes