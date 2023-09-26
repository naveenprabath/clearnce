import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Demo from './pages/Demo';
import Dema from './pages/Dema';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
       <div>

        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Demo' element={<Demo/>}/>
        <Route path='/Dema' element={<Dema/>}/>
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
