import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Chat from './components/chat/Chat';

const App = () => {
  return (
   <>
    <Routes>
      <Route Component={Home} path="/" exact />
      <Route Component={Chat} path="/Chat" exact />
    </Routes>
   </>
  );
}

export default App  