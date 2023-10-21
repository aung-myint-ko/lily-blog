const TitleField = () => {
  return (
    <div className=" font-rubik flex items-center gap-5 pt-2 pb-3 h-14">
      <span className=" text-3xl text-gray-400 ">Title</span>
      <span className=" w-[1px] h-full bg-gray-300"></span>

      <input
        className=" w-full outline-none text-3xl"
        type="text"
        name="title"
        placeholder="Enter Your Post Title"
      />
    </div>
  );
};

export default TitleField;
