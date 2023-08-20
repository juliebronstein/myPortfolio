import React from "react";
import { ColorTemContainer } from "./context/TemColorContext";

import { Home } from "./Home";




function App() {

  return (  
  <ColorTemContainer>
    
<Home/>
     
   
 </ColorTemContainer>
  );
}

export default App;
