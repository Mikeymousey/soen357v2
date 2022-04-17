import './App.css';
import { Navbar, Home, About, Notifications, Medications, Footer } from './components';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <div>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/medications' element={<Medications/>}/>
              <Route exact path='/notifications' element={<Notifications/>}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
