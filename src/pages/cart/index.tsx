import { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";
import { ProductInterface } from "../../components/product/product.contract";
const CartPage = () => {
  const context = useContext(DataContext);
const product = context?.product ?? [];
const category = context?.category ?? {};
  return(
    <>
    <div>
      Cart
    </div>
    </>
  )
};

export default CartPage;
