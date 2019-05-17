import React from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './components/Friends'
import AddFriend from './components/AddFriend'
function App() {
  return (
    <div className="App">

       <Friends />
       <AddFriend/>
    </div>
  );
}

export default App;
