import { UilSearch } from "@iconscout/react-unicons";
export const SearchDesktop = () => {
  return (
    <div className=" hidden sm:block relative sm:w-[300px] md:w-[350px] h-10 rounded-full border border-gray-300 bg-white">
      <input
        className=" px-3 w-[90%] h-full outline-none border-none rounded-full placeholder:font-poppins placeholder:text-sm"
        type="text"
        name="search"
        placeholder="Search Lily"
        autoComplete="off"
      />
      <span className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-1 rounded-full p-[6px] bg-blue-100 ">
        <UilSearch size={20} />
      </span>
    </div>
  );
};

export const SearchMobile = () => {
  return (
    <>
      <span className=" cursor-pointer rounded-full p-[8px] bg-blue-100 sm:hidden ">
        <UilSearch size={24} />
      </span>
    </>
  );
};
