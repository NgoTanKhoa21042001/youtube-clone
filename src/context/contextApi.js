/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { createContext, useState, useEffect } from "react";
export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResult] = useState(false);
  const [selectCategories, setSelectCategories] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {});

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        setSearchResult,
        selectCategories,
        mobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
