import './Step.css'
import React from 'react'


const Step = props =>
    <div className={"title-step "+props.className}>
        <span className="number-step">
            {props.number}
        </span>
        <h3>{props.title}</h3>
    </div>


export default Step;