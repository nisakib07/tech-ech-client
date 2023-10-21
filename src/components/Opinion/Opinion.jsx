const Opinion = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-5">Your Opinion</h2>

      <div>
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-fuchsia-400 dark:bg-slate-400">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered text-lg focus:text-fuchsia-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Your Review
                  </span>
                </label>
                <textarea
                  className="textarea textarea-primary text-lg focus:text-fuchsia-600"
                  placeholder="Write Here..."></textarea>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn border-none bg-fuchsia-600 text-white dark:bg-slate-600 hover:bg-fuchsia-500"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinion;
