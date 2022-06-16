import React from "react";
import Navbar from "../components/Navbar/index.js";
import Textarea from "../components/Textarea/index.js";
import Wrapper from "../components/Wrapper/WrapperElement.js";

const Home = () => {
  return (
    <>
        <Navbar />
      <Wrapper>
        <Textarea />
      </Wrapper>
    </>
  );
};

export default Home;
