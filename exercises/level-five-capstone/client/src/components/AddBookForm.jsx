import React, { useState } from "react"

export default function AddBookForm(props){
    
    const initInputs = { author: props.author || "", title: props.title || "", year: props.year || "" }
    const [inputs, setInputs] = useState(initInputs)


    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        props.handleToggle && props.handleToggle()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="author" 
                value={inputs.author} 
                onChange={handleChange} 
                placeholder="Author"
            />
            <input 
                type="text" 
                name="title" 
                value={inputs.title} 
                onChange={handleChange} 
                placeholder="Title"
            />
            <input 
                type="number" 
                name="year" 
                value={inputs.year} 
                onChange={handleChange} 
                placeholder="Year Published"
            />    
            <button>{props.btnTxt}</button>
        </form>
    )

}