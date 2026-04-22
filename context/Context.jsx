"use client";
import { allProducts } from "@/data/products";
import React, { useContext, useState } from "react";

const dataContext = React.createContext();

export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const [compareItem, setCompareItem] = useState([1, 2, 3]);
  const [quickViewItem, setQuickViewItem] = useState(allProducts[0]);

  const addToCompareItem = (id) => {
    if (!compareItem.includes(id)) {
      setCompareItem((pre) => [...pre, id]);
    }
  };

  const removeFromCompareItem = (id) => {
    if (compareItem.includes(id)) {
      setCompareItem((pre) => [...pre.filter((elm) => elm != id)]);
    }
  };

  const isAddedtoCompareItem = (id) => {
    return compareItem.includes(id);
  };

  const contextElement = {
    quickViewItem,
    setQuickViewItem,
    compareItem,
    setCompareItem,
    addToCompareItem,
    removeFromCompareItem,
    isAddedtoCompareItem,
  };

  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
