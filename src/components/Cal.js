import React, { Component } from "react";
import './mycss.css';

class Cal extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        input1: "",
      };
    }
  }

  click = (value) => {
    this.setState({
      input1: this.state.input1 + value,
    });
  };

  ans=()=>{
    this.setState({
        input1:eval(this.state.input1).toString(),
    })
  }
  clear1=()=>{
    this.setState({
        input1:'',
    })
  }


  render() {
    var cl={
        width:120,
    }

    var d={
        width:260,
    }
    return (
      <div class="abc">
        <div>
            <input type="text"value={this.state.input1}></input>
        </div>
        <div>
          <button onClick={() => this.click(1)}>1</button>
          <button onClick={() => this.click(2)}>2</button>
          <button onClick={() => this.click(3)}>3</button>
          <button onClick={() => this.click('+')}>+</button>
        </div>
        <div>
          <button onClick={() => this.click(4)}>4</button>
          <button onClick={() => this.click(5)}>5</button>
          <button onClick={() => this.click(6)}>6</button>
          <button onClick={() => this.click('-')}>-</button>
        </div>
        <div>
          <button onClick={() => this.click(7)}>7</button>
          <button onClick={() => this.click(8)}>8</button>
          <button onClick={() => this.click(9)}>9</button>
          <button onClick={() => this.click('*')}>*</button>
        </div>
        <div>
        <button onClick={() => this.click('/')}>/</button>
        <button onClick={() => this.click(0)}>0</button>
         <button onClick={this.clear1} style={cl}>Clear</button>
        </div>
        <div>
          <button onClick={this.ans} style={d}>=</button>
        </div>
      </div>
    );
  }
}

export default Cal;
