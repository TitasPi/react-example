import React from 'react'
import Post from './Post';

function List() {
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
    <Post post={post_obj} />
  )
  
  return (
    <>
      {postsElement}
    </>
  )
}

export default List
