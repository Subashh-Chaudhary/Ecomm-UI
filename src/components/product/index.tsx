import {useState, useEffect, useContext } from "react";
import { DataContext } from "../../contexts/dataContext";
import ProductCard from "./productCard";
import HomeTitle from "../common/title/homeTitle.component";
import { ProductInterface } from "../../api/contract/product.api";

const Product = () => {
  const [allProduct, setAllProduct] = useState<ProductInterface[]>([]);

  // using context api for accessing data
  const context = useContext(DataContext);
  const product = context?.product ?? [];
  
  // Update only when `product` changes
  useEffect(() => {
    setAllProduct(product);
  }, [product]); 
 
  return (
    <>
      <HomeTitle title="Products" url="/products"/>
      <div className="flex gap-4 mx-2 lg:mx-28 mt-2 lg:mt-6 flex-wrap  justify-center mb-5 md:mb-13">
        <ProductCard isInHomePage={true} data={allProduct} />
      </div>
    </>
  );
};

export default Product;
