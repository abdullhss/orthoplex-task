"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import DashBord from "./components/DashBord";
import appReducer from "./reducers/appReducer";
import { useAuth } from "./contexts/AuthContext";
export default function Home() {

  const {userFromLocalStorage , passwordFromLocalStorage,logOut ,setUserFromLocalStorage , setPasswordFromLocalStorage , isUserValid , setIsUserValid} = useAuth();
  const [user , dispatch] = useReducer(appReducer , {});
    
  useEffect(()=>{
    if(userFromLocalStorage && passwordFromLocalStorage){
      dispatch({type : "checkUser" , payload:{
        userFromLocalStorage , 
        passwordFromLocalStorage,
        setIsUserValid
      }})
    }else{
      setIsUserValid(false);
    }

  } , [userFromLocalStorage , passwordFromLocalStorage])
  return (
    <div className="">
      {
        isUserValid === null ? (
          <p className="text-white text-2xl flex justify-center mt-10">Loading...</p>
        ) : isUserValid ? (
            <DashBord/>
        ) : (
          <Hero />
        )
      }
    </div>

  );
}
