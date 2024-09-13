import { useController } from "react-hook-form";
import { InputTextInterface, OptionType, SelectOptionPros } from "./contract.form";
import { InputLabelProps } from "./contract.form";

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
        className={`mt-1 w-full rounded-md ${
          errMsg ? "border-red-700 border-2" : "border-gray-300"
        } shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-[15px] sm:text-sm`}
      />
      <small className="text-red-900">{errMsg}</small>
    </div>
  );
};

export const PasswordInput = ({
  control,
  name,
  errMsg,
  autocomplete
}: InputTextInterface) => {
  const { field } = useController({
    control: control,
    name: name,
  });
  return (
    <div>
      <input
        type="password"
        {...field}
        className={`mt-1 w-full rounded-md ${
          errMsg ? "border-red-700 border-2" : "border-gray-300"
        } shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-[15px] sm:text-sm`}
        autoComplete={autocomplete}
      />
      <small className="text-red-900 ">{errMsg}</small>
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