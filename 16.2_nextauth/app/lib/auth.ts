import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import { pages } from "next/dist/build/templates/app-page";

export const NEXT_AUTH={
    providers:[
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "username", type: "text", placeholder: "username" },
                password: { label:"password", type:"password"}
            },
            async authorize(credentials, req){
                return {
                    id:"1",
                    name:"Nisrayani",
                    email:"nishu@mknuo.com"
                }
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        signIn: ({user}:any)=>{
            if(user.email=="hijkjxnschjedg"){
                return false
            }
            return true
        },
        jwt: ({token}: any)=>{
            console.log(token);
            token.userId=token.sub
            return token
        },
        session: ({session, token, user}: any)=>{
            if(session && session.user){
                session.user.id=token.userId
            }
            console.log(session)
            return session
        }
    },
    pages:{
        signIn:"/signin"
    }
}


