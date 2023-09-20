import { SearchDesktop } from "@components/Search";
import SignUpButton from "@/components/buttons/SignUpButton";

const Header = () => {
  return (
    <nav className=" flex items-center justify-between lg:px-20 md:py-5 bg-slate-50 border-b border-b-gray-100">
      <a href="/">
        <h1 className=" font-mooli text-2xl font-bold bg-gradient-to-r from-slate-950 to-blue-800 inline-block text-transparent bg-clip-text bg-300% animate-gradient ">
          Lily Blog
        </h1>
      </a>
      <SearchDesktop />
      <div className=" flex justify-center items-center gap-5">
        <a href="/" className=" font-poppins ">
          Sign In
        </a>
        <SignUpButton />
      </div>
    </nav>
  );
};

export default Header;
