import React, { useContext } from "react";
import { AlertElem } from "./AlertElement";
import noteContext from "../../context/noteContext";

const Alert = () => {
  const { alert } = useContext(noteContext);

  return (
    alert && (
      <AlertElem>
        <p>{alert}</p>
      </AlertElem>
    )
  );
};

export default Alert;
