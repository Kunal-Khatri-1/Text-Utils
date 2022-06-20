import { useState } from "react";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
    const [alert, setAlert] = useState(null);
    const showAlert = (message) => {
      setAlert(message);
    }
    const AlertStateObj = {
        alert: alert,
        showAlert: showAlert
    }
    return (
        <AlertContext.Provider value={AlertStateObj}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;