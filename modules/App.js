import React from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

const App = () => (
  <div>
    <Scene>
      <Entity geometry={{primitive: 'box'}} material='color: blue' position={[0, 0, -5]}/>
    </Scene>
  </div>
)
export default App
