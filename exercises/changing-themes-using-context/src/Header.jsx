import { useState, useContext} from 'react'
import { ThemeContext } from './ThemeProvider'

export default function Header(props) {

    const {color} = useContext(ThemeContext)

    return (
        <div className={color}>
        <h1>Changing Themes Using Context</h1>
        </div>
    )
}