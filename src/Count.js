import React from "react";


//Count Component
const Count = props => {
    let styles;

    if (props.counter === 0) {
        styles = {
            color: "red"
        }
    }
    else if (props.counter >= 1 && props.counter <= 10) {
        styles = {
            color: "orange"
        }
    }
    else if (props.counter >= 11 && props.counter <= 50) {
        styles = {
            color: "green"
        }
    }
    else if (props.counter >= 51 && props.counter <= 200) {
        styles = {
            color: "purple"
        }
    }
    else if (props.counter >= 201 && props.counter <= 300) {
        styles = {
            color: "blue"
        }
    }
    else {
        styles = {
            color: "pink"
        }
    }
    return (
        <div>
            <h1 style={styles}>{props.counter}</h1>
        </div>
    );
};



export default Count;