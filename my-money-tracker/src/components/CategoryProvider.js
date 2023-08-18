import CategoryContext from "../contexts/CategoryContext";
import React, { useState, useEffect } from "react"
import { useContext } from "react";
import { LoginContext } from "./LoginProvider";

function CategoryProvider({ children }) {
    const [CategoryList, setCategoryList] = useState([]);
    const  UserID  = useContext(LoginContext)

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/kategorija/${UserID}')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setCategoryList(data)
        }) .catch((error) => {
            console.error("Error fetching transaction data:", error);
          });
      }, 
      []);
    

    const updateCList = (newCList) => {
        setCategoryList(newCList);
    };

    const addCategory = (name, limit, type) => {
        // API call to add category
        // For now, we'll mock the API call
        const newCategory = {
          id: CategoryList.length + 1,
          name,
          userID: UserID,
          limit,
          type,
          transactions: []
        };
        setCategoryList([...CategoryList, newCategory]);
      };
    return (
        <CategoryContext.Provider value={{CategoryList, updateCList }}>
            {children}
        </CategoryContext.Provider>
    )
    
    const addTransaction = (categoryId, name, value) => {
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
      };
}

export default CategoryProvider
