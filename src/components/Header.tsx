import { SearchDesktop, SearchMobile } from "@components/Search";
import SignUpButton from "@/components/buttons/SignUpButton";

const Header = () => {
  return (
    <nav className=" flex items-center justify-between px-4 md:px-12 lg:px-20 py-3 md:py-5 bg-slate-50 border-b border-b-gray-100">
      <a href="/">
        <h1 className=" font-mooli text-2xl font-bold bg-gradient-to-r from-slate-950 to-blue-800 inline-block text-transparent bg-clip-text bg-300% animate-gradient ">
          Lily Blog
        </h1>
      </a>
      <SearchDesktop />
      <div className=" flex justify-center items-center gap-3 sm:gap-5">
        <SearchMobile />
        <a href="/" className=" font-poppins hidden sm:block ">
          Sign In
        </a>
        <SignUpButton />
      </div>
    </nav>
  );
};

export default Header;
