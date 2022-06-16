import React, { useContext } from "react";
import { Wrapper, ToggleDiv, Notch, Crater } from "./DmToggleBtnElements";
import noteContext from "../../../context/noteContext";

export default function Toggle() {
  const {darkMode, toggleDarkMode} = useContext(noteContext);
  return (
    <Wrapper className="wrapper">
      <ToggleDiv onClick={toggleDarkMode} className={`toggle ${darkMode ? "night" : ""}`}>
        <Notch className="notch">
          <Crater className="crater" />
          <Crater className="crater" />
          <Crater className="crater" />
        </Notch>
      </ToggleDiv>
    </Wrapper>
  );
}
