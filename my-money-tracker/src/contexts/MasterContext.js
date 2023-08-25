import React, { createContext, useContext, useState } from "react";

 const CategoryContext = createContext({
        CategoryList: [],
        updateCList: () => {},
        addCategory: () => {},
        IncomeList: [],
        ExpenditureList: [],
        updateIList: () => {},
        addIncome:() => {},
        addExpense: () => {},
        getSpecificPrihodi: () => [],
 });

export default CategoryContext