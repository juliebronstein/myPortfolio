import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import palette from "../svg/palette.svg";
import { colorTemContext } from "../context/TemColorContext";
function MyVerticallyCenteredModal(props) {
  // const { backColor, primaryColor, setPrimaryColor,setBackColor} = 
  const {colors, setColors} = useContext(colorTemContext);

  const changeColor=(props,primaryColor)=>{
    props.onHide()
    const buf={primaryColor:primaryColor,backColor:colors.backColor}
      setColors(()=>{return {...colors,primaryColor:primaryColor}})

      
    localStorage.setItem('colors', JSON.stringify(buf));
    }

  const changeBackColor=(props,backColor)=>{
    props.onHide()
    
    setColors(()=>{return {...colors,backColor:backColor}})
    const buf={primaryColor:colors.primaryColor,backColor:backColor}
    localStorage.setItem('colors', JSON.stringify(buf));
  }
  
  return (
    <div >
      <Modal
        {...props}
        dialogClassName="modal-90w public-profile-modal-class p-0"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
  
        <Modal.Body>
          <div className="m">
          <h3 className="justify-content-center">
            Customize Your Theme
            <p>Change the primary and background color to your preferences.</p>
          
          </h3>  
          <p>primary Color</p>
            <div className="d-flex flex-row justify-content-center ">
            <div  className="d-flex primary-color color-1" onClick={()=>{changeColor(props,'color-1')}}></div>
            <div  className="d-flex primary-color color-2" onClick={()=>{changeColor(props,'color-2')}}></div>
            <div  className="d-flex primary-color color-3" onClick={()=>{changeColor(props,'color-3')}}></div>
            <div  className="d-flex primary-color color-4" onClick={()=>{changeColor(props,'color-4')}}></div>
            <div  className="d-flex primary-color color-5" onClick={()=>{changeColor(props,'color-5')}}></div>
            <div  className="d-flex primary-color color-6" onClick={()=>{changeColor(props,'color-6')}}></div>
            </div>
            <p>Background Color</p>
            <div className="d-flex flex-row justify-content-center">
            <div  className="d-flex primary-color bg-1" onClick={()=>{changeBackColor(props,'bg-1')}}></div>
            <div  className="d-flex primary-color bg-2" onClick={()=>{changeBackColor(props,'bg-2')}}></div></div>
            </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function ColorModal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <img
        src={palette}
        className="App-logo "
        alt="palette"
        onClick={() => setModalShow(true)}
      />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ColorModal;
