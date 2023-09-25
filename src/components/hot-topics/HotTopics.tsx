import { RoughNotation } from "react-rough-notation";
import HeadlinePost from "@components/posts/HeadlinePost";

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

      <div className=" grid grid-cols-3">
        <span className=" col-span-3 lg:col-span-2">
          <HeadlinePost />
        </span>
      </div>
    </>
  );
};

export default HotTopics;
