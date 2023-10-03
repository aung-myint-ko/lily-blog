import Test2 from "@assets/test2.jpg";

type Props = {
  title: string;
};

const SubHeadlinePost = ({ title }: Props) => {
  return (
    <article>
      <a href="/">
        <div className=" xl:h-[220px]">
          <img src={Test2} alt="test-1" className=" w-full h-full" />
        </div>
      </a>

      <div className=" pt-3">
        <a href="/" className="pb-1">
          <h1 className=" text-lg font-bold font-rubik">{title} </h1>
        </a>
        <span className=" font-poppins flex items-center gap-x-1">
          {/* Author Name */}
          <a href="/">
            <p className=" text-sm font-semibold text-gray-700">Robert Leo</p>
          </a>
          <span>.</span>
          {/* Post Published Date */}
          <p className=" text-sm text-gray-600">Mar 13</p>
        </span>
      </div>
    </article>
  );
};

export default SubHeadlinePost;
