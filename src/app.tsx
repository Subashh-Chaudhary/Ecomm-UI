import { Banner } from "./components/banner";
import CategoryComponent from "./components/category";
import { HomeHeader } from "./components/common/header";

const App = () => {
  return (
    <>
      <HomeHeader />
      <Banner />
      <CategoryComponent />
    </>
  );
};

export default App;
