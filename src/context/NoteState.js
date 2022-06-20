import { useState, useContext } from "react";
import NoteContext from "./noteContext";
import AlertContext from "./AlertContext";

const NoteState = (props) => {
  const { showAlert } = useContext(AlertContext);
  const [darkMode, setDarkMode] = useState(false);

  const darkState = {
    darkMode: darkMode,
    toggleDarkMode: function toggleDarkMode() {
      setDarkMode((prevState) => {
        const newState = !prevState;

        showAlert(`Switched to ${newState ? "Dark" : "Light"} Mode`);

        document.title = `TextUtils - ${newState ? "Dark Mode" : "Light Mode"}`

        setTimeout(() => {
          showAlert(null);
        }, 1500);

        return(newState);

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
