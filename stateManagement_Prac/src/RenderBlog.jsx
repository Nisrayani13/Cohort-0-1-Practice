import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValueLoadable } from 'recoil'
import { blogAtom } from './blogAtom'
import { BACKEND_URL } from './config'
import Blogcard from './Blogcard'
import axios from "axios";
import { useEffect,useState } from 'react'

export default function RenderBlog() {
  const blogsAtomLoadable= useRecoilValueLoadable(blogAtom);
  if(blogsAtomLoadable.state==="loading"){
    return <div>Loading...</div>
  }else if(blogsAtomLoadable.state==="hasError"){
    return <div>Error: ${blogsAtomLoadable.contents.message} </div>
  }
  
  return <div>
    {blogsAtomLoadable.contents.map((blog)=>{
      return <Blogcard title={blog.title} content={blog.content} id={blog.id}></Blogcard>
    })}
  </div>
  // return (
  //   <div>
  //     {blogsAtomLoadable.state==="loading" ?<div>Loading...</div>:
  //       <div>
  //         {console.log("inside return value of div")}
  //         {blogs.map((blog)=>{
  //           return <Blogcard title={blog.title} content={blog.content} id={blog.id}></Blogcard>
  //         })}
  //       </div>
  //     }
  //   </div>
  // )
}
