import { useState } from "react";
import { Button, Checkbox, Label,} from "flowbite-react";
import {
  InputLabel,
  PasswordInput,
  TextInput,
} from "../../../components/common/form/TextInput.componet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

  const submitForm = (data: any) => {
    try{
      // TODO: POST-API call

      setLoading(true);
      toast.success("You are logged in...")
      setTimeout((): void => {
        navigate('/');
      }, 1000);
    }
    catch(exception){
      console.error(exception);
    }
    finally{
      setLoading(false);
    }
    
  };
  return (
    <>
          <h2 
          className="w-fit mb-2 lg:mb-5 font-bold text-xl lg:text-4xl text-slate-700 mx-auto mt-2 lg:mt-9">Login page</h2>
      <section className="flex justify-center items-center max-h-96 mb-4 lg:mb-12">
          
        <form
          className="flex max-w-[600px] bg-slate-50 flex-col  flex-grow px-3 lg:px-7 py-4 lg:py-9 mx-5 rounded-md shadow-2xl"
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
          <Button 
          type="submit"
          disabled = {loading}
          >Submit</Button>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
