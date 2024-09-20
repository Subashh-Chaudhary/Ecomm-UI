import ProductCard from "../../components/product/productCard";
import { CateDetailsInterface } from "./categories.contract";

const CategeriesDatails = ({title, data}: CateDetailsInterface) => {
  return (
    <>
          <div
          className="py-2 mb-3 mx-5 ps-2 lg:mx-0 mt-4 lg:py-4 border border-white shadow-2xl rounded text-md lg:text-xl font-bold text-red-600">
              <h2>{title}</h2>
          </div>
          <div
          className="flex justify-center">
            <ProductCard data={data}/>
          </div>
    </>
  );
};

export default CategeriesDatails;
