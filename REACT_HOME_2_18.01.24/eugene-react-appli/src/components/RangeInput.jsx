import React from "react";
import { useState } from "react";

const RangeInput = ({ min = 0, max = 15, ...props }) => {
    const [text, setText] = useState('');

    return (
        <>
            <h2>Range Input</h2>
            <input
                {...props}
                value={text}
                onChange={str => setText(str.target.value)}
                style={{ color: text.length >= min && text.length <= max ? 'inherit' : 'red' }} />
        </>
    )
}

export default RangeInput;