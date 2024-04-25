/* eslint-disable react/no-unknown-property */
import "./banner.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div className="BannerContainer">
        <h1 className="BannerText">Our Shop</h1>
        <div class="Text">
          <Breadcrumb>
            <BreadcrumbItem active>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Shop</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
}
