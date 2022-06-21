import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Crater = styled.div`
  background: burlywood;
  border-radius: 50%;
  position: absolute;
  opacity: 0;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4) inset;
`;

export const ToggleDiv = styled.div`
  height: 25px;
  width: 50px;
  border-radius: 25px;
  background-image: linear-gradient(skyblue, #256ce1);
  position: relative;
  cursor: pointer;

  &.night {
    background-image: linear-gradient(midnightblue, rebeccapurple);
  }

  .notch > .crater {
    background: burlywood;
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4) inset;
  }

  &.night .crater {
    opacity: 0.4;
  }

  &.night > .notch {
    background: whitesmoke;
    box-shadow: 0px 0px 5px whitesmoke;
    transform: translate(24px, 0);
  }
`;

export const Notch = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: yellow;
  position: absolute;
  top: 3px;
  left: 3px;
  box-shadow: 0 0 5px yellow;
  z-index: 1;

  & .crater:nth-child(1) {
    right: 11px;
    bottom: 9px;
    height: 5px;
    width: 7px;
    transform: rotate(11deg);
  }

  & .crater:nth-child(2) {
    right: 6px;
    bottom: 1px;
    height: 6px;
    width: 6px;
    transform: rotate(45deg);
  }

  & .crater:nth-child(3) {
    right: 3px;
    bottom: 13px;
    height: 4px;
    width: 5px;
    transform: rotate(45deg);
  }
`;
