import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // console.log(product);

    const newCart = [...cart, product];
    setCart(newCart);
  };

  console.log(cart);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`
      );

      const data = await res.json();

      setProducts(data);
    };
    loadData();
  }, []);

  //   console.log(products);
  return (
    <div>
      <h1 className="text-center text-3xl py-12 font-extrabold">
        Total Products: {products.length}{" "}
      </h1>

      <div
        id="shop-container"
        className="bg-red-200 p-2 relative"
        style={{ display: "grid", gridTemplateColumns: "6fr 2fr" }}
      >
        <div
          id="product-container"
          className="grid mx-12 font-bold text-2xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-12 bg-blue-200 shadow-2xl rounded-2xl p-5"
        >
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div
          id="card-container"
          className="sticky max-h-96 text-center bg-blue-200 rounded-2xl my-12 shadow-2xl"
        >
          <h1 className="my-5 text-xl font-bold">Products summary </h1>
          <p className="text-lg font-bold">
            Selected Items: <span className="font-extrabold">{cart.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
