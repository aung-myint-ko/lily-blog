import DonateButton from "@components/buttons/DonateButton";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" bg-slate-200 border-t border-t-gray-100 ">
      <div className=" md:flex md:justify-between px-4 md:px-12 lg:px-16 pt-6 pb-5 md:pt-8 md:pb-7">
        <a href="/">
          <h1 className=" pb-3 md:pb-0 font-mooli text-2xl font-bold bg-gradient-to-r from-slate-950 to-blue-800 inline-block text-transparent bg-clip-text bg-300% animate-gradient ">
            Lily Blog
          </h1>
        </a>
        <p className="  pb-3 font-poppins md:text-center md:max-w-md lg:max-w-lg">
          Financial support is available for the long-term operation of Lily
          Blog productions.
        </p>
        <DonateButton />
      </div>

      <div className="  font-poppins text-xs sm:text-sm text-white bg-gradient-to-r from-slate-700 to-blue-900 px-4 md:px-12 lg:px-20 py-2">
        <p>Copyright © {year} Lily Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
