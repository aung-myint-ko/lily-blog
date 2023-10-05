import { RoughNotation } from "react-rough-notation";
import NormalPost from "@components/posts/NormalPost";

const RandomTopics = () => {
  return (
    <section className=" py-16 ">
      {/* Title div for posts you may like */}
      <div className=" flex justify-center items-center pb-12">
        <RoughNotation
          type="underline"
          show={true}
          padding={8}
          color="#1c1ca7"
          strokeWidth={2}
          order={1}
        >
          <h1 className=" inline-block font-rubik text-3xl tracking-wide font-bold">
            Posts You May Like
          </h1>
        </RoughNotation>
      </div>
      <div className=" flex flex-col items-center gap-y-8 ">
        <NormalPost />
        <NormalPost />
      </div>
    </section>
  );
};

export default RandomTopics;
