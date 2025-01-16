import React, { useEffect } from 'react'
import { useRecoilCallback, useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { blogAtomFamily, blogAtomFamilyselector, getAllAtoms } from '../atoms/blogAtomFamily'
import Blogcard from '../Blogcard';
import { BACKEND_URL,jwt } from '../config';

export default function RenderBlog_AtomFamily() {
    const blogAtom_Selector_Loadable=useRecoilValueLoadable(blogAtomFamilyselector);
    console.log(blogAtom_Selector_Loadable.state)
    if(blogAtom_Selector_Loadable.state==="loading"){
        return <div>Loading...</div>
    }
    else if(blogAtom_Selector_Loadable.state==="hasError"){
        return <div> Error: ${blogAtom_Selector_Loadable.contents.message} </div>
    }

    const insertBlog=useRecoilCallback(
        ({set})=>(blog)=>{
            set(blogAtomFamily(id),blog)
        }
    )
    const handleClick=()=>{
        const blogs=blogAtom_Selector_Loadable.contents;
        console.log(blogs)
        blogs.forEach((blog)=>{
            insertBlog(blog)
        })
    }

    // const allblogs=useRecoilValue(getAllAtoms);
    return (
        <div>
            <button onClick={handleClick}>Display Todo</button>
        </div>
    )
}
