import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [alert, setAlert] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const darkState = {
    darkMode: darkMode,
    alert: alert,
    showAlert: (message) => {
      setAlert(message);
    },
    toggleDarkMode: function toggleDarkMode() {
      setDarkMode((prevState) => {
        const newState = !prevState;
        console.log("before showing alert")
        this.showAlert(
          `Switched to ${newState ? "Dark" : "Light"} Mode`
        );
        console.log("after showing alert")
        document.title = `TextUtils - ${newState ? "Dark Mode" : "Light Mode"}`;

        setTimeout(() => {
          this.showAlert(null);
        }, 1500);

        return newState;
      });
    },
  };

  return (
    <NoteContext.Provider value={darkState}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
