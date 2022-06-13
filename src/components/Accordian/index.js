import React, { useState } from "react";
import {
  Wrapper,
  AccordianDiv,
  Item,
  Title,
  Content,
} from "./AccordianElements";
import Data from "./Data";

const Accordian = () => {

  const [selected, setSelected] = useState(null);

  const toggle = index => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  }

  return (
    <Wrapper>
      <AccordianDiv>
        {Data.map((element, index) => {
          return (
            <Item>
              <Title onClick={() => toggle(index)} className={selected === index ? "show" : ""}>
                <h2>{element.question}</h2>
                <span>{selected === index ? "-" : "+"}</span>
              </Title>
              <Content className={selected === index ? "content show" : "content"}>{element.answer}</Content>
            </Item>
          );
        })}
      </AccordianDiv>
    </Wrapper>
  );
};

export default Accordian;
