import Message from '../Message/Message';

import './Messages.css';

const Messages = ({messages, name}) => {
    return (
        <main className="msger-chat">
            {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
        </main>
    )
}

export default Messages
