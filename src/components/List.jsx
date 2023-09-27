import React from 'react'

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

  const postsElement = posts.map((post) => 
    <div key={post.id} className='card'>
      <p>{post.title}</p>
      <p>{post.content}</p>
    </div>
  )
  
  return (
    <>
      {postsElement}
    </>
  )
}

export default List
