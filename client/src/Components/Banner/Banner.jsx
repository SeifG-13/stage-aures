/* eslint-disable react/no-unknown-property */
import "./banner.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function Banner() {
  return (
    <>
      <div className="BannerContainer">
        <h1 className="BannerText">Our Shop</h1>
        <div class="Text">
          <Breadcrumb>
            <BreadcrumbItem active>
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>Shop</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
}
