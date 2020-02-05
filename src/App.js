import React from 'react';
import './App.css';
const mathjs = require('mathjs');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number1: 0,
      number2: 0,
      outputNum: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <input onChange={(event) => {this._updateNum('number1', event.target.value)}} type="number" value={this.state.number1 || 0}></input>
            <input onChange={(event) => {this._updateNum('number2', event.target.value)}} type="number" value={this.state.number2 || 0}></input>
          </div>
  
          <div>
            <button onClick={() => this._math("+")}>+</button>
            <button onClick={() => this._math("-")}>-</button>
            <button onClick={() => this._math("*")}>*</button>
            <button onClick={() => this._math("/")}>/</button>
            <button onClick={this._reset}>Reset</button>
          </div>
  
          <div>
            <p>Result: {this.state.outputNum}</p>
          </div>
        </header>
      </div>
    );
  }

  _updateNum = (key, newNum) => {
    this.setState({
      // key has to be in brackets or javascript will interpret key as "key" when it sets state, this allows one to set the variable [key] as the argument
      [key]: parseInt(newNum, 10) // needs to be base 10 to avoid problems with hexadecimals and binary
    })
  }

  _math = (str) => {
    this.setState({
      outputNum: mathjs.evaluate(`${this.state.number1} ${str} ${this.state.number2}`)
    });
  }

  _reset = () => {
    this.setState({
      number1: 0,
      number2: 0,
      outputNum: 0
    })
  }
}

export default App;
