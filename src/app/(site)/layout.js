
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export default function SiteLayout({ children }) {
  return (
    <>
      <PageLoader />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
