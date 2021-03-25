import React, { useState, useEffect } from 'react'
import Pagination from './components/Pagination'
import Posts from './components/Posts'
import axios from 'axios'
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  /////////////////////
  // Get current posts
  /////////////////////
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  // Remove all posts between first and last and gives us our 10 posts (postsPerPage. Change it to change posts per page)
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)



  ////////////////
  // Change pages
  ///////////////
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Pagination</h1>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      <Posts posts={currentPost} loading={loading}/>
    </div>
  )
}

export default App