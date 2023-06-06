import TransactionsContext from '../contexts/TransactionsContext'
import React, { useState, useEffect } from "react"

function TransactionsProvider({ children }) {
    const [TransactionList, setTransactionList] = useState([]);
    const [Error, setError] = useState(null)

    useEffect(() => {
        const getTransactions = async () => {
            try {
                const res = await fetch('http://localhost:8080/api/v1/prihod')
                if (!res.ok) {
                    throw new Error('could not fetch data')
                }
                const data = await res.json();
                setTransactionList(data)
            } catch (error) {
                setError(error.message);
            }
        };
        getTransactions();
        }, [])
    

    const updateTList = (newTList) => {
        setTransactionList(newTList);
    };
    return (
        <TransactionsContext.Provider value={{TransactionList, updateTList }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export default TransactionsProvider
