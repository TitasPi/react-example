import React, { useEffect, useState } from 'react'
import Post from './Post';
import axios from 'axios';

function List() {
  // https://api.publicapis.org/random

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get('https://api.publicapis.org/entries?category=books')
    .then(response => {
      console.log(response.data);
      setPosts(response.data.entries);
    });
  }, []);

  return (
    <>
    
      {/* {
        (post) ? <Post post={post.entries[0]} /> : ''
      } */}

      {
        (posts) ? posts.map(post => (
          <Post post={post} />
        )) : 'Loading...'
      }  
    </>
  )
}

export default List
