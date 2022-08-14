import { faker } from "@faker-js/faker";
import React, { useContext, useState } from "react";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import { Cart } from "./../Context";

faker.seed(100);

const Home = ({}) => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(640, 480, true),
  }));

  const [products] = useState(productArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default Home;
