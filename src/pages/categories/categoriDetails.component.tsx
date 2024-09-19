import ProductCard from "../../components/product/productCard";
import { CateDetailsInterface } from "./categories.contract";

const CategeriesDatails = ({title, data}: CateDetailsInterface) => {
  return (
    <>
          <div
          className="py-2 mb-3 mt-4 lg:py-4 border ps-3 border-white shadow-2xl rounded text-xl font-bold text-red-600">
              <h2>{title}</h2>
          </div>
          <div>
            <ProductCard data={data}/>
          </div>
    </>
  );
};

export default CategeriesDatails;
