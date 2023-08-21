import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Import required modules
import { Pagination, Autoplay } from "swiper";
import Tdata from "./Tdata";
import "./Testimonials.css";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <>
      <section id="testimonials">
        <h2>What Other's Say</h2>
        <p>
          These are unbiased testimonials from some of the people with whom I
          have either worked or got mentorship
        </p>
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              600: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={true}
            className="mySwiper"
          >
            {Tdata.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Testimonial {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
