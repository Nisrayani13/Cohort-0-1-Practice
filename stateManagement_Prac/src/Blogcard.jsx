import React from 'react'

export default function Blogcard({title,content,id}) {
    console.log(`id:${id}  title:${title}    content:${content}`)
  return (
    <div className='bg-black'>
      <div className='text-white'> {title} </div>
      <div className='text-white'>{content} </div>
    </div>
  )
}
