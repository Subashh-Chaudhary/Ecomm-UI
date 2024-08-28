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

const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<App />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="categories" element={<AllCategoriesPage />} />
            <Route path="products" element={<AllProductsPage />} />
            <Route path="products/:slug" element={<>Product Details page</>} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<>404 page not found</>} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;
