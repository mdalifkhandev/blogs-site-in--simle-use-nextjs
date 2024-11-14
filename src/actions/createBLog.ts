"use server"

import { BlogPost } from "@/types";

export const createBLog=async(data:BlogPost)=>{
    const res=await fetch(`http://localhost:5000/blogs`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
        cache:'no-store'
    })

    const bloginfo=res.json()
    return bloginfo
}