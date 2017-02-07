import React from 'react';
import 'aframe';
import 'aframe-audioanalyser-component';
import {Entity, Scene} from 'aframe-react';

const App = () => (
  <div>
    <Scene>
      <Entity geometry={{primitive: 'box'}} material='color: blue'/>
    </Scene>
    <h1>looka me im a react app</h1>
    <ul role="nav">
      <li>a))))</li>
      <li>b)))))</li>
    </ul>
  </div>
)
export default App
