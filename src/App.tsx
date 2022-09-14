import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-selector"
  })
  return (
    <div className="App">
      <h1>hello<br></br>world!!!</h1>
    </div>
  );
}

export default App;
