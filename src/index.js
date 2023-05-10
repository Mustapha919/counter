import React, { Component } from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";


import Count from "./Count";
import Button from "./Button";


     // WHAT IS STATE
// A state is an inbuilt object, means it is a reserved key in the React JS
// The state holds the property value with the key that belongs to the components
// The state is mutable and can be changed by the setState method
// If the state is been changed it lead react to re-render DOM
// The state is managed from inside a Component.




// App Component
class App extends Component {
    state = {
        count : 0
    }

    increamentCount = value => {
        this.setState( prevState => {
            return {
                count: prevState.count + value
            }
        })
    };

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <br />

                <Count counter={this.state.count} />

                <br/>
                <Button increamentCount={this.increamentCount} value={1} />
                <Button increamentCount={this.increamentCount} value={2} />
                <Button increamentCount={this.increamentCount} value={5} />
                <Button increamentCount={this.increamentCount} value={10} />
                <Button increamentCount={this.increamentCount} value={20} />
                <Button increamentCount={this.increamentCount} value={50} />
                <Button increamentCount={this.increamentCount} value={1000} />

            </div>
        );
    };
};

ReactDOM.render( < App />, document.querySelector("#root")) ;