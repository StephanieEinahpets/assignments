const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const bounties = [
    {
        firstName: "Jesse",
        lastName: "James",
        living: false,
        bounty: 5000,
        type: "sith",
        _id: uuidv4()
    },
    {
        firstName: "Billy",
        lastName: "The Kid",
        living: false,
        bounty: 6000,
        type: "sith",
        _id: uuidv4()
    },
    {
        firstName: "Stephanie",
        lastName: "Blackman",
        living: true,
        bounty: 2000,
        type: "jedi",
        _id: uuidv4()
    },
    {
        firstName: "Peter",
        lastName: "Quill",
        living: true,
        bounty: 8000,
        type: "jedi",
        _id: uuidv4()
    }
]

bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send("Successfully added new bounty to the database")
})

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty")
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})


//test json
// {
//     "firstName": "Carmen",
//     "lastName": "SanDiego",
//     "living": false,
//     "bounty": 10000,
//     "type": "jedi"
//  }

module.exports = bountyRouter