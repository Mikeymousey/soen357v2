import './App.css';
import { WhatGPT3 } from './containers';
import { Navbar} from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
      </div>
      <WhatGPT3 />
    </div>
  );
}

export default App;
