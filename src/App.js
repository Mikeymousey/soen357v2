import './App.css';
import { WhatMS } from './containers';
import { Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
      </div>
        <WhatMS />
    </div>
  );
}

export default App;
