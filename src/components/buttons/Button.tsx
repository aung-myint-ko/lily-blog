import { cn } from "@/libs/utils";

type ButtonType = {
  name: string;
  classname?: string;
};

const Button = ({ name, classname = "" }: ButtonType) => {
  return (
    <a
      href="/"
      className={cn(
        "block text-sm sm:text-base border border-gray-300 bg-blue-500 hover:bg-blue-600 text-white font-poppins rounded-full px-5 py-2",
        classname
      )}
    >
      {name}
    </a>
  );
};

export default Button;
