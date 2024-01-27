import React from "react";
import { useState } from "react";

const Spoiler = ({ header = "+", open, children }) => {
    const [state, setState] = useState(open)

    const changeStateSpoiler = () => setState(!state);

    return (
        <>
            <header onClick={changeStateSpoiler}>
                {header}
            </header>
            {state && <div className="spoiler">
                {children}
            </div>}
        </>
    )
}

export default Spoiler;