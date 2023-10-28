import Button from "@components/buttons/Button";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-slate-200 border-t border-t-gray-100 ">
        <div className=" max-w-[1440px] md:flex md:justify-between px-4 lg:px-10 2xl:mx-auto pt-6 pb-5 md:pt-8 md:pb-7">
          <a href="/">
            <span className=" pb-3 md:pb-0 font-mooli text-2xl font-bold bg-gradient-to-r from-slate-950 to-blue-800 inline-block text-transparent bg-clip-text bg-300% animate-gradient ">
              Lily Blog
            </span>
          </a>
          <p className="  pb-3 font-poppins md:text-center md:max-w-md lg:max-w-lg">
            Financial support is available for the long-term operation of Lily
            Blog productions.
          </p>
          <Button name="Donate" classname=" inline-block h-fit max-w-[100]" />
        </div>
      </div>
      <div></div>
      <div className="bg-gradient-to-r from-slate-700 to-blue-900">
        <div className=" max-w-[1440px] font-poppins text-xs sm:text-sm text-white px-4 md:px-12 lg:px-20 2xl:mx-auto py-2">
          <p>Copyright © {year} Lily Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
