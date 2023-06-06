import React, { createContext, useContext, useState } from "react";

const TransactionsContext = createContext({
  TransactionList: [],
  updateTList: () => {}
});

export default TransactionsContext;