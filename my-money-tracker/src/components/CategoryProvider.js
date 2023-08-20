import CategoryContext from "../contexts/CategoryContext";
import React, { useState, useEffect } from "react"
import { useContext } from "react";
import { LoginContext } from "./LoginProvider";
import axios from 'axios'

function CategoryProvider({ children }) {
    const [CategoryList, setCategoryList] = useState([]);
    const  UserID  = sessionStorage.getItem("userID")

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/kategorija/getbyuserid/${UserID}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setCategoryList(data)
        }) .catch((error) => {
            console.error("Error fetching transaction data:", error);
          });
      }, 
      [UserID]);
    

    const updateCList = (newCList) => {
        setCategoryList(newCList);
    };

    const addCategory = async (name, limita, tip) => {
      console.log('addCategory function called with:', name, limita, tip);
        try {
          const newCategory = {
            name,
            user_id: UserID,
            limita,
            tip,
            transactions: []
          }
          const response = await axios.post('http://localhost:8080/api/v1/kategorija/add',  newCategory );
          if (response.status === 200) {
            console.log(response);
            console.log(newCategory)
            setCategoryList([...CategoryList, newCategory]);
            updateCList(CategoryList);
          }
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <CategoryContext.Provider value={{CategoryList, addCategory, updateCList }}>
            {children}
        </CategoryContext.Provider>
    )
    /*const addTransaction = (categoryId, name, value) => {
        // API call to add transaction
        // For now, we'll mock the API call
        const updatedCategories = categories.map(category => {
          if (category.id === categoryId) {
            const newTransaction = {
              id: category.transactions.length + 1,
              name,
              value,
              userId,
              categoryId
            };
            category.transactions.push(newTransaction);
          }
          return category;
        });
        setCategories(updatedCategories);
        setShowTransactionModal(false);
      };*/
}

export default CategoryProvider
