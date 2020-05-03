import React from 'react';

const validationComponent = (props) => {
    let output = null;

    if (props.length >= 5)
        output = 'Text long enough';
    else
        output = 'Text too short';

    return (
    <div>{output}</div>
    );
};

export default validationComponent;