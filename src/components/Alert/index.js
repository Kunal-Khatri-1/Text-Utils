import React, { useContext } from "react";
import { AlertElem } from "./AlertElement";
import { IconContext } from "react-icons";
import AlertContext from "../../context/AlertContext";

const Alert = () => {
  const {alert} = useContext(AlertContext);

  return (
    alert && <IconContext.Provider>
      <AlertElem>
        <p>{alert}</p>
      </AlertElem>
    </IconContext.Provider>
  );
};

export default Alert;
