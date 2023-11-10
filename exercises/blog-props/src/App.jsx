import { useState } from 'react'
import './App.css'
import Header from './Header'
import BlogList from './BlogList'
import Footer from './Footer'
import data from './data'


export default function App () {
  
  const blogPosts = data.map(blogPost => {
    return (
        <BlogList 
        title={blogPost.title}
        author={blogPost.author}
        subTitle={blogPost.subTitle}
        date={blogPost.date} 
        />
    )
    })

  return (
    <div>
      <Header />
      <section>
          {blogPosts}
      </section>
      <Footer />
    </div>
  )
}

