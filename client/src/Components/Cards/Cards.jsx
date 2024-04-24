import "./Cards.css";
import SideBar from "./../SideBar/SideBar";
import Pagination from "./../Pagination/Pagination";

export default function Cards() {
  const itemList = [
    {
      id: "1",
      imgUrl: "./assert/freshlime.png",
      title: "freshlime",
      price: "$38,00",
      reducedPrice: "$45,00",
    },
    {
      id: "2",
      imgUrl: "./assert/Chocolate Muffin.png",
      title: "Chocolate Muffin",
      price: "$28.00",
      reducedPrice: "",
    },
    {
      id: "3",
      imgUrl: "./assert/Burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "$45.00",
    },
    {
      id: "4",
      imgUrl: "./assert/burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
    {
      id: "5",
      imgUrl: "./assert/burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
    {
      id: "6",
      imgUrl: "./assert/Burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
    {
      id: "7",
      imgUrl: "./assert/Burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
    {
      id: "8",
      imgUrl: "./assert/Burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
    {
      id: "9",
      imgUrl: "./assert/Burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
    {
      id: "10",
      imgUrl: "./assert/Burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
    {
      id: "11",
      imgUrl: "./assert/Burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
    {
      id: "12",
      imgUrl: "./assert/Burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
    {
      id: "13",
      imgUrl: "./assert/Burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
    {
      id: "14",
      imgUrl: "./assert/Burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
    {
      id: "15",
      imgUrl: "./assert/Burgir.png",
      title: "Burger",
      price: "$21.00",
      reducedPrice: "",
    },
  ];
  return (
    <div className="container">
      <div className="d-flex flex-row bd-highlight my-3">
        <div className="p-2 bd-highlight">
          <label id="L1">
            Sort By :{" "}
            <select name="Sort">
              <option value="Newfeed" autoFocus>
                Newest
              </option>
            </select>
          </label>
        </div>
        <div className="p-2 bd-highlight">
          <label id="L1">
            Show :{" "}
            <select name="Show">
              <option value="blank">Default</option>
            </select>
          </label>
        </div>
      </div>
      <div className="ShopList">
        <div className="cards">
          {itemList.map((item) => {
            return (
              <div key={item.id} className="col-sm">
                <div className="cardcontainer">
                  <img alt="" src={item.imgUrl} />
                  <h1 className="productname">{item.title}</h1>
                  <p className="price">
                    {item.price}
                    <s className="reducedPrice">{item.reducedPrice}</s>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <SideBar className="SideBar" />
      </div>
      <div className="center">
        <Pagination />
      </div>
    </div>
  );
}
