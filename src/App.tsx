import React from 'react';
import './App.css';
import { Card } from './components/card/card';
import { testBlueCard, testMagentaCard, testWhiteCard } from './testCards';

function App() {
  return (
    <div className="App">
      {Card(testBlueCard)}
      {Card(testMagentaCard)}
      {Card(testWhiteCard)}
    </div>
  );
}

export default App;
