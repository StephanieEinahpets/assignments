import React, { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

const UglyContext = React.createContext()

function UglyContextProvider(props){

    const [uglyArray, setUglyArray] = useState([])

    const emptyValues = {
        title: "", 
        description: "", 
        imgUrl: "",
    }

    useEffect(() => {
        axios.get("https://api.vschool.io/stephanieblackman/thing")
            .then(response => setUglyArray(response.data))
            .catch(error => console.log(error))
    }, [uglyArray.length])

    function addUglyThing(uglyThing) {
        axios.post("https://api.vschool.io/stephanieblackman/thing", uglyThing)
            .then(res => setUglyArray(prevArray => {
                return [...prevArray, res.data]
            }))
            .catch(err => console.log(err))
    }

    function deleteUglyThing(uglyThingId) {
        axios.delete(`https://api.vschool.io/stephanieblackman/thing/${uglyThingId}`)
            .then(response => setUglyArray(prevState => prevState.filter(uglyThing => uglyThing._id !== uglyThingId)))
            .catch(error => console.log(error))
    }

    function saveUglyThing(uglyThingId, edit){
        axios.put(`https://api.vschool.io/stephanieblackman/thing/${uglyThingId}`, edit)
            .then((response) => {
            setUglyArray(prevState => prevState.map(uglyThing => uglyThing._id !== uglyThingId ? uglyThing : response.data))
            
            })
            .catch(error => console.log(error))
    }

    return(
        <UglyContext.Provider value={{uglyArray, addUglyThing, deleteUglyThing, emptyValues, saveUglyThing}}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContext, UglyContextProvider}