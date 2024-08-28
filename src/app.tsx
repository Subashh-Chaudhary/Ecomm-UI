import { Banner } from "./components/banner";
import CategoryComponent from "./components/category";
import { HomeHeader } from "./components/common/header";
import Product from "./components/product";

const App = () => {
  return (
    <>
      <HomeHeader />
      <Banner />
      <CategoryComponent />
      <Product />
    </>
  );
};

export default App;
