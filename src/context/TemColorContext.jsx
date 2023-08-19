import React, { useState } from 'react'
import { createContext } from "react";


export const colorTemContext=createContext({
    backColor:"B",
    setBackColor:()=>{},
    primaryColor:"B",
    setPrimaryColor:()=>{}
})

export const ColorTemContainer = ({children}) => {
    const [backColor, setBackColor] = useState("B")
    const [primaryColor, setPrimaryColor] = useState("B")
  return (
    <colorTemContext.Provider value={{
      backColor,
      setBackColor,
      primaryColor,
      setPrimaryColor
    }}>
        {children}
    </colorTemContext.Provider>
  )
}