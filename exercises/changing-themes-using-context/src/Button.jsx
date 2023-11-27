import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export default function Button(props) {

    const {color, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={color}>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    )
}
