import { Banner } from "./components/banner";
import CategoryComponent from "./components/category";
import Product from "./components/product";
import { DataProvider } from "./contexts/dataContext";

const App = () => {
  return (
    <>
      <DataProvider>
        <div className="bg-slate-[#F5F5F5]">
          <Banner />
          <CategoryComponent />
          <Product />
        </div>
      </DataProvider>
    </>
  );
};

export default App;
