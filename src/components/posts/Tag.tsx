type Tags = {
  name: string;
  color: string;
};

export const Tag = ({ name, color }: Tags) => {
  return (
    <span
      className={` ${
        color == "blue" ? "text-white bg-blue-500" : " bg-gray-200"
      } font-poppins font-extralight text-xs  px-2 py-1 rounded-full`}
    >
      {name}
    </span>
  );
};
