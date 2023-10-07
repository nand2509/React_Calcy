
import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: '',
    };
  }
  handleInput = (value) => {
    this.setState({ input: this.state.input + value });
  };
  clearInput = () => {
    this.setState({ input: '', result: '' });
  };
  calculateResult = () => {
    try {
      const result = eval(this.state.input);
      this.setState({ result });
    } catch (error) {
      this.setState({ result: 'Error' });
    }
  };
  render() {
    return (
      <div className="calculator">
        <h1>!! WELCOME TO CALCULATOR PAGE !!</h1>
        <input
          type="text"
          className="input"
          value={this.state.input}
          readOnly
        />
        <div className="buttons">
          <div className="button-row">
            <button onClick={() => this.handleInput('7')}>7</button>
            <button onClick={() => this.handleInput('8')}>8</button>
            <button onClick={() => this.handleInput('9')}>9</button>
            <button onClick={() => this.handleInput('/')}>/</button>
          </div>
          <div className="button-row">
            <button onClick={() => this.handleInput('4')}>4</button>
            <button onClick={() => this.handleInput('5')}>5</button>
            <button onClick={() => this.handleInput('6')}>6</button>
            <button onClick={() => this.handleInput('*')}>*</button>
          </div>
          <div className="button-row">
            <button onClick={() => this.handleInput('1')}>1</button>
            <button onClick={() => this.handleInput('2')}>2</button>
            <button onClick={() => this.handleInput('3')}>3</button>
            <button onClick={() => this.handleInput('-')}>-</button>
          </div>
          <div className="button-row">
            <button onClick={() => this.handleInput('0')}>0</button>
            <button onClick={() => this.handleInput('.')}>.</button>
            <button onClick={this.calculateResult}>=</button>
            <button onClick={() => this.handleInput('+')}>+</button>
          </div>
          <button onClick={this.clearInput}>Clear</button>
        </div>
        <div className="result">{this.state.result}</div>
      </div>
    );
  }
}
export default Calculator;