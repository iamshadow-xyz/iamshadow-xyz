import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div className="text-left py-4 px-10 max-w-2xl m-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Latest Post</h1>
        <Link to="/blogs">
          <h1 className="font-bold">See all Posts</h1>
        </Link>
      </div>
      <div className="border border-[#dadada30] p-4 mt-4">
        <h1 className="text-red-400 text-left font-bold">Who i am</h1>
        <p>iam shadow a curious boy from very remote area..</p>
      </div>
      <div className="border border-[#dadada30] p-4 mt-4">
        <h1 className="text-red-400 text-left font-bold">
          Why am i building Shadowspace
        </h1>
        <p>the only reason is to create a global brand</p>
      </div>
    </div>
  );
};

export default Blog;
