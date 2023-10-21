import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { name, brand, type, price, rating, photo, _id } = product;
  console.log(_id);
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const upDatedProduct = {
      name,
      brand,
      type,
      price,
      description,
      rating,
      photo,
    };
    console.log(upDatedProduct);

    fetch(`https://assignmentb8-10-server.vercel.app/products1/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(upDatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Product Updated Successfully");
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Update Product</h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-fuchsia-400">
            <form onSubmit={handleUpdateProduct} className="card-body">
              {/* Name and Brand */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    defaultValue={name}
                    name="name"
                    className="input input-bordered text-lg  focus:text-fuchsia-600"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Brand Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Brand"
                    defaultValue={brand}
                    name="brand"
                    className="input input-bordered text-lg  focus:text-fuchsia-600"
                  />
                </div>
              </div>

              {/* Type and Price */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Type
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type"
                    defaultValue={type}
                    name="type"
                    className="input input-bordered text-lg  focus:text-fuchsia-600"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Price
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    defaultValue={price}
                    name="price"
                    className="input input-bordered text-lg  focus:text-fuchsia-600"
                  />
                </div>
              </div>

              {/* Description and Rating */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Rating
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Rating"
                    defaultValue={rating}
                    name="rating"
                    className="input input-bordered text-lg  focus:text-fuchsia-600"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Photo
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    defaultValue={photo}
                    name="photo"
                    className="input input-bordered text-lg focus:text-fuchsia-600"
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn bg-fuchsia-600 border-0 hover:bg-fuchsia-500 text-white"
                  type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
          <ToastContainer
            pauseOnHover={false}
            autoClose={2000}></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
