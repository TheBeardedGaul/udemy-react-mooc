import React, { useState } from 'react';
import './UserOutput.css';
import UserInput from '../Input/UserInput';

const userOutput = (props) => {
    
    const [userState, setUserState] = useState({
        user: props.user,
        untouchedStyle: true
    });

    const nameChangedHandler = (event) => {
        setUserState({
            user: {
                quote: userState.user.quote,
                name: event.target.value}
        });
    }

    const untouchedStyle = {
        backgroundColor: '#D4AF37'
    };

    const getStyle = () => {
        return (userState.untouchedStyle) ? untouchedStyle : {};
    };

    return (
        <div className="User" style={getStyle()}>
            <p>"{userState.user.quote}"</p>
            <p>{userState.user.name}</p>
            <UserInput
                oldName={props.user.name}
                name={userState.user.name}
                changed={nameChangedHandler} />
        </div>
    )
}


export default userOutput;