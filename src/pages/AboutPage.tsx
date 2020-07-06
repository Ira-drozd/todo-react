import React from "react";
import {useHistory} from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useHistory()
return(
    <>
        <h1>About page</h1>
        <p>This text about me...</p>
        <button className='btn' onClick={()=>history.push('/')}>Todos list</button>
    </>
)
}