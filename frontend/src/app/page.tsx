import React from 'react'
import Landing from './blogsapp/landing'
import BlogPage from './blogsapp/blogpage/[id]/page'
import Blogs from './blogsapp/blogs/page'
import Navbar from '@/components/blogsnav/Navbar'

const page = () => {
  return (
    <>
    {/* <Navbar/> */}
     <BlogPage/>
     <Blogs/>
    
    </>
  )
}

export default page