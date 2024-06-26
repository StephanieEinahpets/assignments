import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'
import AddBountyForm from './components/addBountyForm'

function App() {

  const [bounties, setBounties] = useState([])


  function getBounties() {
    axios.get("/bounty")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
 }

  function addBounty(newBounty){
    axios.post("/bounty", newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
}

  function deleteBounty(bountyId){
    axios.delete(`/bounty/${bountyId}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId){
    axios.put(`/bounty/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))

  }


  useEffect(() => {
    getBounties()
  }, [])


  return (
    <div>
      <h1>Bounty Hunter</h1>
      <AddBountyForm 
        submit={addBounty}
        btnTxt="Add Bounty"
      />
      <div className="container">
        {bounties.map(bounty => 
        <Bounty 
          {...bounty}
          key={bounty._id}
          deleteBounty={deleteBounty}
          editBounty={editBounty}
        />)}
      </div>
    </div>
  )
}

export default App
