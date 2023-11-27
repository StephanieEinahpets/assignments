import { useState } from 'react'

export default function Form () {
    const [formData, setFormData] = useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            phone: "", 
            birthplace: "",
            food: "",
            about: ""
        }
    )

function handleChange(event) {
    console.log(event)
    const {name, value, type} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}

const isFormEmpty = Object.values(formData).some(value => value === "")

const [badgeArray, setBadgeArray] = useState([])
const badge = badgeArray.map(badge => {
    const {firstName, lastName, email, phone, birthplace, food, about} = badge
    return (
        <div className='badgeContainer'>
            <h4>Badge:</h4>
            <br></br>
            <p className="name">Name: {firstName} {lastName}</p>
            <p className="phone">Phone: {phone}</p>
            <p className="email">Email: {email}</p>
            <p className="birthplace">Birth Place: {birthplace}</p>
            <p className="food">Favorite Food: {food}</p>
            <section className="about">{about}</section>
        </div>
    )
})

    function onSubmit (e) {
        e.preventDefault()
        setBadgeArray(prevState => [...prevState, formData])
        setFormData({
            firstName: "", 
            lastName: "", 
            email: "", 
            phone: "", 
            birthplace: "",
            food: "",
            about: ""
        })
    }

    
    return (
    <div>
    <form className='form' onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            minLength={3}
        />
        <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            minLength={3}
        />
        <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            minLength={3}
        />
        <input
            type="tel"
            placeholder="Phone Number"
            onChange={handleChange}
            name="phone"
            value={formData.phone}
            minLength={3}
            maxLength={10}
            pattern="[0-9]{10}"
        />
        <input
            type="text"
            placeholder="Place of Birth"
            onChange={handleChange}
            name="birthplace"
            value={formData.birthplace}
            minLength={3}
        />
        <input
            type="text"
            placeholder="Favorite Food"
            onChange={handleChange}
            name="food"
            value={formData.food}
            minLength={3}
        />
        <textarea 
            value={formData.about}
            placeholder="Tell us about yourself"
            onChange={handleChange}
            name="about"
            minLength={3}
        />
        <button disabled={isFormEmpty}>Submit</button>
    </form>
    <div>{badge}</div>
    </div>
    )
}