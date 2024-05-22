const express = require("express")
const app = express()
const addProperty = require("./middleware")

app.use(express.json())


app.use(addProperty)


app.get("/", (req, res, next) => {
    const object = {
        animal: "bunny",
        ears: "long",
        body: "fluffy",
        nose: "cute"
    }
    console.log(req.body)
    res.send({...object, ...req.body})
})





app.listen(6666, () => {
    console.log("Server is running on port 6666")
})