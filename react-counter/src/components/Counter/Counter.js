import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count : 0};
    }

    addNumber = () => {
        this.setState({count: this.state.count + 1})
        this.props.onCounterValueChange(1);
    };

    subtractNumber = () => {
        this.setState({count: this.state.count - 1})
        this.props.onCounterValueChange(-1);
    };

    render() {
        return(
            <div className = "counter">
                <button onClick = {this.addNumber}>+</button>
                <span>{this.state.count}</span>
                <button onClick = {this.subtractNumber}>-</button>
            </div>
        );
    }
}

export default Counter;