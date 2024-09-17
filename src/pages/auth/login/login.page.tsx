import { useState } from "react";
import {
  PasswordInput,
  TextInput,
} from "../../../components/common/form/TextInput.componet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import BasicLoading from "../../../components/loading/loading.component";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerDTO = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string()
      .matches(
        /^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(?!.* ).{8,25}$/,
        "Password must contain uppercase letter, a lowercase letter, a number, a special character, and be 8-25 characters long."
      )
      .required(),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerDTO),
  });

  const submitForm = (data:any) => {
    try {
      // TODO: POST-API call

      setLoading(true);
      toast.success("You are logged in...");
      console.log("Data: ", data);
      setTimeout((): void => {
        navigate("/");
      }, 1000);
    } catch (exception) {
      console.error(exception);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  };
  return (
    <>
      <section className="flex justify-center max-h-fit items-center mb-2 lg:mb-5">
        <div className="flex items-center justify-center px-4 py-8 sm:px-9 lg:px-8 sm:py-12 lg:py-16 lg:w-[500px]">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in to Sajilo Cart
            </h2>
            <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-600">
              Don’t have an account?{" "}
              <NavLink
                to="/register"
                title=""
                className="font-medium text-blue-600/80 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
              >
                Create a free account
              </NavLink>
            </p>

            <form onSubmit={handleSubmit(submitForm)} className="mt-6 md:mt-8">
              <div className="md:space-y-1">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5">
                    <TextInput
                      name="email"
                      type="email"
                      errMsg={errors?.email?.message as string}
                      control={control}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>

                    <NavLink
                      to="#"
                      className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                    >
                      {" "}
                      Forgot password?{" "}
                    </NavLink>
                  </div>
                  <div className="mt-2.5">
                    <PasswordInput
                      name="password"
                      type="password"
                      errMsg={errors?.password?.message as string}
                      control={control}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full py-2 md:py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    disabled = {loading}
                    >
                      { 
                      loading ? <BasicLoading label="Account Logging..."/> : 'Log in'
                    }
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <svg
                    className="w-6 h-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </div>
                Sign in with Google
              </button>

              <button
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <svg
                    className="w-6 h-6 text-[#2563EB]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </div>
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex items-center justify-center px-4 py-5 sm:py-1 bg-gray-50 sm:px-6 lg:px-8 hidden">
          <div>
            <img
              className="w-full mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
              alt=""
            />

            <div className="w-full max-w-md mx-auto xl:max-w-xl">
              <h3 className="text-2xl font-bold text-center text-black">
                Design your own card
              </h3>
              <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;

{
  /* <form
          className="flex max-w-[400px] flex-col  flex-grow px-3 lg:px-7 py-4 lg:py-9 mx-5 rounded-md shadow-2xl"
          onSubmit={handleSubmit(submitForm)}
        >
          <div>
            <div className=" mb-1 lg:mb-2">
              <InputLabel htmlFor="email">Email</InputLabel>
            </div>
            <TextInput
              name="email"
              type="email"
              errMsg={errors?.email?.message as string}
              control={control}
            />
          </div>
          <div>
            <div className="mb-1 lg:mb-2 block">
            <InputLabel htmlFor="password">Password</InputLabel>
            </div>
            <PasswordInput
              name="password"
              type="password"
              errMsg={errors?.password?.message as string}
              control={control}
            />
          </div>
          <div className="flex items-center gap-2 mb-3 lg:mb-4">
            <Checkbox id="remember" />
            <Label htmlFor="remember"
            className="">Remember me</Label>
          </div>
          <button 
          type="submit"
          className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95 transition-transform duration-150 ease-in-out "
          disabled = {loading}
          >
            { 
            loading ? <BasicLoading label="Account Logging..."/> : 'Submit'
          }
          </button>
                    
        </form> */
}
