import TransactionsContext from '../contexts/TransactionsContext'
import React, { useState, useEffect, useContext, useCallback } from "react"
import { LoginContext } from './LoginProvider';
import axios from 'axios';
import moment from 'moment';

function TransactionsProvider({ children }) {
    const [IncomeList, setIncomeList] = useState([]);
    const [ExpenditureList, setExpenditureList] =  useState([]);
    const [Error, setError] = useState(null)
    const UserID = parseInt(sessionStorage.getItem("userID"))
    const [IncomeID, setIncomeID] = useState()
    const formattedDate = moment().format('YYYY-MM-DD');

    useEffect(() => {
        const getIncomes = async () => {
            try {
                const res = await fetch(`http://localhost:8080/api/v1/prihod/userid/${UserID}`)
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
        }, [UserID])
    useEffect(() => {
        const getExpenditures = async () =>{
            	try{
                    const response = await fetch(`http://localhost:8080/api/v1/odhod/userid/${UserID}`)
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
        }, [UserID])
        const addIncome = useCallback(async (name, kategorijaid, value) => {
            console.log("function called")
            const Income = {
                date: formattedDate,
                kategorijaidprihod: kategorijaid,
                name: name,
                useridprihod: UserID,
                value: value,
            };
            console.log(kategorijaid, Income.kategorijaidprihod)
        
            try {
                const response = await axios.post('http://localhost:8080/api/v1/prihod', Income ,{  headers: {
                    'Content-Type': 'application/json'
                }});
                console.log(response.data);
        
                if (response.status === 200) {
                    console.log('Income added Successfully');
                    const newIncomeID = response.data;
                    console.log(response.data)
                    const res = await axios.post(`http://localhost:8080/api/v1/kategorija/addprihod/${Income.kategorijaidprihod}/${newIncomeID}`, { kategorijaid: Income.kategorijaidprihod, id: newIncomeID });
                    
                    console.log(res.data);
                    
                    if (res.status === 200) {
                        console.log('Income added successfully to category');
                    }
                }
            } catch (err) {
                console.error('Error adding Income', err);
            }
        }, [UserID]);
            const addExpenditure = useCallback(async( name, kategorijaid, value) =>{
                const Expenditure = {
                    name: name,
                    kategorijaidodhod: kategorijaid,
                    date: formattedDate,
                    useridodhod: UserID,
                    value: value,
                }
                console.log(Expenditure.kategorijaidodhod)
                try {
                    const response = await axios.post('http://localhost:8080/api/v1/odhod', Expenditure);
                    console.log(response.data);
            
                    if (response.status === 200) {
                        console.log('Expenditure added Successfully');
                        const newExpenditureID = response.data.id
                        const res = await axios.post(`/addprihod/${Expenditure.kategorijaidodhod}/${Expenditure.id}`, { kategorijaid: Expenditure.kategorijaidodhod, id: newExpenditureID });
                        
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
