import React from "react";
import './index.scss';

export const Toggle = () => {
    const [isToggled, setToggle] = React.useState(false);

    const handleToggle = () => {
        console.log("toggle");
        setToggle(!isToggled);
    };

    return (
        <div className="toggle">
            <input type='checkbox' id="switch"/>
            <label htmlFor="switch" onClick={handleToggle}/>
        </div>
    );
}
