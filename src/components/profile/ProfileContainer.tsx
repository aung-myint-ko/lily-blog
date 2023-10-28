import React from "react";
import AboutAuthor from "@components/profile/AboutAuthor";
import ProfileHeader from "@components/profile/ProfileHeader";
import NormalPost from "../posts/NormalPost";

const ProfileContainer = () => {
  return (
    <section className=" w-full flex flex-col md:flex-row md:gap-x-3 lg:gap-x-8">
      <div className="  w-full">
        <ProfileHeader />
        <div className=" sm:px-5 pt-10 flex flex-col gap-y-8">
          <NormalPost />
          <NormalPost />
          <NormalPost />
          <NormalPost />
          <NormalPost />
          <NormalPost />
        </div>
      </div>
      <div className=" hidden lg:block w-full md:w-auto md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px]">
        <AboutAuthor />
      </div>
    </section>
  );
};

export default ProfileContainer;
