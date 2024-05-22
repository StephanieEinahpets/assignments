import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AddBookForm from './AddBookForm'
import Book from './Book'

export default function Wish() {
    const [books, setBooks] = useState([])



    useEffect(() => {
        getBooks()
        console.log(books)
      }, [])


    function getBooks() {
      axios.get("/api/wish")
        .then(res => setBooks(res.data))
        .catch(err => console.log(err))
   }

    function addBook(newBook){
      axios.post("/api/wish", newBook)
        .then(res => {
          setBooks(prevBooks => [...prevBooks, res.data])
        })
        .catch(err => console.log(err))
  }
  
    function deleteBook(bookId){
      axios.delete(`/api/wish/${bookId}`)
      .then(res => {
        setBooks(prevBooks => prevBooks.filter(book => book._id !== bookId))
      })
      .catch(err => console.log(err))
    }
  
    function editBook(updates, bookId){
      axios.put(`/api/wish/${bookId}`, updates)
        .then(res => {
          setBooks(prevBooks => prevBooks.map(book => book._id !== bookId ? book : res.data))
        })
        .catch(err => console.log(err))
  
    }

    
    // useEffect(() => {
    //     getBooks()
    //     console.log(books)
    //   }, [])
  
    // const test = books
    // console.log(test)

    return (
      <div className='container'>
        <h1>My Wish List</h1>
        <AddBookForm 
          submit={addBook}
          btnTxt="Add book"
        />
        <div>

        {/* {Array.isArray(books) && books.length > 0 ? (
        books.map(book => 
          <Book 
            {...book}
            key={book._id}
            deleteBook={deleteBook}
            editBook={editBook}
          />
        )
      ) : (
        <p>No books found.</p>
      )} */}
          {books.map(book => 
          <Book 
            {...book}
            key={book._id}
            deletebook={deleteBook}
            editBook={editBook}
          />)}
        </div>
      </div>
    )
  }