import React, { useState } from "react"

export default function AddBountyForm(props){
    
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", bounty: props.bounty || 0, living: props.living || true, type: props.type || "" }
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
                name="firstName" 
                value={inputs.firstName} 
                onChange={handleChange} 
                placeholder="First Name"
            />
            <input 
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange} 
                placeholder="Last Name"
            />
            <input 
                type="number" 
                name="bounty" 
                value={inputs.bounty} 
                onChange={handleChange} 
                placeholder="Bounty Amount"
            />    
            <select name="type" onChange={handleChange} value={inputs.type}>
                <option value="jedi">Jedi</option>
                <option value="sith">Sith</option>
            </select>
            <select name="living" onChange={handleChange} value={inputs.living}>
                <option value={true}>Living</option>
                <option value={false}>Deceased</option>
            </select>
            <button>{props.btnTxt}</button>
        </form>
    )

}