import React, { useContext, useEffect } from 'react'
import About from './about'
import ColorModal from '../layout/Modal'
import { colorTemContext } from '../context/TemColorContext';

export const Header = () => {
  const { backColor, primaryColor, setPrimaryColor,setBackColor} = useContext(colorTemContext);



  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem('colors'));
    console.log("colors",colors)

    if(colors){
       setPrimaryColor(colors.primaryColor)
      setBackColor(colors.backColor)
    }else{ 
      console.log("HI")
      setPrimaryColor(()=>'color-6') 
         
    }
    console.log("primaryColor in app:", primaryColor)
  }, []);
  return (
    <div className={primaryColor}  >
        
        <About/>
 <ColorModal/>
    </div>
  )
}
