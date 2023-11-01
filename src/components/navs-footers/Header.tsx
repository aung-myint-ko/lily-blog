import { SearchDesktop, SearchMobile } from "@/components/all-assets/Search";
import Button from "@/components/buttons/Button";
import { useEffect, useState } from "react";

const Header = () => {
  const [showShadow, setShowShadow] = useState<boolean>(false);

  function scrollAndShowShadow() {
    let windowHeight = window.scrollY;
    if (windowHeight > 64) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollAndShowShadow);
  }, []);

  return (
    <header
      className={` sticky top-0 left-0 z-40 bg-slate-50 border-b border-b-gray-100 transition-all ease-in duration-200 ${
        showShadow && "shadow"
      }`}
    >
      <nav className=" max-w-[1440px] flex items-center justify-between px-4 lg:px-10 2xl:mx-auto py-3 md:py-5">
        <a href="/">
          <span className=" font-mooli text-2xl font-bold bg-gradient-to-r from-slate-950 to-blue-800 inline-block text-transparent bg-clip-text bg-300% animate-gradient ">
            Lily Blog
          </span>
        </a>
        <SearchDesktop />
        <div className=" flex justify-center items-center gap-3 sm:gap-5">
          <SearchMobile />
          <a href="/" className=" font-poppins hidden sm:block ">
            Sign In
          </a>
          <Button name="SingUp" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
