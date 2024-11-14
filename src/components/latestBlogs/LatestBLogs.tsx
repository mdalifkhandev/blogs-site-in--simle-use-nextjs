import { BlogPost } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBLogs = ({blogs}:{blogs:BlogPost[]}) => {
    return (
        <div className="w-[90%] mx-auto">
            <h1 className="text-4xl text-center my-5">Latest BLogs From <span className="text-accent"> Blogiz </span> </h1>
            <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
                Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-5">
                {
                    blogs.slice(0,2).map(blog=><LatestBlogCard key={blog.id} blog={blog}/>)
                }
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {
                    blogs.slice(2,5).map(blog=><BlogCard key={blog.id} blog={blog}/>)
                }
            </div>

        </div>
    );
};

export default LatestBLogs;