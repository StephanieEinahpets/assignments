import { useState } from 'react'
import './App.css'
import { UglyContext } from './UglyContext'
import { useContext } from 'react'
import UglyThing from './UglyThing'

function App() {

  const { uglyArray, addUglyThing, emptyValues } = useContext(UglyContext)
  const [formData, setFormData] = useState(emptyValues)

  const uglyList = uglyArray.map((item, index) => {
    return(
      <UglyThing 
        key={index}
        id={item._id}
        title={item.title}
        description={item.description}
        imgUrl={item.imgUrl}
      />
    )
  })

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
  }

  function onSubmit (e) {
    e.preventDefault()
    addUglyThing(formData)
    setFormData(emptyValues)
  }

  return (
    <>
      <h1>Ugly Things</h1>
      <form onSubmit={onSubmit}>
        <input 
          name="title"
          placeholder="Name"
          type="text"
          value={formData.title}
          onChange={handleChange}
        />
        <input 
          name="description"
          placeholder="Description"
          type="text"
          value={formData.description}
          onChange={handleChange}
        />
        <input 
          name="imgUrl"
          placeholder="Image URL"
          type="url"
          value={formData.imgUrl}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <div className='list'>
        {uglyList}
      </div>
    </>
  )
}

export default App
