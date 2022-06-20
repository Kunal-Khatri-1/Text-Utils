import React from "react";
import Alert from "../components/Alert/index.js";
import Navbar from "../components/Navbar/index.js";
import Textarea from "../components/Textarea/index.js";
import Wrapper from "../components/Wrapper/WrapperElement.js";

const Home = () => {
  return (
    <>
      <Navbar />
      <Alert />
      <Wrapper>
        <Textarea />
      </Wrapper>
    </>
  );
};

export default Home;
