import FNdata from "./FNdata";
import Nav from "./Nav";
import Scrollspy from "react-scrollspy";
import "./FloatingNav.css";

const FloatingNav = () => {
  return (
    <>
      <ul id="floating__nav">
        <Scrollspy
          offset={-400}
          className="scrollspy"
          items={["header", "about", "skills", "portfolio", "contact"]}
          currentClassName="active"
        >
          {FNdata.map((item) => (
            <Nav key={item.id} item={item} />
          ))}
        </Scrollspy>
      </ul>
    </>
  );
};

export default FloatingNav;
