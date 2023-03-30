import React from "react";

const Cart = ({ cart }) => {
  //   console.log(cart);
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total += product.price;
    totalShipping += product.shipping;
  }
  // console.log(totalShipping);

  const tax = (total * 7) / 100;
  return (
    <div className="mx-10">
      <h1 className="my-5 text-xl font-bold underline"> Order Summary </h1>

      <div className="text-left">
        {" "}
        <p className="text-xl font-bold my-3">
          Selected Items:{" "}
          <span className="text-red-500">
            {""}
            {cart.length}
          </span>
        </p>
        <p className="text-xl font-bold my-3">
          Total Price: $ <span className="text-red-500">{total}</span>{" "}
        </p>
        <p className="text-xl font-bold my-3">
          Total Shipping Charge: ${" "}
          <span className="text-red-500">{totalShipping}</span>{" "}
        </p>
        <p className="text-xl font-bold my-3">
          Tax: $ <span className="text-red-500"> {tax}</span>{" "}
        </p>
        <p className="text-xl font-bold my-3">
          Grand Total: ${" "}
          <span className="text-red-500">{total + totalShipping + tax}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Cart;
