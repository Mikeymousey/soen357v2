import './App.css';
import { WhatMS } from './containers';
import { Navbar, Home, About, Notifications, Medications } from './components';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/medications' element={<Medications/>}/>
            <Route exact path='/notifications' element={<Notifications/>}/>
          </Routes>
          </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
