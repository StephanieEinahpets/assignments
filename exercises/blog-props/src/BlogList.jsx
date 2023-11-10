import { useState } from 'react'

export default function BlogList (props) {
    return (
        <div className='bloglist'>
            <h1 className='title'>{props.title}</h1>
            <h2 className='subtitle'>{props.subTitle}</h2>
            <h4 className='author'>Posted by {props.author} on {props.date}</h4>
            <hr></hr>
        </div>
    )
}