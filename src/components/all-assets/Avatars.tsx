import Avatar1 from "@assets/avatar1.jpg";
export const SmallAvatar = () => {
  return (
    <div className=" w-9 h-9 rounded-full shadow-lg border border-gray-100">
      <img
        src={Avatar1}
        alt="avatar-1"
        className=" w-full h-full rounded-full"
      />
    </div>
  );
};
