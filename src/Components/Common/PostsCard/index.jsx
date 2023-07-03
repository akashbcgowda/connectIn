import React from 'react'
import './index.scss';

export default function postsCard({posts}) {
  return <div className='posts-card'>
    <p className='status'>{posts.status}</p>
  </div> 
    
  
}

