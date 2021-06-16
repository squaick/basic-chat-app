import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import Input from '../Input/Input';
import Messages from '../Messages/Messages';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const CHTSERV = 'localhost:3000';

    useEffect(() => {
        const { name } = queryString.parse(location.search);

        // Start the connection
        socket = io(CHTSERV)

        // Register as new user
        socket.emit('new-user', {name}, (error) => {
            if(error) {
                alert(error);
            }
        });

        setName(name);

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [CHTSERV, location.search])

    useEffect(() => {
        // When chat message comes
        socket.on('chat-message', message => {
            console.log(message);

            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('send-chat-message', message, () => setMessage(''))
            console.log("isim bu:"+message)
            setMessages([...messages, {user:name, message}]);
        }
    }



    return (
        <section className="msger">
            <header className="msger-header">
                <div className="msger-header-title">Basic Chat App</div>
            </header>
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </section>
    )
}

export default Chat
