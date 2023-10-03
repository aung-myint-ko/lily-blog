import { RoughNotation } from "react-rough-notation";
import HeadlinePost from "@components/posts/HeadlinePost";
import SubHeadlinePost from "@components/posts/SubHeadlinePost";

const HotTopics = () => {
  return (
    <>
      <RoughNotation
        type="underline"
        show={true}
        padding={10}
        color="#1c1ca7"
        strokeWidth={2}
        order={1}
      >
        <h1 className=" inline-block font-rubik text-3xl tracking-wide font-bold pb-10">
          Hot Topics
        </h1>
      </RoughNotation>

      <div className=" grid grid-cols-2 xl:grid-cols-3 gap-4">
        <span className=" col-span-2 xl:row-span-2 xl:col-span-2">
          <HeadlinePost />
        </span>
        <span className=" col-span-2 md:col-span-1 xl:col-span-1 ">
          <SubHeadlinePost title="Hunt for Titanic sub and mortgage rates rise" />
        </span>
        <span className=" col-span-2 md:col-span-1 xl:col-span-1">
          <SubHeadlinePost title="Hunt for Titanic sub and mortgage rates rise Hunt for Titanic sub and mortgage rates rise" />
        </span>
      </div>
    </>
  );
};

export default HotTopics;
