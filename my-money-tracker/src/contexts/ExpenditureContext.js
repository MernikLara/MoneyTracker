import React, { createContext, useContext, useState } from "react";

 const ExpenditureContext = createContext({
        Expenses: Number,
        updateExpenses: () => {}
 });

export default ExpenditureContext