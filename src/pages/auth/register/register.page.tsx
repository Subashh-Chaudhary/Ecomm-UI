import registration from "../../../assets/images/registration.png";

const RegisterPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow bg-white">
        <div className="lg:grid lg:h-screen lg:grid-cols-12 lg:mx-36">
          <aside className="relative hidden lg:block lg:col-span-6 xl:col-span-7">
            <img
              alt="Registration"
              src={registration}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-6 py-12 sm:px-12 lg:col-span-6 xl:col-span-5">
            <div className="w-full max-w-lg lg:max-w-2xl">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Project E-com UI
              </h1>

              <p className="mt-4 text-gray-600 sm:mt-6">
                Please fill in the form to create an account.
              </p>

              <form action="#" className="mt-8 space-y-6">
                {/* Form Fields */}
                <div>
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
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your email"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="Password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="Password"
                      name="password"
                      className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="PasswordConfirmation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="PasswordConfirmation"
                      name="password_confirmation"
                      className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Confirm password"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="Address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <textarea
                    id="Address"
                    name="address"
                    rows={3}
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Role
                  </label>
                  <select
                    id="Role"
                    name="role"
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="customer">Customer</option>
                    <option value="vendor">Vendor</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="Image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Profile Image
                  </label>
                  <input
                    id="Image"
                    name="image"
                    type="file"
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    A profile picture is useful to confirm your identity.
                  </p>
                </div>

                <div className="flex items-center">
                  <input
                    id="newsletter"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I want to receive emails about events, updates, and
                    announcements.
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <button className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Create an account
                  </button>
                </div>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  Already have an account?{" "}
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Log in
                  </a>
                  .
                </p>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
