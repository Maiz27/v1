import React, { useState, useEffect, useRef } from "react";
import { Header } from "../../components/header/Header";
import { Contact } from "../../components/contact/Contact";
import "./home.scss";

export const Home = ({ setActive }) => {
  const contactRef = useRef(null);
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setActive("home");
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section>
        <Header letterClass={letterClass} contactRef={contactRef} />
      </section>

      <Contact contactRef={contactRef} />
    </>
  );
};
