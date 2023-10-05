import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <section className="px-4 md:px-12 lg:px-16 py-16">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default AppLayout;
