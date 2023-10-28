import Avatar from "../all-assets/Avatar";
import Button from "../buttons/Button";
import { Tag } from "../posts/Tag";

const ProfileHeader = () => {
  return (
    <section className="px-2 py-4 sm:p-5 bg-slate-50 border border-gray-100 rounded">
      <header className=" hidden sm:flex justify-normal items-end sm:gap-x-10 mb-2">
        <h1 className=" font-rubik text-xl sm:text-3xl font-bold ">
          Lucifer David
        </h1>
        <Button name="Follow" classname=" hidden sm:inline-block py-1 px-4" />
      </header>
      <div className=" flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4 ">
        <div className=" sm:max-w-[450px] lg:max-w-[550px] ">
          <header className=" flex sm:hidden justify-between  items-end mb-2">
            <h1 className=" font-rubik text-xl sm:text-3xl font-bold ">
              Lucifer David
            </h1>
            <Button
              name="Follow"
              classname=" hidden md:inline-block py-1 px-4"
            />
          </header>
          <p className=" font-poppins text-sm sm:text-base text-gray-600 ">
            Technical Standards Lead at Polestar | Father | Husband
          </p>

          <div className=" mt-3">
            <h1 className=" text-lg sm:text-xl font-rubik mb-2">Interests</h1>
            <div>
              <Tag name="Tech" color="bg-blue-200" />
              <Tag name="Bussiness" color="bg-blue-200" />
              <Tag name="Photography" color="bg-blue-200" />
              <Tag name="Tech" color="bg-blue-200" />
              <Tag name="Tech" color="bg-blue-200" />
              <Tag name="Bussiness" color="bg-blue-200" />
              <Tag name="Photography" color="bg-blue-200" />
              <Tag name="Tech" color="bg-blue-200" />
              <Tag name="Tech" color="bg-blue-200" />
              <Tag name="Bussiness" color="bg-blue-200" />
              <Tag name="Photography" color="bg-blue-200" />
              <Tag name="Tech" color="bg-blue-200" />
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <Avatar classname=" w-20 h-20 sm:w-36 sm:h-36" />
          <Button name="Follow" classname=" inline-block sm:hidden py-1 px-4" />
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
