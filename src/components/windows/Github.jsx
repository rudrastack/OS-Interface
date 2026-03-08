import React from 'react'
import GithubData from "../../assets/github.json"
import OsWindow from './OsWindow'
import './Github.scss'


const GithubCard = ({data = {id:1, image:"",title:"", description:"", tags:[], repoLink:"", demoLink:""}}) => {
    return (
        <div className="card">
            <img src={data.image} alt="" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>

            <div className="tech-stack">
                {data.tags.map(tag => <p className="tech">{tag}</p>)}
            </div>

            <div className="links">
                <a href={data.repoLink} target="_blank" rel="noopener noreferrer">Repository</a>
                {data.demoLink && <a href={data.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
        </div>
    )
}


const Github = ({windowName, isOpen, setIsOpen }) => {
    return (
        <OsWindow windowName={windowName} isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="cards">
                {GithubData.map(project => {
                    return <GithubCard data={project} />
                })}
            </div>

        </OsWindow>)
}

export default Github