import sbf from './GettyImages_1245594206b.7.webp'; 
import './App.css';

import React from 'react';

console.log(sbf); // /logo.84287d09.png

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sbf} className="sbf" alt="Mario Duncanson/AFP via Getty Images" />
        <p>
          Mario Duncanson/AFP via Getty Images
        </p>
      </header>
    </div>
  );
}

export default App;
