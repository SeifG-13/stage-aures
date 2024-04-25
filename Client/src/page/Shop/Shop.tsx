import "./Shop.css";
import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import Nav from "../../Components/notHomeNav/Nav";
import Footer from "../../Components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Shop() {
  return (
    <>
      <Nav />
      <Banner />
      <Cards />
      <Footer />
    </>
  );
}
