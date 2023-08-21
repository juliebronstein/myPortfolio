import Cdata from "./Cdata";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="contact-inner container">
          <div className="contact-left">
            <h2>Let's get in touch</h2>
            <p>
              I enjoy exploring fresh design challenges and discussing new
              projects. To make the most out of our initial meeting, please feel
              free to share as much information as possible regarding your
              project, enabling us to have a comprehensive discussion.
            </p>
            <div className="contact__container">
              {Cdata.map((contact) => (
                <a key={contact.id} href={contact.link} target="_blank">
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="contact-right">
            <h2>Feel Free to fill the form</h2>
            <div className="contact-form">
              <form
                action="https://formspree.io/f/mgebnblj"
                method="POST"
                className="contact-inputs"
              >
                <label for="name">What is your beautiful name</label>
                <input type="text" name="name" autoComplete="off" required />
                <label for="email">Your favorite email address</label>
                <input type="email" name="email" autoComplete="off" required />
                <label for="message">How can I help you?</label>
                <textarea
                  name="message"
                  cols="20"
                  rows="4"
                  autoComplete="off"
                  required
                ></textarea>

                <input type="submit" value="Send" className="btn primary" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
