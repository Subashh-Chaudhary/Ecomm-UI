import { useController } from "react-hook-form";
import {InputTextInterface}  from "./contract.form"
import React from "react";

const InputText = ({label, defaultVal, control}:InputTextInterface)=>{
          const [defaultValue, setDefaultValue] = React.useState(defaultVal);
          const {field} = useController({
            control:control,
            name={label}
          });
          return(
          <div>
                  <label
                    htmlFor="FullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {label}
                  </label>
                  <input
                    type="text"
                    value={defaultValue}
                    id="FullName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-[15px] sm:text-sm"
                    placeholder="Your full name"
                    onChange={handleChange}
                    onFocus={() => (
                    setDefaultValue(""))}
                    onBlur={()=> ( setDefaultValue(defaultVal))}
                  />
                </div>
          )
}

export default InputText;