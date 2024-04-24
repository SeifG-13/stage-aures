import "./P404.css";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Menu() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="404">
        <h1 className="h1">404</h1>
        <p className="text1">Oops! Look likes something going wrong</p>
        <p className="text2">
          Page Cannot be found! we’ll have it figured out in no time.
          <br />
          Menwhile, cheek out these fresh ideas:
        </p>
        <button className="Homebutton" onclick="#">
          <div className="buttext">Go to home</div>
        </button>
      </div>
      <Footer />
    </>
  );
}
