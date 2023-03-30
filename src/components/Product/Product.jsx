import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = (props) => {
  // console.log(props.product);

  const { id, img, name, price, ratings, seller } = props.product;

  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="card  bg-cyan-600 shadow-2xl">
      <figure className="w-full">
        <img
          src={img ? img : `No Picture Found`}
          className=""
          alt="No Picture Found"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold">{name}</h2>
        <p className="font-bold">Price: ${price}</p>
        <p className="font-normal">
          Manufacturer: <span className="font-bold">{seller}</span>
        </p>
        <p className="font-normal">
          Rating: <span className="font-bold">{ratings}</span>/5
        </p>
      </div>
      <div className="card-actions justify-end">
        <button
          onClick={() => handleAddToCart(props.product)}
          className="btn btn-primary hover:btn-success w-full rounded-lg"
        >
          Add to Cart
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;
