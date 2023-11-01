import AboutAuthor from "@components/profile/AboutAuthor";
import ProfileHeader from "@components/profile/ProfileHeader";
import NormalPost from "../posts/NormalPost";
import PostsAboutNavigator from "./PostsAboutNavigator";

const ProfileContainer = () => {
  return (
    <section className=" w-full flex flex-col md:flex-row md:gap-x-3 lg:gap-x-10">
      <div className="  w-full">
        <ProfileHeader />
        <PostsAboutNavigator />
        <div className=" pt-10 flex flex-col gap-y-8">
          <NormalPost classname=" max-w-none" />
          <NormalPost classname=" max-w-none" />
          <NormalPost classname=" max-w-none" />
          <NormalPost classname=" max-w-none" />
          <NormalPost classname=" max-w-none" />
          <NormalPost classname=" max-w-none" />
        </div>
      </div>
      <div className=" hidden lg:block w-full md:w-auto md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px]">
        <AboutAuthor />
      </div>
    </section>
  );
};

export default ProfileContainer;
