import React, { createContext, useContext, useState } from "react";

 const CategoryContext = createContext({
        CategoryList: [],
        updateCList: () => {}
 });

export default CategoryContext