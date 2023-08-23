

import ScrollspyNav from "react-scrollspy-nav";
import "./FloatingNav.css";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { SiReact } from "react-icons/si";

const FloatingNav = () => {
  return (
    <>
     {/* <div>
                <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#section_1">Section 1</a></li>
                        <li><a href="#section_2">Section 2</a></li>
                        <li><a href="#section_3">Section 3</a></li>
                    </ul>
                </ScrollspyNav>
                
                <div>
                    <div style={{"height": "400px"}}><span>Welcome!</span></div>
                    <div id="section_1" style={{"height": "500px"}}><span>Section 1</span></div>
                    <div id="section_2" style={{"height": "500px"}}><span>Section 2</span></div>
                    <div id="section_3" style={{"height": "500px"}}><span>Section 3</span></div>
                </div>
            </div> */}
      <ul id="floating__nav">
    <div className="d-flex d-lg-none">
    <ScrollspyNav
                    scrollTargetIds={["home", "about", "skills", "portfolio", "contact"]}
                    offset={0}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                    currentClassName="b"
                >
                  <ul className="d-flex flex-row"  >
                  <li><a href="home"><AiFillHome /></a></li>
                         <li><a href="#about"><BsPersonFill /></a></li>
                         <li><a href="#skills"><SiReact /></a></li>
                         <li><a href="#portfolio"><AiFillAppstore /></a></li>
                         <li><a href="#contact"><AiFillMessage /></a></li>
                    </ul>
                 
   
        </ScrollspyNav>
        <div >
        <div id="home">home</div>
        <div id="about">about</div>
        <div id="skills">skills</div>
        <div id="contact">portfolio</div>
        <div id="contact">contact</div>
        </div>
    </div>
      </ul>
    </>
  );
};

export default FloatingNav;
  // <ul className="d-flex flex-row" >
  //                       <li><a href="/"><AiFillHome /></a></li>
  //                       <li><a href="#about"><BsPersonFill /></a></li>
  //                       <li><a href="#skills"><SiReact /></a></li>
  //                       <li><a href="#portfolio"><AiFillAppstore /></a></li>
  //                       <li><a href="#contact"><AiFillMessage /></a></li>
  //                   </ul> 