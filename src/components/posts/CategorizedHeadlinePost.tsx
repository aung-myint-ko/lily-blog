import Test1 from "@assets/test1.jpg";

type Props = {
  title: string;
  category: string;
  image: string;
};

const CategorizedHeadlinePost = ({ title, category, image = Test1 }: Props) => {
  return (
    <article className=" max-w-md w-full flex justify-between">
      <div className=" max-w-[250px]">
        {/* Post Title */}
        <h1 className=" font-poppins font-semibold uppercase text-color1 pb-2">
          {category}
        </h1>
        {/* Post Title */}
        <a href="/">
          <h1 className=" text-lg font-bold font-rubik">{title} </h1>
        </a>
      </div>
      <picture className=" w-[100px] h-[100px] ">
        <img src={image} alt="test-1" className=" bg-slate-100 w-full h-full" />
      </picture>
    </article>
  );
};

export default CategorizedHeadlinePost;
