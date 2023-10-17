import React, { useState } from 'react';
import './App.css';
import Animation1 from './animation1/src/BarChart';
import Animation2 from './animation2/src/Spheres';
import Animation3 from './animation3/src/Tree';

function App() {
  const [selectedAnimation, setSelectedAnimation] = useState(null);

  const handleAnimationButtonClick = (animationName) => {
    setSelectedAnimation(animationName);
  };

  return (
    <div className="App">
      <div id="animationContainer">
        {selectedAnimation === 'animation1' && <Animation1 />}
        {selectedAnimation === 'animation2' && <Animation2 />}
        {selectedAnimation === 'animation3' && <Animation3 />}
      </div>
      <div id="buttonContainer">
        <button onClick={() => handleAnimationButtonClick('animation1')}>Animation 1</button>
        <button onClick={() => handleAnimationButtonClick('animation2')}>Animation 2</button>
        <button onClick={() => handleAnimationButtonClick('animation3')}>Animation 3</button>
      </div>
    </div>
  );
}

export default App;
