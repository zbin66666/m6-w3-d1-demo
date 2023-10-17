import React from 'react';
import  { BrowserRouter as Router, Link} from 'react-router-dom';



import './App.css';

function App() {

  return (
    <Router>
      <div className='app'>
        <nav>
          <ul>
            <li>
              <Link to="/animation1/src/BarChart">Animation 1</Link>
            </li>
            <li>
              <Link to="/animation2/src/BarChart">Animation 2</Link>
            </li>
            <li>
              <Link to="/animation3/src/Tree">Animation 3</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
