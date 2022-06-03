import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    localStorage.getItem("accesstoken")
      ? JSON.parse(localStorage.getItem("accesstoken"))
      : {}
  );
  useEffect(() => {
    localStorage.setItem("accesstoken", JSON.stringify(auth));
  }, [auth]);
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshtoken")
      ? JSON.parse(localStorage.getItem("refreshtoken"))
      : {}
  );
  useEffect(() => {
    localStorage.setItem("refreshtoken", JSON.stringify(refreshToken));
  }, [refreshToken]);

  return (
    <AppContext.Provider
      value={{ auth, setAuth, refreshToken, setRefreshToken }}
    >
      {children}
    </AppContext.Provider>
  );
};
