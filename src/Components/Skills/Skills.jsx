import Card from "../../layout/Card";
import Sdata from "./Sdata";
import "./Skills.css";

const Services = () => {
  return (
    <>
      <section id="skills">
        <h2>Skills & Proficiencies</h2>
        <p>Highlighting my abilities and expertise</p>
        <div className="container services__container" data-aos="fade-up">
          {Sdata.map((item) => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
