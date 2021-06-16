import './Message.css';

const Message = ({message: {user , message}, name}) => {
    //Decide if the message should be in right or left based on who send the message
    let isSelf = false;

    const trimmedName = name.trim().toLowerCase();
    if(user.toLowerCase() == trimmedName){
        isSelf = true;
    }

    return isSelf ? (
        <div className="msg right-msg">
        <div className="msg-bubble">
            <div className="msg-info">
            <div className="msg-info-name">{user}</div>
            </div>
            <div className="msg-text">{message}</div>
        </div>
        </div>
    ) : (
        <div className="msg left-msg">
        <div className="msg-bubble">
            <div className="msg-info">
            <div className="msg-info-name">{user}</div>
            </div>
            <div className="msg-text">{message}</div>
        </div>
        </div>
    )
}

export default Message
