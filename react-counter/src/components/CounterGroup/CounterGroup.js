import React, {Component} from 'react';
import Counter from '../Counter/Counter';
import './CounterGroup.css'

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange.bind(this);
        this.state = {
            counterCounts: this.props.defaultCounts, 
            inputValue: this.props.defaultCounts,
            sum: 0
        }
    }

    counterUpdateCallBack = changeNum => {
        this.setState({sum: this.state.sum + changeNum})
    }

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    regenerateCounters = () => {
        this.setState({counterCounts: this.state.inputValue})
    }

    renderCounters = () => {
        let counters = [];
        for (let count = 0; count < this.state.counterCounts; count++){
            counters.push(
                <Counter
                    key={count}
                    onCounterValueChange={this.counterUpdateCallBack}
                />
            );
        }
        return counters;
    }
    
    render (){
        let counters = this.renderCounters();
        return(
            <div className = "counter-group">
                <div className = "regenerate">
                <input type = "text" value={this.state.inputValue} onChange={this.handleInputChange}/>
            <br/>
            <button onClick = {this.regenerateCounters}>Regenerate Counters</button>
            <br/>
            <span>Sum: {this.state.sum}</span>
                </div>
           
            {counters}
        </div>
        );
    }
}

export default CounterGroup;