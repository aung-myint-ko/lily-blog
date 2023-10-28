import Avatar from "@/components/all-assets/Avatar";

const NewPostHeader = () => {
  return (
    <header className=" max-w-[1440px] flex items-center justify-between  py-3 ">
      <a href="/">
        <span className=" font-mooli text-2xl font-bold bg-gradient-to-r from-slate-950 to-blue-800 inline-block text-transparent bg-clip-text bg-300% animate-gradient ">
          Lily Blog
        </span>
      </a>
      <div className=" flex items-center gap-5">
        <button className=" block text-sm sm:text-base px-4 py-1 border border-gray-300 bg-blue-500 hover:bg-blue-600 text-white font-poppins rounded-full">
          Publish
        </button>
        <Avatar classname="w-10 h-10" />
      </div>
    </header>
  );
};

export default NewPostHeader;
