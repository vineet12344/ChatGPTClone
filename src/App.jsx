import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home/Home';

const App = () => {
  return (
   <>
    <Routes>
      <Route Component={Home} path="/" exact />
    </Routes>
   </>
  );
}

export default App  