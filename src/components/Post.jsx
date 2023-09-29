import React from 'react'

function Post({ post }) {
  return (
    <div className='card'>
      <p>{post.API}</p>
      <p>{post.Description}</p>
    </div>
  )
}

export default Post
