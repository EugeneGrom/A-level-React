import React from 'react'
import './App.css';
import Population from './components/Population';
import Swapi from './components/Swapi';
import RickAndMorthy from './components/Rick_and_Morthy';



function App() {
  return (
    <div className='App'>
      <Population />
      <Swapi />
      <RickAndMorthy />
    </div>
  )
}

export default App;