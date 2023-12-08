import React from "react"
import { UglyContext } from "./UglyContext"
import { useContext } from "react"
import { useState } from "react"

export default function UglyThing(props){

    const {deleteUglyThing, saveUglyThing} = useContext(UglyContext)
    
    const [edit, setEdit] = useState(false)

    const [editForm, setEditForm] = useState({
        title: props.title,
        description: props.description,
        imgUrl: props.imgUrl
    })

    function handleChange(event) {
        const {name, value} = event.target
        setEditForm(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    // different ways to write delete
    // const handleDelete = () => {deleteUglyThing(props.id)};
    //
    // function handleDelete() {
    //     deleteUglyThing(props.id)
    // }

    function toggleEdit() {
        setEdit(prev => !prev)
}

    function handleSubmit(e){
        e.preventDefault()
        saveUglyThing(props.id, editForm)
        setEdit(false);
    }

    return (
    <div className="uglythings">
        {!edit ? 
        <>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img src={props.imgUrl} />
            <br></br>
            <button onClick={toggleEdit}>Edit</button>  
            <button onClick={() => deleteUglyThing(props.id)}>Delete</button>
        </>
        : 
        <form onSubmit={handleSubmit}>
                <input 
                value={editForm.title}
                name="title"
                onChange={handleChange}
                />
                <input 
                value={editForm.description}
                name="description"
                onChange={handleChange}
                />
                <input 
                value={editForm.imgUrl}
                name="imgUrl"
                onChange={handleChange}
                />
                <button>Save</button>
                <button onClick={toggleEdit}>Cancel</button>
        </form>
    }
    </div>
    )
}