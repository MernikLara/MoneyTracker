import IncomeContext from '../contexts/IncomeContext'
import ExpenditureContext from '../contexts/ExpenditureContext'
import React, { useState, useEffect } from "react"

function TransactionsProvider({ children }) {
    const [Income, setIncome] = useState();
    const [Expense, setExpense] = useState();
    const [Error, setError] = useState(null)

  
    

    const updateEList = (newEList) => {
        setTransactionEList(newEList);
    };

    const updateIList = (newIList) => {
        setTransactionIList(newIList);
    };
    return (
        <TransactionsContext.Provider value={{TransactionEList, TransactionIList, updateIList, updateEList }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export default TransactionsProvider