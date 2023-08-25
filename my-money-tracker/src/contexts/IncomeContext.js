import React, { createContext, useContext, useState } from "react";

const IncomeContext = createContext({
  IncomeList: [],
  updateIList: () => {},
  addIncome:() => {}, 
});

export default IncomeContext;