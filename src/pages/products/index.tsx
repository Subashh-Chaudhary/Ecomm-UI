import { useContext, useEffect, useState } from "react";
import { ProductInterface } from "../../components/product/product.contract";
import ProductCard from "../../components/product/productCard";
import { DataContext } from "../../contexts/dataContext";
import { FaAngleDoubleRight } from "react-icons/fa";

const AllProductsPage = () => {

          const [allProduct, setAllProduct] = useState<ProductInterface[]>([]);

          // useEffect(() =>{
          //           const fetchData = async () => {
          //             try {
          //               const response:any = await authSvc.getRequest('/products');
          //               setAllProduct(response.products);
          //             } catch (exception) {
          //               console.error("Error: ", exception);
          //             }
          //           }
          //           fetchData();
          //         }, [])

          const context = useContext(DataContext);
          const response  = context?.product ?? [];

          useEffect(() =>{
            if(Array.isArray(response) ){
              setAllProduct(response);
            }
            else{
              console.log("Error on fetching all product...")
            }
          }, [response])

  return (
    <>
      <div className="w-full lg:px-28 py-2 lg:py-4 px-2 text-md lg:text-2xl font-bold text-slate-700 bg-slate-50 flex items-center gap-1 ">
          All Products
          <FaAngleDoubleRight />
        </div>
      <div className="flex gap-4 mx-2 lg:mx-28 mt-2 lg:mt-6 flex-wrap  justify-center mb-5 md:mb-13">
        <ProductCard data={allProduct} />
      </div>
    </>
  );
};

export default AllProductsPage;
