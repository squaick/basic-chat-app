import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Echo from 'laravel-echo';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const CHTSERV = 'localhost:3000';

    useEffect(() => {
        let echo = new Echo({
            broadcaster: 'socket.io',
            client: io,
            host: CHTSERV
        });

        echo.listen('new-user', 'new-user', (a) => {
            console.log(a);
        })

    })

    /*useEffect(() => {
        const { name } = queryString.parse(location.search);

        socket = io()

        setName(name);

        console.log(socket);
    }, [CHTSERV, location.search])*/

    return (
        <div>
           This is chat component. 
        </div>
    )
}

export default Chat
