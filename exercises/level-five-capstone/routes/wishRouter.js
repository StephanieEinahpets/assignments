const express = require("express")
const wishRouter = express.Router()
const Book = require('../models/wish')


wishRouter.get("/", (req, res, next) => {
    Book.find((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

// bookRouter.get('/', async (req, res, next) => {
//     try {
//         const books = await Book.find()
//         return res.status(200).send(books)
//     } catch (err) {
//         res.status(500)
//         return next(err)
//     }
// })

wishRouter.post("/", (req, res, next) => {
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

wishRouter.post("/", (req, res, next) => {
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

wishRouter.delete("/:bookId", (req, res, next) => {
    Book.findOneAndDelete({_id: req.params.bookId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.title}`)
    })
})

wishRouter.put("/:bookId", (req, res, next) => {
    Book.findOneAndUpdate(
        {_id: req.params.bookId},
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

module.exports = wishRouter