const express = require("express")
const app = express()

app.use(express.json())

const inventory = [
    {
        name: "raspberries",
        type: "food",
        price: 400,
    },{
        name: "sundress",
        type: "clothing",
        price: 2500,
    },{
        name: "yo-yo",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "bomber jacket",
        type: "clothing",
        price: 800,
    },{
        name: "caramel",
        type: "food",
        price: 200,
    },{
        name: "cookies",
        type: "food",
        price: 100,
    },{
        name: "ice cream",
        type: "food",
        price: 500,
    }
]


app.get("/inventory", (req, res) => {
    const { type, minPrice = 0, maxPrice = 1000000 } = req.query

    if (type) {
        const filteredInventoryByType = inventory.filter(item => item.type === type)
        res.send(filteredInventoryByType)
    } else {
        const filteredInventoryByPrice = inventory.filter(item => item.price >= minPrice && item.price <= maxPrice)
        res.send(filteredInventoryByPrice)
    }
})


app.listen(6666, () => {
    console.log("Server is running on port 6666")
})