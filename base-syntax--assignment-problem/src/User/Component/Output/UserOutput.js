import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>"{props.quote}"</p>
            <p>{props.name}</p>
        </div>
    )
}

export default userOutput;