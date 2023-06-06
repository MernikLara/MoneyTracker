import CategoryContext from "../contexts/CategoryContext";
import React, { useState, useEffect } from "react"

function CategoryProvider({ children }) {
    const [CategoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/kategorija')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setTransactionList(data)
        }) .catch((error) => {
            console.error("Error fetching transaction data:", error);
          });
      }, 
      []);
    

    const updateCList = (newCList) => {
        setCategoryList(newCList);
    };
    return (
        <CategoryContext.Provider value={{CategoryList, updateCList }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider
