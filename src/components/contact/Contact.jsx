import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiHeadphones } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import IMG from "../../assets/imgs/contact.gif";
import "./contact.scss";

export const Contact = ({ contactRef }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const form = useRef();

  const validEmailRegex =
    "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+";

  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };
  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const handleNumberChange = ({ target: { value } }) => {
    setNumber(value);
  };
  const handleSubjectChange = ({ target: { value } }) => {
    setSubject(value);
  };
  const handleMessageChange = ({ target: { value } }) => {
    setMessage(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (name !== "" && email !== "" && message !== "") {
      if (email.match(validEmailRegex)) {
        emailjs
          .sendForm(
            "service_lxbhkg8",
            "template_megxgdo",
            form.current,
            "kZ4ju2qi7tlWGh5KM"
          )
          .then(
            (result) => {
              console.log(result.text);
              setResult("Email Sent Successfully");
              setName("");
              setEmail("");
              setNumber("");
              setSubject("");
              setMessage("");
            },
            (error) => {
              console.log(error.text);
              setResult(error.text);
            }
          );
      } else {
        setResult("Invalid Email!");
      }
    } else {
      setResult("Please fill out the missing form Inputs");
    }
  };

  return (
    <section ref={contactRef}>
      {/* Using dummy class to show more of the component on Scroll (useRef) */}
      <div className="dummy">----------------------------</div>

      <div className="contact-container">
        <div className="contact-options-container">
          <div className="contact-option">
            <FiHeadphones className="options-icon" />
            <h3>Phone Numbers</h3>
            <a href={`tel:+249128569096`}>+249-128-569-096</a>
          </div>

          <div className="contact-option">
            <HiOutlineMail className="options-icon" />
            <h3>Email Addresses</h3>
            <a href={`mailto:magedfaiz98@gmail.com`}>Magedfaiz98@gmail.com</a>
          </div>
          <div className="contact-option">
            <HiOutlineLocationMarker className="options-icon" />
            <h3>Location</h3>
            <p>Khartoum, Sudan</p>
          </div>
        </div>

        <div className="form-container">
          <div className="contact-img">
            <img src={IMG} alt="Get-in-touch" />
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <h1>Contact Me</h1>
            <input
              type="name"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="number"
              placeholder="Phone Number (Optional)"
              name="number"
              value={number}
              onChange={handleNumberChange}
            />
            <input
              type="text"
              placeholder="Subject (Optional)"
              name="subject"
              value={subject}
              onChange={handleSubjectChange}
            />
            <textarea
              type="name"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleMessageChange}
            />

            {result && <p>{result}</p>}

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
