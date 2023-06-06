import React, { createContext, useContext, useState } from "react";

const BalanceContext = createContext({
  Balance: Number
});

export default BalanceContext;