import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const handleAddProducts = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const newProduct = { name, brand, type, price, description, rating, photo };
    console.log(newProduct);

    fetch("https://assignmentb8-10-server.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product Added Successfully");
          form.reset();
        }
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col p-0">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold my-5">Add Product</h1>
        </div>
        <div className="card flex-shrink-0 shadow-2xl bg-fuchsia-400 dark:bg-slate-400">
          <form onSubmit={handleAddProducts} className="card-body">
            {/* Name and Brand */}

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
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
                name="brand"
                className="input input-bordered text-lg  focus:text-fuchsia-600"
              />
            </div>
            {/* </div> */}

            {/* Type and Price */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Type</span>
                </label>
                <input
                  type="text"
                  placeholder="Type"
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
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="input input-bordered text-lg  focus:text-fuchsia-600"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Rating
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered text-lg  focus:text-fuchsia-600"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered text-lg  focus:text-fuchsia-600"
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn bg-fuchsia-600 dark:bg-slate-600 text-white border-0 hover:bg-fuchsia-500"
                type="submit">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer pauseOnHover={false} autoClose={2000}></ToastContainer>
    </div>
  );
};

export default AddProducts;
