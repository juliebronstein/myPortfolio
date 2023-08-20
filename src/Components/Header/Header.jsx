import Sdata from "./Sdata";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";
import { useContext, useEffect } from "react";
import { DiHtml5 } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import georgia from'../../svg/flag.svg'
import pic from'../../svg/profile.png'
import verify from'../../svg/verified.png'
import { colorTemContext } from "../../context/TemColorContext";
const Header = () => {
  const { colors} = useContext(colorTemContext);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className={` ${colors.backColor+"b"}`}>
    
      <header id="header">
        <div className={`container header__container` }>
          <div className="header__profile" data-aos="fade-in">
            <img className="profile-img col-11" src={pic} alt="connection id poor" />
            <div className="verified">
              <img className="verified-img" src={verify} alt="connection id poor" />
            </div>
          </div>
          <div className="header__skills">
            <DiHtml5 />
            <FaCss3Alt />
            <SiJavascript />
            <FaSass />
            <SiReact />
            {/* <TbBrandNextjs /> */}
          </div>
          <h3 data-aos="fade-up">Marya Chibour</h3>
          <p data-aos="fade-up">
            A highly skilled Frontend Developer based in Georgia{" "}
            <span className="georgia"><img className="col-1" src={georgia} alt="connection is poor" /></span> with a strong
            passion for creating exceptional digital experiences
          </p>
          <div className="header__cta ">
            <a href="#contact" className={` btn btn-primary ${colors.primaryColor}`}>
              Let's Talk
            </a>
            <a href="#portfolio" className={` btn light  ${colors.backColor+"a"}`}>
              My Work
            </a>
          </div>
          <div className={`header__socials`} >
            {Sdata.map((item) => (
              
              <a className={`  ${colors.primaryColor+"c"}
               ${ colors.backColor==="bg-1"?"bg-1a":"bg-1b"}`} key={item.id} href={item.link} rel="noreferer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
