import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AddBookForm from './AddBookForm'
import Book from './Book'

export default function Shelf() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks()
      }, [])


    function getBooks() {
      axios.get("/api/shelf")
        .then(res => setBooks(res.data))
        .catch(err => console.log(err))
   }
  
    function addBook(newBook){
      axios.post("/api/shelf", newBook)
        .then(res => {
          setBooks(prevBooks => [...prevBooks, res.data])
        })
        .catch(err => console.log(err))
  }
  
    function deleteBook(bookId){
      axios.delete(`/api/shelf/${bookId}`)
      .then(res => {
        setBooks(prevBooks => prevBooks.filter(book => book._id !== bookId))
      })
      .catch(err => console.log(err))
    }
  
    function editBook(updates, bookId){
      axios.put(`/api/shelf/${bookId}`, updates)
        .then(res => {
          setBooks(prevBooks => prevBooks.map(book => book._id !== bookId ? book : res.data))
        })
        .catch(err => console.log(err))
  
    }

  
    return (
      <div className='container'>
        <h1>My Shelf</h1>
        <AddBookForm 
          submit={addBook}
          btnTxt="Add book"
        />
        <div>
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