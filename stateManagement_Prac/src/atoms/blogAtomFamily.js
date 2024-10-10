import { atomFamily, selector } from "recoil";
import axios from "axios";
import { BACKEND_URL,jwt } from "../config";

export const blogAtomFamily=atomFamily({
    key:"blogAtomFamily",
    default:(id)=>({
        id:id,
        title: '',
        content: '',
        author: { name: '' },
    })
})

export const blogAtomFamilyselector=selector({
    key:"blogAtomFamilyselector",
    get:async ()=>{
        const response=await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })
        console.log(response.data.posts)
        return response.data.posts
    }
})

// selector to select all atoms of a atomFamily
export const getAllAtoms=selector({
    key:"getAllAtoms",
    get:({get})=>{
        const blogsIds=get(blogAtomFamily);
        return blogsIds.map((id)=>get(blogAtomFamily(id)))
    }
})