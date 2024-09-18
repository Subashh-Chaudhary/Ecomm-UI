import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../app";
import {RegisterPage, LoginPage} from "../pages/auth";
import CartPage from "../pages/cart";
import AllCategoriesPage from "../pages/categories";
import AllProductsPage from "../pages/products";
import ContactPage from "../pages/contact";
import HomePageLayout from "../pages/layout/home.page";
import AdminLayout from "../pages/layout/cms.page";
import ProductDetails from "../components/productDetails";
import ErrorComponent from "../components/error/error.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import { DataProvider } from "../contexts/dataContext";

const RouterConfig = () => {
  return (
    <>
    <DataProvider>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<App />} />
            <Route path="cart" element={<CartPage/>} />
            <Route path="categories" element={<AllCategoriesPage />} />
            <Route path="products" element={<AllProductsPage />} />
            <Route path="product" element={<ProductDetails />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<ErrorComponent/>} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
    </>
  );
};

export default RouterConfig;
