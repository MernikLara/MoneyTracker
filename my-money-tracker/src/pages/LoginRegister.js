
import React, { useContext, useState } from 'react';
import { LoginContext, LoginProvider } from '../components/LoginProvider';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../Styles/Login.css'

function LoginRegister() {
    const { authenticateUser, registerUser, isLoggedIn } = useContext(LoginContext)
    const [Loginemail, setLoginEmail] = useState("");
    const [Loginpassword, setLoginPassword] = useState("");
    const [Registeremail, setRegisterEmail] = useState("");
    const [Registerpassword, setRegisterPassword] = useState("");
    const [RegisterVerifypassword, setRegisterVerifyPassword] = useState("");
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [name, setRegisterName] = useState("");
    const [surname, setRegisterSurname] = useState("");
    const onHide = () => setShowRegisterModal(false);
    const show = showRegisterModal;
    const navigate = useNavigate();



  const handleLogin = (e) => {
        e.preventDefault();
        authenticateUser(Loginemail, Loginpassword);
        if(isLoggedIn === true){
            navigate('/pages/Home')
        }
    };

  const handleRegister = (e) => {
        e.preventDefault();
        if (Registerpassword === RegisterVerifypassword) {
            registerUser(name, surname, Registerpassword, Registeremail);
            onHide();
        } 
        else {
        window.alert("Passwords don't match!")
        }
    }



  return (
    <div className="login">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="Email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={Loginemail} onChange={(e) => setLoginEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="Password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={Loginpassword} onChange={(e) => setLoginPassword(e.target.value)} required />
        </Form.Group>
        <button className='btn1' type="submit">Login</button>
      </Form>
      <button className='btn1' onClick={() => setShowRegisterModal(true)}>Register</button>
      <Modal show={show} onHide={onHide}>
      <Form onSubmit={handleRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="Name">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setRegisterName(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="Surname">
            <Form.Label>Surname:</Form.Label>
            <Form.Control type="text" value={surname} onChange={(e) => setRegisterSurname(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="e-mail">
            <Form.Label>e-mail:</Form.Label>
            <Form.Control type="email" value={Registeremail} onChange={(e) => setRegisterEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="Pass">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={Registerpassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="VPass">
            <Form.Label>Verify Password:</Form.Label>
            <Form.Control type="password" value={RegisterVerifypassword} onChange={(e) => setRegisterVerifyPassword(e.target.value)} required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn1' onClick={onHide}>Close</button>
          <button className='btn1' type="submit">Register</button>
        </Modal.Footer>
      </Form>
    </Modal>
    </div>
  );
}

export default LoginRegister;
