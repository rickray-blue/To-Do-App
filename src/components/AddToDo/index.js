import React from 'react';
import "./style.css";

const AddToDo = props => {
    return (
        <div>
            <input value={props.task} type="text" name="" onChange={props.handleChange} className="toDoInput" placeholder="Enter here..." />

        </div>
    );
};

export default AddToDo;