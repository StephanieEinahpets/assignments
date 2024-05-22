import React, {useState} from "react"
import AddBookForm from "./AddBookForm"

export default function Book(props) {

    const {author, title, year, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    const handleToggle = () => setEditToggle(prev => !prev)

    return (
        <div className="book">
            { !editToggle ? 
            <>
            <h2>{ title }</h2>
            <h3>By { author }</h3>
            <h4>Published { year }</h4>
            <button onClick={() => props.deleteBook(_id)}>Delete</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
            <AddBookForm 
                author={author}
                title={title}
                year={year}
                btnTxt="Submit Edit"
                _id={_id}
                submit={props.editBook}
                handleToggle = {handleToggle}
            />
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Cancel</button>
            </>
            }
        </div>
    )
}