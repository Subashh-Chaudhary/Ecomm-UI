import { useController } from "react-hook-form";
import { InputTextInterface, OptionType, SelectOptionPros } from "./contract.form";
import { InputLabelProps } from "./contract.form";
import React from "react";

export const InputLabel = ({children, htmlFor}: InputLabelProps)=>{
  return(<>
    <label
                    htmlFor={htmlFor}
                    className="block text-sm font-medium text-gray-700"
                  >{children}</label>
  </>)
}

export const TextInput = ({
  control,
  name,
  errMsg,
  type,
}: InputTextInterface) => {
  const { field } = useController({
    control: control,
    name: name,
  });
  return (
    <div>
      <input
        type={type}
        {...field}
        className={`block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 ${
          errMsg ? "border-red-700 border-2" : "border-gray-200"
        } placeholder-gray-500 transition-all duration-200 border rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600`}
        placeholder={name == "email"? "Enter email to get started": ""}
      />
      <small className="text-red-900">{errMsg ? errMsg : "\u00A0"}</small>
    </div>
  );
};

export const PasswordInput = ({
  control,
  name,
  errMsg,
  autocomplete
}: InputTextInterface) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const { field } = useController({
    control: control,
    name: name,
  });
  return (
    <div 
    className="relative">
      <input
        type={passwordVisible ? "text" : "password"}
        {...field}
        className={`block w-full p-3 text-black  ${
          errMsg ? "border-red-700 border-2" : "border-gray-200"
        } placeholder-gray-500 transition-all duration-200 border rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600`}
        autoComplete={autocomplete}
        placeholder="Enter your password"
      />
      <button
        type="button"
        className="absolute right-2 lg:right-4 top-[10px] md:top:1 lg:top-2"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.875 18.825A10.042 10.042 0 0112 19c-4.995 0-9-5.373-9-6s4.005-6 9-6 9 5.373 9 6c0 .379-.165.874-.455 1.405M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3l18 18M9.878 9.878A3 3 0 0012 9c1.657 0 3 1.343 3 3a2.99 2.99 0 01-.878 2.121M15.879 15.879A3.001 3.001 0 0112 15a3 3 0 01-3-3c0-.795.311-1.517.878-2.121M9.879 9.879L3 3m18 18L9.878 9.878z"
            />
          </svg>
        )}
      </button>
      <small className="text-red-900 ">{errMsg ? errMsg : "\u00A0"}</small>
    </div>
  );
};

export const TextAreaInput = ({
  control,
  name,
  errMsg, rows,
}: InputTextInterface) => {
  const { field } = useController({
    control: control,
    name: name,
  });
  return (
    <div>
      <textarea
        {
          ...field
        }
        rows={rows}
        style={{resize: "none"}}
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-[15px] sm:text-sm"
        placeholder="Your address"
      />
      <small className="text-red-900 leading-none">{errMsg}</small>
    </div>
  );
};


export const SelectOptionsComponent = ({options, control, name, errMsg}:SelectOptionPros)=>{
  const {field} = useController(
    {
      name: name,
      control: control,
    }
  )
  return(
    <>
      <select
      {
        ...field
      }
        name="role"
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-[15px] sm:text-sm"
      >
        {
          options && options.map((row:OptionType, i:number) =>(
            <option key={i} value={row.value}>{row.label}</option>
          ))
          
        }    
      </select>
      <small className="text-red-900 leading-none">{errMsg}</small>
    </>
  )
}

export const RoleSelectComponent =({control, name, errMsg}: SelectOptionPros)=>{
  return(
    <>
      <SelectOptionsComponent 
      options = {
        [
          {label: "buyer", value: "customer"},
          {label: "seller", value:"seller"},
        ]
      } 
      control={control}
      name={name}
      errMsg={errMsg}
      />
    </>
  )
}