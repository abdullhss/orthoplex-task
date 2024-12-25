"use client"
import { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface AuthContextType {
  userFromLocalStorage: string | null;
  setUserFromLocalStorage: React.Dispatch<React.SetStateAction<string | null>>;
  passwordFromLocalStorage: string | null;
  setPasswordFromLocalStorage: React.Dispatch<React.SetStateAction<string | null>>;
  isUserValid: boolean | null;
  setIsUserValid: React.Dispatch<React.SetStateAction<boolean | null>>;
  logOut : ()=>void
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userFromLocalStorage, setUserFromLocalStorage] = useState<string | null>(null);
  const [passwordFromLocalStorage, setPasswordFromLocalStorage] = useState<string | null>(null);
  const [isUserValid, setIsUserValid] = useState<boolean | null>(null);


  const logOut = ()=>{
    localStorage.removeItem("username")
    localStorage.removeItem("password")
  }
  useEffect(() => {
    setUserFromLocalStorage(localStorage.getItem("username"));
    setPasswordFromLocalStorage(localStorage.getItem("password"));
  }, []);

  
  return (
    <AuthContext.Provider
      value={{
        userFromLocalStorage,
        setUserFromLocalStorage,
        passwordFromLocalStorage,
        setPasswordFromLocalStorage,
        isUserValid,
        setIsUserValid,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
