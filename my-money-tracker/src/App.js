import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import { Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import Overview from './pages/Overview';
import AllTransactions from './pages/AllTransactions';
import Budget from './pages/Budget';
import logo from './images/MoneyTracker_logo.png' // relative path to image 

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <>
      <div className='fixed-header'>
        <img className='logo-navbar' src={logo} />
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to='/pages/Home'>
              <button className="Navbtn">Home</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/pages/Overview'><button className="Navbtn">Overview</button></Link>
          </li>
          <li className="nav-item">
            <Link to='/pages/Budget'><button className="Navbtn">Budgeting</button></Link>
          </li>
          <li className="nav-item">
            <Link to='/pages/AllTransactions'><button className="Navbtn">Transactions</button></Link>
          </li>
          <li>
            <button className="Navbtn" onClick={() => setShowLoginModal(true)}>Login</button>
            <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
              <Form>
                <Modal.Header closeButton>
                  <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="Username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Paswword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password" required
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </div>
                </Modal.Body>
              </Form>
            </Modal>
          </li>
        </ul>
      </div>
      <Routes>

        <Route path="/pages/Home" element={<Home />} />
        <Route path="/pages/Overview" element={<Overview />} />
        <Route path="/pages/AllTransactions" element={<AllTransactions />} />
        <Route path="/pages/Budget" element={<Budget />} />
      </Routes>

      <footer className='footer fixed-footer'>
        <div className='footer-line'></div>
        Money Tracker
      </footer>
    </>
  );
}


export default App;
