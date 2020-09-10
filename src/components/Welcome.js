import React from 'react'
import ReymonAzul from './ReymonAzul.png'

export default function Welcome(){
    return(
        <div className="welcome">
            <h2>Welcome to my App!!</h2>
            <p>This is a web created by Reymon</p>
            <p>Its implemented with the help of Create-React-App, Bootstrap and the api/database from TheMovieDB</p>
            <p>State Management is implemented with Redux</p>
            <p>Enjoy the App!</p>
            <img className="reymon" src={ReymonAzul} alt="reymonImage"></img>
        </div>
    )
}