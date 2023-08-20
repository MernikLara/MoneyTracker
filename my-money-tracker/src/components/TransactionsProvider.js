import TransactionsContext from '../contexts/TransactionsContext'
import React, { useState, useEffect, useContext, useCallback } from "react"
import { LoginContext } from './LoginProvider';
import axios from 'axios';

function TransactionsProvider({ children }) {
    const [IncomeList, setIncomeList] = useState([]);
    const [ExpenditureList, setExpenditureList] =  useState([]);
    const [Error, setError] = useState(null)
    const UserID = sessionStorage.getItem("userID")

    useEffect(() => {
        const getIncomes = async () => {
            try {
                const res = await fetch(`http://localhost:8080/api/v1/prihod/getbyuserid/${UserID}`)
                if (!res.ok) {
                    throw new Error('could not fetch data')
                }
                const data = await res.json();
                console.log(data)
                setIncomeList(data)
            } catch (error) {
                setError(error.message);
            }
        };
        getIncomes();
        }, [])
    useEffect(() => {
        const getExpenditures = async () =>{
            	try{
                    const response = await fetch(`http://localhost:8080/api/v1/odhod/getbyuserid/${UserID}`)
                    if (!response.ok) {
                        throw new Error('could not fetch data')
                    }
                    const data = await response.json();
                    console.log(data)
                    setExpenditureList(data)

                } catch (error) {
                    setError(error.message);
                }
            };
            getExpenditures();
        }, [])
            const addIncome = useCallback(async(incomeID, name, kategorijaid, userprihod, date, value) =>{
                const Income = {
                    name: name,
                    kategorijaid: kategorijaid,
                    user: userprihod,
                    date: date,
                    value: value,
                    userid: UserID
                }
                try {
                    await axios.post(`api/v1/prihod`, Income)
                    .then(response => {
                        console.log(response.data)
                        if (response.status === 200){
                            console.log("Income added Successfully")
                        }
                    })
                    await axios.post(`/addprihod/${kategorijaid}/${incomeID}`, kategorijaid, incomeID )
                    .then(res => {
                        console.log(res.data)
                        if(res.status ===200){
                            console.log("Income added successfuly to category")
                        }
                    })
                }   
                catch (err) {
                    console.error('Error adding Income', err)
                }
            }
            , [UserID])
            const addExpenditure = useCallback(async(incomeID, name, kategorijaid, useridodhod, value) =>{
                const Expenditure = {
                    name: name,
                    kategorijaid: kategorijaid,
                    user: useridodhod,
                    value: value,
                    userid: UserID
                }
                try {
                    await axios.post(`api/v1/prihod`, Expenditure)
                    .then(response => {
                        console.log(response.data)
                        if (response.status === 200){
                            console.log("Income added Successfully")
                        }
                    })
                    await axios.post(`/addodhod/${kategorijaid}/${incomeID}`, kategorijaid, incomeID )
                    .then(res => {
                        console.log(res.data)
                        if(res.status ===200){
                            console.log("Expenditure added successfuly to category")
                        }
                    })
                }   
                catch (err) {
                    console.error('Error adding Expenditure', err)
                }
            }
            , [UserID])




    const updateIList = (newTList) => {
        setIncomeList(newTList);
    };
    const updateEList = (newEList) => {
        setExpenditureList(newEList)
    }
    return (
        <TransactionsContext.Provider value={{IncomeList, ExpenditureList, addIncome, addExpenditure, updateEList, updateIList }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export default TransactionsProvider
