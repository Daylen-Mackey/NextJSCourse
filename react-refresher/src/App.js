import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList title ="Title 1"  />
        <TodoList title ="Title 2" />
       
      </header>
    </div>
  );
}

export default App;
