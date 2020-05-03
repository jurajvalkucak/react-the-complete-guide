import React from 'react';

const userOutput = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };
    
    return (
        <div style={style}>
            <p>UserName: {props.userName}</p>
            <p>User Output2</p>
        </div>
    )
};

export default userOutput;