import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode((prevState) => !prevState);
    }
    const darkState = {
        darkMode: darkMode,
        toggleDarkMode: toggleDarkMode
    }
    return (
        <NoteContext.Provider value = {darkState}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;