import LoadingCard from '@/components/ui/LoadingCard';
import { BlogPost } from '@/types';
import React from 'react';

const blogLoadingPage = async() => {
    const res=await fetch(`http://localhost:5000/blogs`)
    const blogs=await res.json()
    return (
        <div>
            <div>
                {
                    blogs.map((blog:BlogPost)=>(
                        <LoadingCard key={blog.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default blogLoadingPage;