import { atom, selector } from "recoil";
import axios from "axios"
import { BACKEND_URL, jwt } from "./config";

// export interface Blog {
//     title: string;
//     content: string;
//     author: {
//       name: string;
//     };
//   }
// atom<Blog[]>

export const blogAtom=atom({
    key:"blogsAtom",
    default:selector({
        key:"blogsSelector",
        get:async ()=>{
            try{
                const response=await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                    headers:{
                        Authorization:`Bearer ${jwt}`
                    }
                })
                return response.data.posts
            }catch(error){
                console.log(`Error:${error.message}`);
                return [];
            }
        }
    })
})

