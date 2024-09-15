import { Spinner } from "flowbite-react";

const BasicLoading = ({label}: {label:string})=>{
          return(
                    <>
                     <Spinner aria-label="Spinner button example" size="sm" />
                     <span className="pl-3">{label}</span>
                    </>
          )
}

export default BasicLoading;