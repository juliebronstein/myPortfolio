import React, { useContext, useEffect } from 'react'
import About from './about'
import ColorModal from '../layout/Modal'
import { colorTemContext } from '../context/TemColorContext';

export const Header = () => {
  const { colors,setColors} = useContext(colorTemContext);

 return (
    <div className={`${colors.primaryColor}`}>
            <About/>
 <ColorModal/>
    </div>
  )
}
