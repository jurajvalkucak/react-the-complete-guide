import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
    chars: []
  }

  inputFieldChangeListener = (event) => {
    const chars = event.target.value.split('');
    this.setState({chars:chars});
  }

  deleteCharComponentHandler = (index) => {
    let chars = [...this.state.chars]; //copy chars
    chars.splice(index, 1); //remove char at index
    this.setState({chars: chars});
  }

  render() {

    let charComponents = (
      this.state.chars.map((char, index) => {
        return (
          <CharComponent char={char} key={index} click={() => this.deleteCharComponentHandler(index)}/>
        );
      })
    );

    return (
      <div className="App">
        <input type="text" onChange={this.inputFieldChangeListener} value={this.state.chars.join('')}/>
        <p>{this.state.chars.length}</p>
        <ValidationComponent length={this.state.chars.length}/>
        {charComponents}
      </div>
    );
  }
}

export default App;
