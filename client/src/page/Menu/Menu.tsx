import "./Menu.css";
import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Menu() {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Footer />
    </>
  );
}
