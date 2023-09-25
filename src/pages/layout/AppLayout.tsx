import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <section>
      <Header />
      <div className="py-10"></div>
      <Outlet />
      <Footer />
    </section>
  );
};

export default AppLayout;
