import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

const SearchProduct = createContext([]);

const MyContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
  
    const updateData = (newData) => {
      setData(newData);
    };
    
    const contextValue = {
      data,
      updateData,
    };
  
    return <SearchProduct.Provider value={contextValue}>{children}</SearchProduct.Provider>;
  };
export  {SearchProduct , MyContextProvider};

