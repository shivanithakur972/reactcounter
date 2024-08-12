import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DataFetching() {
    const [ posts, setPosts] = useState ([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            setPosts(response.data); // update the state with the fetched data
          })
          .catch(error => {
            console.error(error);
          });
      }, );
  return (
    <div>
    <h1>Posts</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}
