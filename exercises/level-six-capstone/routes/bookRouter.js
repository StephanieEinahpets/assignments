const express = require("express")
const bookRouter = express.Router()
const Book = require('../models/books')


bookRouter.get('/', async (req, res, next) => {
    try {
        const books = await Book.find()
        return res.status(200).send(books)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//get books by user ID
bookRouter.get("/user", (req, res, next) => {
    Book.find({ user: req.auth._id }, (err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

bookRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    console.log(req.user)
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

// bookRouter.post("/wish", (req, res, next) => {
//     const newBook = new Book(req.body)
//     newBook.save((err, savedBook) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(savedBook)
//     })
// })

bookRouter.delete("/:bookId", (req, res, next) => {
    Book.findOneAndDelete({_id: req.params.bookId, user: req.auth._id}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.title}`)
    })
})

bookRouter.put("/:bookId", (req, res, next) => {
    Book.findOneAndUpdate(
        {_id: req.params.bookId, user: req.auth._id},
        req.body,
        {new: true}, 
        (err, updatedbook) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedbook)
        }
        )
})

module.exports = bookRouter