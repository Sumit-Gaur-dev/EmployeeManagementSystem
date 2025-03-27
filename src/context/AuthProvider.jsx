import React, { createContext, useEffect, useState } from "react";
import { getLocalStorageData, setLocalStorageData } from "../utils/localStorage";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [userData, setUserData] = useState();
  
  useEffect(() => {
    setLocalStorageData();
    const { employees, admin} = getLocalStorageData();
    setUserData({ employees, admin});
  }, []);

  return (
    <>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </>
  );
}
export default AuthProvider;
