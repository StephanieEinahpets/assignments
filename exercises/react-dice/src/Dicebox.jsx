import { useState } from 'react'


// function Die (props){
//     return (
//         <div>{props.number}</div>
//     )
// }

export default function Dicebox (){
    const [diceArray, setDiceArray] = useState([
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
    ])

    const getNumbers = (count) => {

        let arr = [
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1
        ]
    
        return arr
    }



    return (
        <div>
            <div>
                {diceArray.map(item => {
                    return <div>{item}</div>
                })}
            </div>
            <button onClick={() => setDiceArray(getNumbers())}>Re-Roll</button>
        </div>
    )
}