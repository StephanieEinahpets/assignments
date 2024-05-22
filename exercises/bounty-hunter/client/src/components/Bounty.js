import React, {useState} from "react"
import AddBountyForm from "./addBountyForm"

export default function Bounty(props) {

    const {firstName, lastName, bounty, type, living, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    const handleToggle = () => setEditToggle(prev => !prev)

    return (
        <div className="bounty">
            { !editToggle ? 
            <>
            <h2>{ firstName } { lastName }</h2>
            <h3>{ bounty } BOUNTY</h3>
            <h4>{ type }</h4>
            <h5>{ living ? "Living" : "Deceased" }</h5>
            <button onClick={() => props.deleteBounty(_id)}>Delete</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
            <AddBountyForm 
                firstName={firstName}
                lastName={lastName}
                bounty={bounty}
                type={type}
                living={living}
                btnTxt="Submit Edit"
                _id={_id}
                submit={props.editBounty}
                handleToggle = {handleToggle}
            />
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Cancel</button>
            </>
            }
        </div>
    )
}