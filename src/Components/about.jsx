
import React, { useContext, useEffect } from 'react'
import {colorTemContext} from '../context/TemColorContext' 
 const About = () => {
    const {backColor,setBackColor,primaryColor,setPrimaryColor}=useContext(colorTemContext)


    useEffect(() => {
        setBackColor("Banafsh");
        setPrimaryColor("Black")
      }, []); 
console.log(backColor)
console.log(primaryColor)
  return (
    <div>
A
    </div>
  )
}
export default About