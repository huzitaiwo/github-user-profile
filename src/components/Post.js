import './Post.css'

import React from 'react'

export default function Post() {
  return (
    <div>
      {data.map(post => (
        <div key={post.id}>
          <small>{post.id}</small>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
