import './App.css';
import Dashboard from './pages/Dashbord';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Demo from './pages/Demo';
import Dema from './pages/Dema';
import CS from './pages/CS';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
       <div>

        <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route exact path='/home' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Demo' element={<Demo/>}/>
        <Route path='/Dema' element={<Dema/>}/>
        <Route path='/CS' element={<CS/>}/>
        
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
