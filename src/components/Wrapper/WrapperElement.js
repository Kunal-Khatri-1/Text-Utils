import React, { useContext } from "react";
import styled from "styled-components";
import noteContext from "../../context/noteContext";
import { Text } from "../Textarea/TextareaElements";
import { Item, Title } from "../Accordian/AccordianElements";

const WrapperElem = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? "#040912" : "white")};

  & h1 {
    color: ${({ darkMode }) => (darkMode ? "whitesmoke" : "#19202d")};
  }

  & ${Text} {
    background-color: ${({ darkMode }) => (darkMode ? "#19202d" : "white")};
    color: ${({ darkMode }) => (darkMode ? "whitesmoke" : "#19202d")};
    caret-color: #15cdfc;
  }

  & p {
    color: ${({ darkMode }) => (darkMode ? "whitesmoke" : "#19202d")};
  }

  & ${Item} {
    background-color: ${({ darkMode }) => (darkMode ? "#19202d" : "#e9e9e9")};
  }

  & ${Title} {
    color: ${({ darkMode }) => (darkMode ? "whitesmoke" : "#19202d")};

    &.show {
      color: #256ce1;
    }
  }
`;

const Wrapper = (props) => {
  const { darkMode } = useContext(noteContext);
  return <WrapperElem darkMode={darkMode}>{props.children}</WrapperElem>;
};

export default Wrapper;
