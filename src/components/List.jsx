import React from 'react'
import Post from './Post';
import axios from 'axios';

function List() {
  // https://api.publicapis.org/random

  axios.get('https://api.publicapis.org/random')
    .then(reponse => {
      console.log(reponse.data);
    });

  const posts = [
    {
      'id': 1,
      'title': 'Hello world',
      'content': 'Kazkas kitas'
    },
    {
      'id': 2,
      'title': 'Hello code',
      'content': 'Kazkas kkkkkkkkk'
    }
  ];

  const postsElement = posts.map((post_obj) => 
    <Post key={post_obj.id} post={post_obj} />
  )
  
  return (
    <>
      {postsElement}
    </>
  )
}

export default List
