import './Messages.css';

const Messages = ({messages, name}) => {
    return (
        <div>
            {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
        </div>
    )
}

export default Messages
