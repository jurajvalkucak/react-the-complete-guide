import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {

  const [userState, setUserState] = useState({
    name: 'Juraj'
  });

  const userNameHandler = (event) => {
    setUserState({
      name: event.target.value
    });
  };

  return (
    <div className="App">
      <UserInput 
        userName={userState.name} 
        changed={userNameHandler}></UserInput>
      <UserOutput userName={userState.name}></UserOutput>
      <UserOutput userName={userState.name}></UserOutput>
      <UserOutput userName={userState.name}></UserOutput>
    </div>
  );
}

export default App;
