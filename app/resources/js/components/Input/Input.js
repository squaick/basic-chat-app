

const Input = ({ message, setMessage, sendMessage}) => {
    return (
        <form className="form">
            <input
                className="input"
                placeholder="Type your message.."
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button onClick={(event) => sendMessage(event)}>Send</button>
        </form>
    )
}

export default Input
