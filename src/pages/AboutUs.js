import React from "react";
import Accordian from "../components/Accordian/index.js";
import Alert from "../components/Alert/index.js";
import Navbar from "../components/Navbar/index.js";
import Wrapper from "../components/Wrapper/WrapperElement.js";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Alert />
      <Wrapper>
        <Accordian />
      </Wrapper>
    </>
  );
};

export default AboutUs;
