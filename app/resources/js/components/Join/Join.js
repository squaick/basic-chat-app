import { useState } from "react";
import { Link } from "react-router-dom";

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');


    return (
    <div className="joinContainer">
        <p className="sign" align="center">Basic Chat App</p>
        <input className="un" type="text" align="center" placeholder="Username"/>
        <button class="submitJoin" align="center">Enter Chat</button>
    </div>
    )
}

export default Join;
