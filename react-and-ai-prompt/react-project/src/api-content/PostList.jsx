


import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PostForm } from './PostForm'

export const PostList = () => {
  const [posts, setPosts] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setErrorMessage('Error fetching posts')
      }
    }
    
    fetchPosts() // Function ko call karna zaroori hai
  }, [])

  return (
    <div style={{ margin: '20px', border: '1px solid black', padding: '20px', width: '100%' }}>
      <h2>List of posts</h2>
      <PostForm />
      {posts.length > 0 ? posts.map(post => (
        <div key={post.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )) : null}
      {errorMessage ? <div style={{ color: 'red' }}>{errorMessage}</div> : null}
    </div>
  )
}
