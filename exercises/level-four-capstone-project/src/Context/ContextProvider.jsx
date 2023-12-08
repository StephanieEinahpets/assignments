import React, { useState, createContext } from "react";

export const Context = createContext()

export default function ContextProvider(props) {

    const [theme, setTheme] = useState(true)

    function toggleTheme()  {
        setTheme(prev => !prev)
    }
    

    return (
        <Context.Provider value={{theme, toggleTheme}}>
            {props.children}
        </Context.Provider>
    )

}
