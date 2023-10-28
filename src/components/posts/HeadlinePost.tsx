import Test1 from "@assets/test1.jpg";
import Avatar from "@/components/all-assets/Avatar";
import { Tag } from "@components/posts/Tag";
const HeadlinePost = () => {
  return (
    <article className="w-full h-full flex flex-col-reverse md:flex-row ">
      <div className=" md:max-w-sm lg:max-w-md xl:max-w-xs bg-gradient-to-tr from-cyan-50 to-blue-50 p-5">
        {/* Post Title */}
        <a href="/">
          <h1 className=" text-2xl font-bold tracking-wide font-rubik pb-3">
            How to Make Your Node.js Application Handle Millions of API Requests
          </h1>
        </a>

        <span className=" font-poppins flex items-center gap-x-1 pb-3">
          {/* Author Avatar */}
          <a href="/">
            <Avatar classname=" w-8 h-8" />
          </a>
          {/* Author Name */}
          <a href="/">
            <p className=" text-sm font-semibold text-gray-700">Robert Leo</p>
          </a>
          <span>.</span>
          {/* Post Published Date */}
          <p className=" text-sm text-gray-600">Mar 13</p>
        </span>

        {/* Post Short Desc */}
        <a href="/">
          <p className="font-poppins text-gray-800 pb-3">
            Passing props between React components is a common practice when
            building complex applications.
          </p>
        </a>

        {/* Category Tagname */}
        <span className=" flex gap-2 items-center">
          <Tag name="Web Development" color="bg-gray-200" />
          <p className=" font-poppins text-xs text-gray-600 ">4 min read</p>
        </span>
      </div>

      {/* Post Image */}
      <div className=" w-full">
        <a href="/">
          <img
            src={Test1}
            alt="test-1"
            className=" bg-slate-100 max-w-full h-full"
          />
        </a>
      </div>
    </article>
  );
};

export default HeadlinePost;
