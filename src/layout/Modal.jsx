import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import palette from "../svg/palette.svg";
import { colorTemContext } from "../context/TemColorContext";
function MyVerticallyCenteredModal(props) {
  const { backColor, primaryColor, setPrimaryColor,setBackColor} = useContext(colorTemContext);
  const [colors, setColors] = useState({});

  
  const changeColor=(props,color)=>{
  props.onHide()
  setPrimaryColor(color)
  setColors({   
    backColor,
    primaryColor})
  }
 localStorage.setItem('colors', JSON.stringify(colors));
  return (
    <div className="modal">
      <Modal
        {...props}
        // size="lg or sm or xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Customize Your Theme
        </Modal.Title>
      </Modal.Header> */}
        <Modal.Body>
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
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
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

