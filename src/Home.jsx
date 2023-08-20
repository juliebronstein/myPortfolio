import React, { useContext } from 'react'
import Header from './Components/Header/Header'
import {Navbar} from './Components/Navbar/Navbar'
import About from './Components/About/About.jsx'
import { colorTemContext } from './context/TemColorContext';
export const Home = () => {
    const {colors} = useContext(colorTemContext);
  return (
    <div className={`${colors.backColor+"b"}`}>
          <Navbar/>
      <Header/>
      <div className={`${colors.backColor+"a"}`}>
      <About/></div>
    </div>
  )
}
