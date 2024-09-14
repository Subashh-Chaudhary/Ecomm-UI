import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../app";
import RegisterPage from "../pages/auth/register/register.page";
import LoginPage from "../pages/auth/login/login.page";
import AboutPage from "../pages/about";
import AllCategoriesPage from "../pages/categories";
import AllProductsPage from "../pages/products";
import ContactPage from "../pages/contact";
import HomePageLayout from "../pages/layout/home.page";
import AdminLayout from "../pages/layout/cms.page";
import ProductDetails from "../components/productDetails";
import ErrorComponent from "../components/error/error.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

const RouterConfig = () => {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<App />} />
            <Route path="about" element={<AboutPage />} />
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
    </>
  );
};

export default RouterConfig;
