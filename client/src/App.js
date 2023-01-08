import './App.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import {Person} from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from './pages/home/Home';
import TopBar from './topbar/TopBar';
import LeftBar from './component/leftbar/LeftBar';
import RightBar from './component/rightbar/RightBar';
import Profile from './pages/profile/Profile';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {

  const {user}=useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path='/' element={user ? <Home/> : <Register/>}/>
          
        
        <Route path='/login' element={user ? <Navigate replace to="/"/> : <Login/>}/>
          
        
        <Route path='/register' element={user ? <Navigate replace to="/"/> : <Register/>}/>
          
        
        <Route path='/profile/' element={<Profile/>}/>
          
        
      </Routes>
    </Router>
  );
}

export default App;
