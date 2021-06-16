import './Message.css';

const Message = ({message, name}) => {
    //Decide if the message should be in right or left based on who send the message
    let isSelf = false;

    if(user === (name.trim().toLowerCase())){
        isSelf = true;
    }

    return (
        <>
        
        </>
    )
}

export default Message
