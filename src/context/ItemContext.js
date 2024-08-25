import React from 'react';

const ItemContext = React.createContext();

export const useItemContext = () => {
  return React.useContext(ItemContext);
};

export const ItemProvider = ({ children, value }) => {
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};
