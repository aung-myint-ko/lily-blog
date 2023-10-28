import { cn } from "@/libs/utils";
import Avatar1 from "@assets/avatar1.jpg";

type AvatarType = {
  classname: string;
};
const Avatar = ({ classname = "" }: AvatarType) => {
  return (
    <div
      className={cn(
        " w-8 h-8 rounded-full shadow-lg border border-gray-100",
        classname
      )}
    >
      <img
        src={Avatar1}
        alt="avatar-1"
        className=" w-full h-full rounded-full"
      />
    </div>
  );
};

export default Avatar;
