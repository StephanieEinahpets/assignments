import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import AddBookForm from './AddBookForm'
import Book from './Book'
import { UserContext } from '../context/UserProvider'

export default function Wish() {
    const [books, setBooks] = useState([])

    const {user: {username}, userAxios} = useContext(UserContext)


    useEffect(() => {
        getBooks()
        console.log(books)
      }, [])


    function getBooks() {
      userAxios.get("/api/wish/user")
        .then(res => setBooks(res.data))
        .catch(err => console.log(err))
   }

    function addBook(newBook){
      userAxios.post("/api/wish", newBook)
        .then(res => {
          setBooks(prevBooks => [...prevBooks, res.data])
        })
        .catch(err => console.log(err))
  }
  
    function deleteBook(bookId){
      userAxios.delete(`/api/wish/${bookId}`)
      .then(res => {
        setBooks(prevBooks => prevBooks.filter(book => book._id !== bookId))
      })
      .catch(err => console.log(err))
    }
  
    function editBook(updates, bookId){
      userAxios.put(`/api/wish/${bookId}`, updates)
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
        <h1>{username}'s Wish List</h1>
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