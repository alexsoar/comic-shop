import React, { createContext, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children, value }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);