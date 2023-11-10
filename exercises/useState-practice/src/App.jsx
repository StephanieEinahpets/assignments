import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [color, setColor] = useState("blue")

  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Smith"
    }
  ])

const [colors, setColors] = setState(["pink", "blue"])


const [countObject, setCountObject] = setState({
	count: 0
})

const [person, setPerson] = useState({
  firstName: "John",
  lastName: "Smith"
})

  useEffect( () => {
    // setColor("green")
    // console.log(color)


    // setColor(prevColor => prevColor === "pink" ? "blue" : "pink")


    // setPeople(prevPeople => {
    //   return [ 
    //     ...prevPeople,
    //     {
    //       firstName: "Jessica",
    //       lastName: "Jones"
    //     }
    //   ]
    // })


// setColors(prevColors => [...prevColors, "green"])


// setCountObject(prevState => ({count: prevState.count + 1}))


// setPerson(prevPerson => ({
//     ...prevPerson,
//     age: 30
// }))

// What's wrong with this?
// const [colors, setColors] = useState(["pink", "blue"])

// setColors("green")
//you can't overwrite the previous state, you can't change the state from an array to a string

  }, [])


  
  return (
    <>
      <div>I work</div>
    </>
  )
}

export default App
