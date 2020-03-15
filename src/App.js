import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Block1 from './Components/block1.js';
import Two from './Components/block2.js';
import Three from  './Components/block3.js';
import Four from './Components/block4.js';
import Five from './Components/block5.js';
import Six from './Components/block6.js';
import Seven from'./Components/block7.js';
import './App.css';

// All the above components are gathered here to be displayed/rendered

function App() {
  return (
    // in my return i call all the components to be displayed i the oder they appear below
    <div className="App">
      <header className="App-header">
        <Block1/>
      </header>
      <Two/><br></br><br></br><br></br>
      <Three/>
      <Four/><br></br><br></br>
      <Five/><br></br>
      <Seven/><br></br>
      <Six/>

    </div>
  );
}

export default App;
