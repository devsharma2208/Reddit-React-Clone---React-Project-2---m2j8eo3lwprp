import React, { createContext, useState } from "react";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [themeColor, setThemeColor] = useState(false);

  return (
    <context.Provider value={{ search, setSearch, themeColor, setThemeColor }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
