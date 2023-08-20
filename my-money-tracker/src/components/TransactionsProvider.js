import TransactionsContext from '../contexts/TransactionsContext'
import React, { useState, useEffect, useContext, useCallback } from "react"
import { LoginContext } from './LoginProvider';
import axios from 'axios';

function TransactionsProvider({ children }) {
    const [IncomeList, setIncomeList] = useState([]);
    const [ExpenditureList, setExpenditureList] =  useState([]);
    const [Error, setError] = useState(null)
    const UserID = parseInt(sessionStorage.getItem("userID"))
    const [IncomeID, setIncomeID] = useState()

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
        const addIncome = useCallback(async (name, kategorijaid, date, value) => {
            console.log("function called")
            const Income = {
                name: name,
                kategorijaidprihod: kategorijaid,
                useridprihod: UserID,
                date: date,
                value: value,
                userid: UserID
            };
        
            try {
                const response = await axios.post('http://localhost:8080/api/v1/prihod', Income);
                console.log(response.data);
        
                if (response.status === 200) {
                    console.log('Income added Successfully');
                    const newIncomeID = response.data.id;
                    const res = await axios.post(`/addprihod/${kategorijaid}/${newIncomeID}`, { kategorijaid, id: newIncomeID });
                    
                    console.log(res.data);
                    
                    if (res.status === 200) {
                        console.log('Income added successfully to category');
                    }
                }
            } catch (err) {
                console.error('Error adding Income', err);
            }
        }, [UserID]);
            const addExpenditure = useCallback(async( name, kategorijaid, useridodhod, value) =>{
                const Expenditure = {
                    name: name,
                    kategorijaiprihod: kategorijaid,
                    useridodhod: useridodhod,
                    value: value,
                    userid: UserID
                }
                try {
                    const response = await axios.post('http://localhost:8080/api/v1/prihod', Expenditure);
                    console.log(response.data);
            
                    if (response.status === 200) {
                        console.log('Expenditure added Successfully');
                        const newExpenditureID = response.data.id;
                        const res = await axios.post(`/addprihod/${kategorijaid}/${newExpenditureID}`, { kategorijaid, id: newExpenditureID });
                        
                        console.log(res.data);
                        
                        if (res.status === 200) {
                            console.log('Expenditure added successfully to category');
                        }
                    }
                } catch (err) {
                    console.error('Error adding Expenditure', err);
                }
            }, [UserID]);



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
