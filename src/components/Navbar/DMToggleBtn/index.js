import React, { useContext } from "react";
import { Wrapper, ToggleDiv, Notch, Crater } from "./DmToggleBtnElements";
import noteContext from "../../../context/noteContext";

export default function Toggle() {
  const darkState = useContext(noteContext);
  return (
    <Wrapper className="wrapper">
      <ToggleDiv onClick={() => darkState.toggleDarkMode.call(darkState)} className={`toggle ${darkState.darkMode ? "night" : ""}`}>
        <Notch className="notch">
          <Crater className="crater" />
          <Crater className="crater" />
          <Crater className="crater" />
        </Notch>
      </ToggleDiv>
    </Wrapper>
  );
}
