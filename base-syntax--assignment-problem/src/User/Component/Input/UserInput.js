import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed}
                value={props.name} />
            <h6>
                Initially by {props.oldName}
            </h6>
        </div>  
    )
}

export default userInput;