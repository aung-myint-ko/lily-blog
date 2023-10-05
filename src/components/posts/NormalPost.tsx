import Test1 from "@assets/test1.jpg";
import { SmallAvatar } from "../all-assets/Avatars";
import { UilHeart } from "@iconscout/react-unicons";
import { Tag } from "./Tag";

const NormalPost = () => {
  return (
    <article className=" max-w-[800px] ">
      <div className=" font-poppins flex items-center gap-x-5 sm:gap-x-7 pb-3">
        <span className=" flex items-center gap-x-1 ">
          {/* Author Avatar */}
          <a href="/">
            <SmallAvatar />
          </a>
          {/* Author Name */}
          <a href="/">
            <p className=" text-sm font-semibold text-gray-700">Robert Leo</p>
          </a>
          <span>.</span>
          {/* Post Published Date */}
          <p className=" text-sm text-gray-600">Mar 13</p>
        </span>
        <span className=" flex gap-x-2 items-center">
          <Tag name="Math" color="gray" />
          <p className=" font-poppins text-xs text-gray-600">4 min read</p>
        </span>
      </div>

      <section className=" flex">
        <div className=" w-[80%]">
          {/* Post Title */}
          <a href="/">
            <h1 className=" text-base sm:text-xl font-bold tracking-wide font-rubik pb-2">
              How to Make Your Node.js Application Handle Millions of API
              Requests
            </h1>
            {/* Post Description */}
            <p className=" hidden sm:block font-poppins text-gray-800 text-sm">
              After publishing a record number of articles on comparing
              performance of various technologies like Node.js, Deno, Bun, Rust,
              Go, Spring, Python, etc. performance of various technologies like
              Node.js, Deno, Bun, Rust,
            </p>
          </a>
        </div>

        <div className=" w-[20%] ">
          <a href="/">
            <img
              src={Test1}
              alt="test-1"
              className=" w-[70px] h-[70px] sm:w-32 sm:h-32 ml-auto"
            />
          </a>
        </div>
      </section>

      <section className="border-b py-3">
        <div className=" inline-block cursor-pointer group">
          <div className=" flex gap-2 ">
            <UilHeart className=" text-gray-400 group-hover:text-color1" />
            <span className=" font-poppins text-gray-400 group-hover:text-color1">
              0
            </span>
          </div>
        </div>
      </section>
    </article>
  );
};

export default NormalPost;
