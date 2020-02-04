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
            <input onChange={this._updateNum1} type="number" value={this.state.number1 || ""}></input>
            <input onChange={this._updateNum2} type="number" value={this.state.number2 || ""}></input>
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

  _updateNum1 = (event) => {
    this.setState({
      number1: parseInt(event.target.value)
    })
  }

  _updateNum2 = (event) => {
    this.setState({
      number2: parseInt(event.target.value)
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
