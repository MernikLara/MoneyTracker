import React, { createContext, useContext, useState } from "react";
import { ProgressBar } from "react-bootstrap";

 const CategoryContext = createContext({
        balance: Number,
        Maxbuget: Number,
        ProgressBar: Number
 });

export default CategoryContext