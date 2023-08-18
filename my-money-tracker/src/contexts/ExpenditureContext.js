import React, { createContext, useContext, useState } from "react";

 const EspenditureContext = createContext({
        Expenses: Number,
        updateExpenses: () => {}
 });

export default IncomeContext