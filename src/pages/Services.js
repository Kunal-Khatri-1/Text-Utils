import React from "react";
import Navbar from "../components/Navbar/index.js";
import Wrapper from "../components/Wrapper/WrapperElement.js";

const Services = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 60px)",
          }}
        >
          <h1>Services</h1>
        </div>
      </Wrapper>
    </>
  );
};

export default Services;
