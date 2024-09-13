import { useForm } from "react-hook-form";
import registration from "../../../assets/images/registration.png";
import {InputLabel, RoleSelectComponent, TextAreaInput, TextInput} from "../../../components/common/form/TextInput.componet";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterPage = () => {
  const registerDTO = Yup.object({
    name: Yup.string().min(2).max(50).required(),
    email: Yup.string().email().required(),
    password: Yup.string().matches(/^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(?!.* ).{8,25}$/).required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password should match"),
    role: Yup.string().matches(/^(seller|customer)$/).default('customer'),
    image: Yup.mixed()
  })

  const {control, handleSubmit, setValue, formState: {errors}} =useForm({
    resolver: yupResolver(registerDTO)
  })

  const submitForm = (datas:any)=>{
    // API call
    console.log("Datas :", datas)
  }

  console.log("Error :", errors)

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12 lg:mx-36">
          <aside className="hidden md:max-h-[650px] lg:block lg:col-span-4 xl:col-span-5">
            <img
              alt="Registration"
              src={registration}
              className="inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex  justify-center px-6 sm:px-12 sm:py-5 lg:col-span-8 xl:col-span-7">
            <div className="w-full max-w-lg lg:max-w-2xl">
              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-4xl">
                E-com UI, Registration
              </h1>

              <p className="mt-4 text-gray-600 sm:mt-6">
                Please fill in the form to create an account.
              </p>

              <form onSubmit={handleSubmit(submitForm)} className="mt-8 space-y-3">
                {/* Form Fields */}
                {/* <InputText label="Full Name" control={control}/> */}
                <div>
                <InputLabel htmlFor="fullName">Full name</InputLabel>
                    <TextInput 
                      name="fullName" 
                      errMsg={errors?.name?.message as string} 
                      required={true} 
                      control={control}/>
                </div>
                
                <div>
                <InputLabel htmlFor="email">Email</InputLabel>
                  <TextInput
                    name="Email" 
                    type="email"
                    errMsg={errors?.email?.message as string} 
                    required={true} 
                    control={control}/>
                </div>

                

                <div className="grid gap-2 md:gap-6 grid-cols-2">
                  <div>
                  <InputLabel htmlFor="password">Password</InputLabel>
                    <TextInput
                      name="password" 
                      type="password"
                      errMsg={errors?.password?.message as string} 
                      required={true} 
                      control={control}/>
                  </div>

                  <div>
                  <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                    <TextInput
                      name="confirmPassword" 
                      type="password"
                      errMsg={errors?.confirmassword?.message as string} 
                      required={true} 
                      control={control}/>
                  </div>
                </div>

                <div className="grid gap-2 md:gap-6 grid-cols-5">
                <div
                className="col-span-3">
                  <InputLabel htmlFor="address">Address</InputLabel>
                  <TextAreaInput
                   name="address"
                   errMsg={errors?.textArea?.message as string} 
                   required={true} 
                   control={control}/> 
                </div>

                <div
                className="col-span-2">
                  <InputLabel htmlFor="role">Role</InputLabel>
                  <RoleSelectComponent 
                  name="role"
                  errMsg={errors?.role?.message as string} 
                  required={true} 
                  control={control}/>
                </div>
                </div>

                <div>
                  <InputLabel htmlFor="image">Image</InputLabel>
                  <input
                    name="image"
                    type="file"
                    className="mt-1 w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={
                      (e:any) => {
                        const image = e.target.files['0'];
                        setValue('image', image);
                      }
                    }
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
