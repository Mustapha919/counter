import React, {Component} from "react";

//Button Component
class Button extends Component {
    increamentValue = () => {
        this.props.increamentCount(this.props.value)
    }

    render(props) {
        return (
            <button className="ui button green" onClick={this.increamentValue}> +{this.props.value}</button>
        )
    }
}

export default Button;