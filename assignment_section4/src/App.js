import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
    length: null,
    chars: []
  }

  inputFieldChangeListener = (event) => {
    const length = event.target.value.length;
    const chars = event.target.value.split('');
    this.setState({length:length});
    this.setState({chars:chars});
  }

  deleteCharComponentHander = (event, index) => {
    let chars = [...this.state.chars]; //copy chars
    chars.splice(index, 1); //remove char at index
    this.setState({
      length: chars.length,
      chars: chars
    });
  }

  render() {

    let charComponents = (
      this.state.chars.map((char, index) => {
        return (
          <CharComponent char={char} key={index} click={(event) => this.deleteCharComponentHander(event, index)}/>
        );
      })
    );

    return (
      <div className="App">
        <input type="text" onChange={this.inputFieldChangeListener} value={this.state.chars.join('')}/>
        <p>{this.state.length}</p>
        <ValidationComponent length={this.state.length}/>
        {charComponents}
      </div>
    );
  }
}

export default App;
