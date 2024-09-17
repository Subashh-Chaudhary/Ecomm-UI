import { useEffect, useState } from "react";
import HomeTitle from "../../components/common/title/homeTitle.component";
import { ProductInterface } from "../../components/product/product.contract";
import ProductCard from "../../components/product/productCard";
import authSvc from "../auth/auto.service";

const AllProductsPage = () => {

          const [allProduct, setAllProduct] = useState<ProductInterface[]>([]);

          useEffect(() =>{
                    const fetchData = async () => {
                      try {
                        const response:any = await authSvc.getRequest('/products');
                        setAllProduct(response.products);
                      } catch (exception) {
                        console.error("Error: ", exception);
                      }
                    }
                    fetchData();
                  }, [])

  return (
    <>
      <HomeTitle title="All Products" />
      <div className="flex gap-4 mx-2 lg:mx-28 mt-2 lg:mt-6 flex-wrap  justify-center mb-5 md:mb-13">
        <ProductCard data={allProduct} />
      </div>
    </>
  );
};

export default AllProductsPage;
