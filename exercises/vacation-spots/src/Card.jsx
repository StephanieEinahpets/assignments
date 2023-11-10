import { useState } from 'react'

export default function Card (props) {
    return (
        <div className='card'>
            <h1 className='place'>{props.place}</h1>
            <h3 className='price'>{props.price}</h3>
            <h4 className='season'>{props.season}</h4>
        </div>
    )
}