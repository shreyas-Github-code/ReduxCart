import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://m.media-amazon.com/images/I/61odR70rgML._SY695_.jpg";

  const img3 = "https://m.media-amazon.com/images/I/81dT7CUY6GL._SX679_.jpg"

  const img4 = "https://m.media-amazon.com/images/I/31IhYwtLhPL._SX300_SY300_QL70_FMwebp_.jpg"
  const img5="https://m.media-amazon.com/images/I/51t6c5t0nDL._SX679_.jpg"
  const img6="https://m.media-amazon.com/images/I/41aX1QKmV2L._SX300_SY300_QL70_FMwebp_.jpg"

  const img7="https://m.media-amazon.com/images/I/5167KTky5aL._SX679_.jpg"
  const img8="https://m.media-amazon.com/images/I/41bckF0Tk+L._AC_SR400,600_.jpg"
  const img9="https://m.media-amazon.com/images/I/41YE-K-6gJL._AC_SR400,600_.jpg"
  const img10="https://m.media-amazon.com/images/I/61CjYtVb7cL._SX679_.jpg"

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Apple iPhone 15 Pro Max",
      price: 1000,
      imgSrc: img3,
      id: "sdjfdlaajsdbhjabhsjdfdfiphone",
    },
    {
      name: "Apple Watch SE",
      price: 630,
      imgSrc: img4,
      id: "sdjfdlaajsdbhjabhsjdfdfiwatchSE",
    },
    {
      name: "GoPro-HERO11",
      price: 750,
      imgSrc: img5,
      id: "sdjfdlaajsdbhjabhsjdfdfgoPro",
    },
    {
      name: "E MOTORAD - RIDE",
      price: 340,
      imgSrc: img6,
      id: "sdjfdlaajsdbhjabhsjdfdfEride",
    },
    {
      name: "Casio G-Shock Analog-Digital ",
      price: 110,
      imgSrc: img7,
      id: "sdjfdlaajsdbhjabhsjdfdfGshock",
    },
    {
      name: "JBL Go 3",
      price: 260,
      imgSrc: img8,
      id: "sdjfdlaajsdbhjabhsjdfdfi",
    },
    {
      name: "JBL Tune 510BT",
      price: 420,
      imgSrc: img9,
      id: "sdjfdlaajsdbhjabhsjdfdfir",
    },
    {
      name: "Apple 2022 iPad Air M1",
      price: 650,
      imgSrc: img10,
      id: "sdjfdlaajsdbhjabhsjdfdfiwre",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
