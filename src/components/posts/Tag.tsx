type Tags = {
  name: string;
  color: string;
};

export const Tag = ({ name, color }: Tags) => {
  return (
    <span
      className={` ${
        color == "blue" ? "text-white bg-blue-500" : "text-white bg-gray-500"
      } font-poppins font-extralight text-xs  px-2 py-1 rounded-full`}
    >
      {name}
    </span>
  );
};
