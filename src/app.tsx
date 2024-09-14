import { Banner } from "./components/banner";
import CategoryComponent from "./components/category";
import Product from "./components/product";

const App = () => {
  return (
    <>
    <div
    className="bg-slate-[#F5F5F5]">
      <Banner />
      <CategoryComponent />
      <Product />
    </div>
      
    </>
  );
};

export default App;
