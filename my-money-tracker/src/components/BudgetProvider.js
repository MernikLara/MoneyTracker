import React, { useState, useEffect } from "react"

function BudgetProvider({ children }) {
    const [balance, setBalance] = useState(0); 
    const [Maxbuget, setMaxbudget] = useState(0);
    const [progressBar, setProgressbar] = useState(100);
    sessionStorage.setItem('budget', balance);
    UserID = sessionStorage.getItem('userID');
    const storedUserID = parseInt(UserID);
    const UserID = parseInt(sessionStorage.getItem('userID')); 
    const Income = {
        name: name,
        kategorijaidprihod: kategorijaid,
        useridprihod: UserID,
        date: date,
        value: value,
        userid: UserID
    };
    const Expenditure = {
        name: name,
        kategorijaiprihod: kategorijaid,
        useridodhod: useridodhod,
        value: value,
        userid: UserID
    }
    
    //TODO: Edit to make getBalance function useEffect so it's automatic
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/racun/getbyuserid/${storedUserID}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (Array.isArray(data)) {
                setBalance(data)
            } else {
                console.warn('Received non-array data:', data);
            }
        })
        .catch((error) => {
            console.error("Error fetching transaction data:", error);
        });
    }, [storedUserID]);


    

    const UpdateBudget = (Transaction) =>{


        if(Transaction.type === Income){
            const add = Income.value
            balance = balance + add
            //API PUT call
            sessionStorage.setItem('budget', balance)
        }
        if(Transaction.type === Expenditure){
            const subtract = Expenditure.value
            balance = balance - subtract
            //API PUT call
            sessionStorage.setItem('budget', balance)
        }
    }
    const updateMaxbudget = (limit) => {
        Maxbuget = Maxbuget + limit
        //API PUT call

    }
    return (
        <BudgetContext.Provider value={{updateMaxbudget, UpdateBudget }}>
            {children}
        </BudgetContext.Provider>
    )
}

export default BudgetProvider