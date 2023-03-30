import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Product from "../Product/Product";

import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    let newCart = [];

    const exitedProducts = cart.find((pd) => pd.id === product.id);

    if (!exitedProducts) {
      product.quantity = 1;

      newCart = [...cart, product];
    } else {
      exitedProducts.quantity += 1;
      const remainingProducts = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remainingProducts, exitedProducts];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`products.json`);
      const data = await res.json();
      setProducts(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();

    const savedCart = [];
    // console.log(storedCart);
    for (const id in storedCart) {
      // console.log(storedCart[id]);

      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];

        addedProduct.quantity = quantity;

        savedCart.push(addedProduct);
      }
    }

    setCart(savedCart);
  }, [products]);

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
          className="sticky top-10 right-7 max-h-96 text-center bg-blue-200 rounded-2xl my-12 shadow-2xl"
        >
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
