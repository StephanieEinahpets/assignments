import React, {useContext} from 'react'
import { ThemeContext } from './ThemeProvider'

export default function Body(props) {

    const {color} = useContext(ThemeContext)

    return (
        <div className={color}>
            <h3>The theme is currently set to {color} mode. Click the button below to change the theme. </h3>
        </div>
    )
}