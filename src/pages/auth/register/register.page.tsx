import registration from "../../../assets/images/registration.png";
const RegisterPage = () => {
  return (
    <>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/form
    register page
*/}

      <section className="bg-white">
        <div className="lg:grid lg:h-full lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-2 lg:h-full xl:col-span-6">
            <img
              alt=""
              src={registration}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12 xl:col-span-5">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Project E-com UI
              </h1>
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="FullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="FullName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Address{" "}
                  </label>

                  <textarea
                    id="Address"
                    name="address"
                    style={{ resize: "none" }}
                    rows={3}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  ></textarea>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Role{" "}
                  </label>

                  <select
                    id="Role"
                    name="role"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  >
                    <option value="customer">Customer</option>
                    <option value="Vendor">Vendor</option>
                  </select>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Image{" "}
                  </label>

                  <input
                  id="Image"
                  name="image"
                    className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm border border-gray-200"
                    aria-describedby="user_avatar_help"
                    type="file"
                  />
                  <div
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="user_avatar_help"
                  >
                    A profile picture is useful to confirm your are logged into
                    your account
                  </div>
                </div>

                <div className="col-span-6">
                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?{" "}
                    <a href="#" className="text-gray-700 underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
