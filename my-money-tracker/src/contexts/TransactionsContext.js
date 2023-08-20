import React, { createContext, useContext, useState } from "react";

const TransactionsContext = createContext({
  IncomeList: [],
  ExpenditureList: [],
  updateEList: () => {},
  updateIList: () => {},
  addIncome:() => {}, 
  addExpenditure:() => {}
});

export default TransactionsContext;