import PropTypes from "prop-types";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const CartItems = ({ cartItem, userCart, setUserCart }) => {
  const { _id, name, brand, price, photo } = cartItem;
  console.log(userCart);

  const { user } = useContext(AuthContext);
  const email = user.email;
  const username = email.split("@")[0];

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${username}/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = userCart.filter((item) => item._id != id);
              setUserCart(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl flex items-center">
        <figure className="">
          <img className="h-[250px]" src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg">Brand : {brand}</p>
          <p>Price : ${price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-600 text-white hover:bg-red-400">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItems.propTypes = {
  cartItem: PropTypes.object,
  userCart: PropTypes.array,
  setUserCart: PropTypes.func,
};

export default CartItems;
