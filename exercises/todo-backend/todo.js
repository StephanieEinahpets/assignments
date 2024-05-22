const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const todos = [
    {
        name: "dry cleaning",
        description: "need to pick up the dry cleaning on 5th",
        priority: 2,
        completed: false,
        _id: uuidv4()
    },
    {
        name: "change oil",
        description: "need to pick up items from the auto store and change my oil",
        priority: 3,
        completed: false,
        _id: uuidv4()
    },
    {
        name: "go grocery shopping",
        description: "need to pick up items from the auto store and change my oil",
        priority: 1,
        completed: true,
        _id: uuidv4()
    },
    {
        name: "christmas tree",
        description: "need to clean floors and put up the christmas tree",
        priority: 1,
        completed: false,
        _id: uuidv4()
    }
]

todoRouter.get("/", (req, res) => {
    res.send(todos)
})

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send("Successfully added new todo to the list")
})

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(todoBounty)
})

todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted todo")
})



module.exports = todoRouter