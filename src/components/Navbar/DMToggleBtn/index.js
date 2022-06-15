import React from "react";
import { Wrapper, ToggleDiv, Notch, Crater } from "./DmToggleBtnElements";

export default function Toggle({ toggled, click }) {
  return (
    <Wrapper className="wrapper">
      <ToggleDiv onClick={click} className={`toggle ${toggled ? "night" : ""}`}>
        <Notch className="notch">
          <Crater className="crater" />
          <Crater className="crater" />
          <Crater className="crater" />
        </Notch>
      </ToggleDiv>
    </Wrapper>
  );
}
