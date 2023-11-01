import Footer from "@/components/navs-footers/Footer";
import Header from "@/components/navs-footers/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <section className=" max-w-[1440px] px-4  lg:px-10 2xl:mx-auto py-10 sm:py-16">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default AppLayout;
