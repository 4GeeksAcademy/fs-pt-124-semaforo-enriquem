import React, { useState } from "react";

const Lights = () => {

    const [newColor, setNewColor] = useState("red");

    const handleClick = (color) => {
        console.log("cambia a", color)
        setNewColor(color)
    }
    return (
        <div className="k">
            <div className="tube"></div>
            <div className="traffic-light">
                <div onClick={() => handleClick("red")} className={"light bg-danger" + (newColor === "red" ? " shine" : "")}></div>
                <div onClick={() => handleClick("yellow")} className={"light bg-warning" + (newColor === "yellow" ? " shine" : "")}></div>
                <div onClick={() => handleClick("green")} className={"light bg-success" + (newColor === "green" ? " shine" : "")}></div>
            </div>
        </div>
    );
};

export default Lights;