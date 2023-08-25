import React, { createContext, useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [name, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState(null);
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  
  const authenticateUser = useCallback(async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/login', {email, password});
        if (response.status === 200 && response.data) {
            const Userid = response.data.id;
            if(isNaN(Userid)){
                console.log("error with getting session ID");
                navigate('/');
            } else {
                setUserID(Userid);
                setEmail(email);
                setUsername(response.data.name);
                setSurname(response.data.surname);
                setIsLoggedIn(true);
                sessionStorage.setItem('userID', Userid);
                sessionStorage.setItem('email', email);
                sessionStorage.setItem('name', response.data.name);
                sessionStorage.setItem('surname', response.data.surname);
                sessionStorage.setItem('isLoggedIn', 'true');
            }
        }
    } catch (error) {
        console.error(error);
    } console.log(userID);
  }, [])

  useEffect(() => {
      const storedUserID = sessionStorage.getItem('userID');
      const storedEmail = sessionStorage.getItem('email');
      const storedName = sessionStorage.getItem('name');
      const storedSurname = sessionStorage.getItem('surname');
      const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');

        if (storedIsLoggedIn === 'true') {
            setUserID(storedUserID);
            setEmail(storedEmail);
            setUsername(storedName);
            setSurname(storedSurname);
            setIsLoggedIn(true);
        }
  }, []);


  const registerUser = useCallback(async (name, surname, password, email) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/register', { name, password, email, surname });
      if (response.status === 200) {
        setUsername(name);
        setSurname(surname)
        setPassword(password);
        setEmail(email);
      }
    } catch (error) {
      console.error(error);
    }
  }, [])

  return (
    <LoginContext.Provider value={{ name, email, surname, userID,  authenticateUser, registerUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };