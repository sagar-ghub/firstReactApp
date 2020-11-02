import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {

  render() {
    const {onDelete,onReset,onIncrement,onDecrement}=this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          RESET
        </button>
        {this.props.counter.map((counter) => (
          <Counter
            key={this.props.counter.id}
            onDelete={() => onDelete(counter.id)}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          
          />
        ))}
      </div>
    );
  }
}

export default Counters;
