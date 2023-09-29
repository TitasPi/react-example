import React, { useEffect, useState } from 'react'
import Post from './Post';
import axios from 'axios';

function List() {
  // https://api.publicapis.org/random

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('https://api.publicapis.org/random')
    .then(response => {
      console.log(response.data);
      setPost(response.data);
    });
  }, []);

  return (
    <>
      {
        (post) ? <Post post={post.entries[0]} /> : ''
      }
      
    </>
  )
}

export default List
