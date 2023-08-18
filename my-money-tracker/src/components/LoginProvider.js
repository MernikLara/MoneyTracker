import React, { createContext, useState } from "react";
import axios from 'axios';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [name, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState();
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authenticateUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/login', {email, password});
      if (response.status === 200) {
        setUserID(parseInt(response.data.id));
        setEmail(email);
        setUsername(response.data.name);
        setSurname(response.data.surname)
        setPassword(password);
        setIsLoggedIn(true)
        console.log(userID)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const registerUser = async (name, surname, password, email) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/register', { name, password, email });
      if (response.status === 200) {
        setUsername(name);
        setSurname(surname)
        setPassword(password);
        setEmail(email);
        setIsLoggedIn(true)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginContext.Provider value={{ name, password, authenticateUser, registerUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };