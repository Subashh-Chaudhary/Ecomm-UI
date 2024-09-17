import { Spinner } from "flowbite-react";

interface LoadingProps{
  label: string,
  isCenter?: boolean
}

const BasicLoading = ({ label, isCenter }:LoadingProps) => {
  return (
    <>
    <div
    className="flex justify-center items-center gap-3 text-white">
          <span className={`pl-3 ${isCenter? "my-48 text-slate-800 font-bold text-4xl": ""} `}>{label}</span>
      <Spinner aria-label="Spinner button example" size="md" />
    </div>
      
    </>
  );
};

export default BasicLoading;
