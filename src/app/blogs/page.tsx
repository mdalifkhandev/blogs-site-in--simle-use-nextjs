"use client"

import BlogCard from '@/components/ui/BlogCard';
import { useGetBlogPostQuery } from '@/redux/api/baseApi';
import { BlogPost } from '@/types';
import React from 'react';

const AllBlogs = () => {

    // const res = await fetch(`http://localhost:5000/blogs`,{
    //     cache:'no-store',

    //   })
    //   const blogs:BlogPost[] = await res.json()

    const { data, isLoading, isError, error } = useGetBlogPostQuery('')
    const blogs: BlogPost[] = data

    return (
        <div className='w-[90%] mx-auto'>
            <h1 className="text-4xl text-center my-5">All BLogs From <span className="text-accent"> Blogiz </span> </h1>
            <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
                Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.
            </p>
            <div className="grid grid-cols-3 gap-4 my-5 mt-5">
                {
                    blogs?.map(blog => <BlogCard key={blog.id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default AllBlogs;