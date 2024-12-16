import react from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Cottages from './Cottages';
import Contactus from './Contactus';

function App() {
  return <Router>
    <nav>
      <Link to="/home" className='link'>Home</Link>
      <Link to="/about" className='link'>About</Link>
      <Link to="/cottages" className='link'>Cottages</Link>
      <Link to="/contactus" className='link'>Contact us</Link>
    </nav>
   
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cottages' element={<Cottages/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
    </Routes>

    <footer className='footer'>
      <div className='footer-lines'>
        <p className='footer-header'>About us</p>
        <p>Aurora Lakes</p>
        <p>00000 Savonlinna, Finland</p>
        <p>team@auroralakes.com</p>
      </div>

      <div className='footer-lines'>
        <p className='footer-header'>Useful links</p>
        <Link to="/home" className='link'>Home</Link>
        <Link to="/cottages" className='link'>Cottages</Link>
      </div>

      <div className='footer-lines'>
        <p className='footer-header'>Contact us</p>
      </div>
    </footer>

    
</Router>    
}

export default App;
