import { useState } from "react";
import { Link } from "react-router-dom";

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');


    return (
    <div className="joinContainer">
        <p className="sign">Basic Chat App</p>
        <input className="username" type="text"  placeholder="Username.."
        onChange={(event) => setName(event.target.value)} />
        <Link onClick={event => !name ? event.preventDefault() : null} to={`/chat?name=${name}`}>
            <button className="submitJoin" type="submit">Enter Chat</button>
        </Link>
    </div>
    )
}

export default Join;
