import React from 'react'
import './ThirdHome.css'
import girlpic from '/Images/girl drinking juice.webp'

const ThirdHome = () => {
  return (
    <>
    <div className='main-third-content-containor'>
      <div className='third-content-heading-containor'><div className='blog-heading'>Blogs<div className='underline-blog'></div></div></div>
      <div className='third-content-containor'>
        <div className='leftBlog blog-1'><div className='blog-1-details'>Fazeen and friends in Frutiees Blog</div></div>
        <div className='rightBlog'>
        <div className='blog-2'><div className='blog-2-details'>Its about juice truck in kandy town Vlog</div></div>
        <div className='blog-3'><div className='blog-3-details'>Here its Vlog about fresh juices with Haania</div></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ThirdHome
