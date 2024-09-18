import authSvc from "../pages/auth/auto.service";
import { CategoriesInterface } from "./contract/categories.api";
import { ProductInterface } from "./contract/product.api";

export const fetchProducts = async () => {
  try {
    const response:any = await authSvc.getRequest("/products?limit=60");
    const data:ProductInterface[] = await response.products;
    return data;
  } catch (error) {
    console.error("Error fetching Products:", error);
  }
};

export const fetchAllCategories = async () => {
  try {
    const response:any = await authSvc.getRequest("/products/categories");
    const data:CategoriesInterface = await response;
    return data;
  } catch (error) {
    console.error("Error fetching Categories:", error);
  }
};
