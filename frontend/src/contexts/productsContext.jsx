import React, { createContext } from "react";

export const productsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  return <productsContext.Provider>{children}</productsContext.Provider>;
};
