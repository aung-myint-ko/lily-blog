import { cn } from "@/libs/utils";

type Tags = {
  name: string;
  color: string;
};

export const Tag = ({ name, color }: Tags) => {
  return (
    <span
      className={cn(
        "inline-block font-poppins font-extralight text-xs px-2 py-1 mr-1 mb-1 rounded-full cursor-pointer bg-opacity-70 hover:bg-opacity-95",
        color
      )}
    >
      {name}
    </span>
  );
};
