import CategoryContext from "../contexts/CategoryContext";
import React, { useState, useEffect } from "react"
import { useContext } from "react";
import { LoginContext } from "./LoginProvider";
import axios from 'axios'

function CategoryProvider({ children }) {
    const [CategoryList, setCategoryList] = useState([]);
    const storedUserID = parseInt(sessionStorage.getItem('userID'));
    console.log(storedUserID)
    const storedEmail = sessionStorage.getItem('email');
    const storedName = sessionStorage.getItem('name');
    const storedSurname = sessionStorage.getItem('surname');
    const storedIsLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'));
    const Category = {
      name: String,
      userid: storedUserID,
      limita: Number,
      tip: Boolean,
      transactions: []
    }
    const CategoryType = {
      income: 'income',
      expenditure: 'expenditure'
  }
  

  
    useEffect(() => {
      fetch(`http://localhost:8080/api/v1/kategorija/getbyuserid/${storedUserID}`)
      .then((res) => {
          return res.json();
      })
      .then(async (data) => {
          if (Array.isArray(data)) {
              for (let category of data) {
                  const rez = await axios.get(`http://localhost:8080/api/v1/kategorija/vsiprihodi/${category.id}`);
                  if (rez.status === 200) {
                      category.transactions = rez.data; 
                      console.log(category.id)
                  }
              }
              updateCList(data);
          } else {
              console.warn('Received non-array data:', data);
          }
      })
      .catch((error) => {
          console.error("Error fetching transaction data:", error);
      });
    }, [storedUserID]);
    

    const updateCList = (newCList) => {
        setCategoryList(newCList);
    };

    const addCategory = async (name, limita, tip) => {
      console.log('addCategory function called with:', name, limita, tip, storedUserID);
        try {
          const newCategory = {
            name: name,
            userid: storedUserID,
            limita: limita,
            tip: tip,
            transactions: []
          }
          const response = await axios.post('http://localhost:8080/api/v1/kategorija/add',  newCategory );
          if (response.status === 200) {

            console.log(response);
            console.log(newCategory)
            console.log(CategoryList)
            setCategoryList(CategoryList => [...CategoryList, newCategory]);;
          }
        } catch (error) {
          console.error("error adding Category", error);
        }
      };

    

    return (
        <CategoryContext.Provider value={{CategoryList, addCategory, updateCList }}>
            {children}
        </CategoryContext.Provider>
    )

}

export default CategoryProvider
