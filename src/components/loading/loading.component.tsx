import { Spinner } from "flowbite-react";

const BasicLoading = ({ label }: { label: string }) => {
  return (
    <>
    <div
    className="flex justify-center gap-3 text-white">
          <span className="pl-3">{label}</span>
      <Spinner aria-label="Spinner button example" size="md" />
    </div>
      
    </>
  );
};

export default BasicLoading;
