import React, { useState } from "react";

const Lights = () => {

    const [newColor, setNewColor] = useState("red");

    return (
        <div className="k">
            <div className="tube"></div>
            <div className="traffic-light">
                <div onClick={() => setNewColor("red")} className={"light bg-danger" + (newColor === "red" ? " shine" : "")}></div>
                <div onClick={() => setNewColor("yellow")} className={"light bg-warning" + (newColor === "yellow" ? " shine" : "")}></div>
                <div onClick={() => setNewColor("green")} className={"light bg-success" + (newColor === "green" ? " shine" : "")}></div>
            </div>
        </div>
    );
};

export default Lights;