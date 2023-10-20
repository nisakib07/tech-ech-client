import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartItems from "../../components/CartItems/CartItems";

const Cart = () => {
  const cartItems = useLoaderData();
  const [userCart, setUserCart] = useState(cartItems);

  return (
    <div>
      <h1 className="text-3xl text-center mt-8 font-bold">Your Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {userCart &&
          userCart?.map((cartItem) => (
            <CartItems
              key={cartItem._id}
              cartItem={cartItem}
              userCart={userCart}
              setUserCart={setUserCart}></CartItems>
          ))}
      </div>
    </div>
  );
};

export default Cart;
