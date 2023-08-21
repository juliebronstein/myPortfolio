import React, { useState } from "react";
import Card from "../../components/Card";

const Testimonial = ({ avatar, quote, name, profession }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Card className="light">
      <p className="testimonial__quote">
        {readMore ? quote : `${quote.substring(0, 100)}...`}
        <br />
        <button className="read-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "show more" : "show less"}
        </button>
      </p>
      <div className="testimonial__client">
        <div className="testimonial__client-avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="testimonial__client-details">
          <h6>{name}</h6>
          <small>{profession}</small>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
