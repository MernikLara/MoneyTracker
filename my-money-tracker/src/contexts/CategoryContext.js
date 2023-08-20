import React, { createContext, useContext, useState } from "react";

 const CategoryContext = createContext({
        CategoryList: [],
        updateCList: () => {},
        addCategory: () => {}
 });

export default CategoryContext