import LatestBLogs from "@/components/latestBlogs/LatestBLogs";

const HomePage = async () => {

  const res = await fetch(`http://localhost:5000/blogs`,{
    // cache:'force-cache',
    next:{
      revalidate:30
    }
  })
  const blogs = await res.json()


  return (
    <>
      <LatestBLogs blogs={blogs} />
    </>
  );
};

export default HomePage;
