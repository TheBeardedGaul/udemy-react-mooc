import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="User">
            <p>"{props.quote}"</p>
            <p>{props.name}</p>
        </div>
    )
}


export default userOutput;