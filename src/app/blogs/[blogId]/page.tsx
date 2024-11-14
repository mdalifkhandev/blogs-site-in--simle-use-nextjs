import BlogDetails from "@/components/ui/BlogDetails";
import { BlogPost } from "@/types";

interface BlogId{
    params:{
        blogId:string
    }
}

export const generateStaticParams=async()=>{
    const res=await fetch(`http://localhost:5000/blogs`)
    const blog=await res.json()
    return blog.slice(0,3).map((blog:BlogPost)=>({
        blogId:blog.id
    }))
}

const BlogDetailsPage = async({params}:BlogId) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
        cache:'no-store'
      })
      const blog = await res.json()
      
    
    return (
        <div>
           <BlogDetails blog={blog} key={blog.id}/>
        </div>
    );
};

export default BlogDetailsPage;