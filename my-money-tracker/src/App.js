import { Link, Route, Routes, Router } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import LoginRegister from './pages/LoginRegister';
import Overview from './pages/Overview';
import AllTransactions from './pages/AllTransactions';
import Budget from './pages/Budget';
import Home from './pages/Home' 
import { LoginProvider } from './components/LoginProvider';

function App() {

  return (
    <LoginProvider>
        <Routes>
           <Route path="/pages/Home" element={<Home />} />
           <Route path="/pages/Overview" element={<Overview />} />
            <Route path="/pages/AllTransactions" element={<AllTransactions />} />
            <Route path="/pages/Budget" element={<Budget />} />
            <Route path="/" element={<LoginRegister/>} />
        </Routes>

        <footer className='footer fixed-footer'>
          <div className='footer-line'></div>
          Money Tracker
        </footer>
      </LoginProvider>
  );
}


export default App;
