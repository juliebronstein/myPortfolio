import React, { useContext } from 'react'
import Header from './Components/Header/Header'
import {Navbar} from './Components/Navbar/Navbar'
import { colorTemContext } from './context/TemColorContext';
export const Home = () => {
    const {colors} = useContext(colorTemContext);
  return (
    <div className={`${colors.backColor+"b"}`}>
          <Navbar/>
      <Header/>
    </div>
  )
}
