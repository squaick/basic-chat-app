import './Input.css';

const Input = ({ message, setMessage, sendMessage}) => {
    return (
        <form className="msger-inputarea">
            <input
                className="msger-input"
                placeholder="Type your message.."
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="msger-send-btn" onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input
