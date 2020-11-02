import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar'
class App extends Component {
    state = {
        counter: [
          { id: 1, value: 0 },
          { id: 2, value: 0 },
          { id: 3, value: 4 },
          { id: 4, value: 0 },
        ],
      };
    
      handleDelete = (counterID) => {
        let newCounter = this.state.counter.filter((c) => c.id !== counterID);
        this.setState({ counter: newCounter });
      };
      handleReset = () => {
        let newCounter = this.state.counter.map((c) => {
          c.value = 0;
          return c;
        });
        this.setState({ counter: newCounter });
      };
      handleIncrement=(counter)=>{
            let counters=[...this.state.counter]
            let index=counters.indexOf(counter);
            
            counters[index].value++;
            this.setState({counter:counters})
      };
      handleDecrement=(counter)=>{
        let counters=[...this.state.counter]
        let index=counters.indexOf(counter);
        
        counters[index].value--;
        this.setState({counter:counters})
  };
    
    render() { 
        return ( 
            <React.Fragment>
                <Navbar length={this.state.counter.filter(c=>c.value>0).length}/>
                <main className="Container">
                    <Counters counter={this.state.counter}onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onReset={this.handleReset}/>
                </main>
            </React.Fragment>
         );
    }
}
 
export default App;