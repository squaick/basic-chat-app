import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const CHTSERV = 'localhost:3000';

    useEffect(() => {
        const { name } = queryString.parse(location.search);

        socket = io(CHTSERV)

        socket.emit('new-user', {name}, (error) => {
            if(error) {
                alert(error);
            }
        });

        setName(name);

        console.log(socket);

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [CHTSERV, location.search])

    return (
        <div>
           This is chat component. 
        </div>
    )
}

export default Chat
