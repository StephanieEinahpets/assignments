import React from "react"
import {useNavigate} from 'react-router-dom'

export default function About() {

    const navigate = useNavigate() 

    return (
    <div>
        <h1>ABOUT</h1>
        <p>This is a website created to practice using React Router and Navigation from page to page within a site</p>
        <p>Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.</p>
        <button onClick={()=> navigate("/")}>Return to Home</button> 
    </div>
    )
}