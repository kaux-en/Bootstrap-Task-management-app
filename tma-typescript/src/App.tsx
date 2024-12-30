import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import TaskManagement from './components/TaskDetails.tsx';
import Navigation from './components/Navbar.tsx';
import Dashboard from './components/Dashboard.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/Login.tsx';



const Logout:React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth0();

  const handleLogout = () => {
    navigate('/Login')
  }

  return <button onClick={() => handleLogout()}>Log Out</button>;
}


const App: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="App">

    <Router>
    <Navigation />
      <div>
      {isAuthenticated ? ( <Login /> ) 
      : ( <Logout /> )
      }
      </div>
      
      <Routes>
        <Route path='/Login' element={isAuthenticated ? <Dashboard /> : <Login />}/>
        <Route path='/TaskDetails' element={<TaskManagement />}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
