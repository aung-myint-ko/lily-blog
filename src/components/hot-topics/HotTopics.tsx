import { RoughNotation } from "react-rough-notation";
import HeadlinePost from "@components/posts/HeadlinePost";
import SubHeadlinePost from "@components/posts/SubHeadlinePost";
import CategorizedHeadlinePost from "@components/posts/CategorizedHeadlinePost";

const HotTopics = () => {
  return (
    <section>
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

      <div className=" grid grid-cols-2 xl:grid-cols-3 gap-14 xl:gap-6">
        {/* Headline & Subline Post Layout */}
        <span className=" grid grid-cols-1 md:grid-cols-2 col-span-2 gap-4">
          <span className=" md:col-span-2">
            <HeadlinePost />
          </span>
          <SubHeadlinePost title="Hunt for Titanic sub and mortgage rates rise" />
          <SubHeadlinePost title="Hunt for Titanic sub and mortgage rates rise" />
        </span>

        {/* Headline & Subline Post Layout */}
        <span className=" flex flex-col items-center gap-4 col-span-2 xl:col-span-1  ">
          <CategorizedHeadlinePost
            category="Entertainment"
            title="Here Are the 15 New Books You Should Read in October"
            image=""
          />
          <CategorizedHeadlinePost
            category="Tech"
            title="What is the 45-day funding bill and what does it cover?"
            image=""
          />
          <CategorizedHeadlinePost
            category="Movie"
            title="Here Are the 15 New Books You Should Read in October"
            image=""
          />
          <CategorizedHeadlinePost
            category=" Politics"
            title="Congress Avoided a Government Shutdown—What Happens Next?"
            image=""
          />
          <CategorizedHeadlinePost
            category=" Politics"
            title="Congress Avoided a Government Shutdown—What Happens Next?"
            image=""
          />
        </span>
      </div>
    </section>
  );
};

export default HotTopics;
