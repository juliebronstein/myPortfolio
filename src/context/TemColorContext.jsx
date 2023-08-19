import React, { useState } from 'react'
import { createContext } from "react";


export const colorTemContext=createContext({
    backColor:"",
    setBackColor:()=>{},
    primaryColor:'',
    setPrimaryColor:()=>{}
})

export const ColorTemContainer = ({children}) => {
    const [backColor, setBackColor] = useState('bg-1')
    const [primaryColor, setPrimaryColor] = useState('color-1')
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