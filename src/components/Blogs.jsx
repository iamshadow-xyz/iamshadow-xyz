import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="mt-8 text-left max-w-2xl m-auto">
      {/* Blog-1 */}

      <Link to="/blogs/who-am-i">
        <div className="border border-[#dadada30] p-4 mt-4">
          <h1 className="text-red-400 text-left font-bold">Who i am</h1>
          <p>iam shadow a curious boy from very remote area..</p>
        </div>
      </Link>

      {/* Blog-2 */}
      <Link to="/blogs/why-am-i-making-shadowspace">
        <div className="border border-[#dadada30] p-4 mt-4">
          <h1 className="text-red-400 text-left font-bold">
            Why am i building Shadowspace
          </h1>
          <p>the only reason is to create a global brand</p>
        </div>
      </Link>
    </div>
  );
};

export default Blogs;
