

import { useState } from 'react'
import axios from 'axios'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    const postData = { userId, title, body }
    
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      console.log(response)
      console.log('Data sent:', postData)
      // Form clear karne ke liye
      setUserId('')
      setTitle('')
      setBody('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid black' }}>
      <form onSubmit={submitHandler}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={userId}
            placeholder="User ID"
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            rows="4"
            cols="50"
            value={body}
            placeholder="Body"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}