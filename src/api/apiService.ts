import authSvc from "../pages/auth/auto.service";
import { CategoriesInterface } from "./contract/categories.api";
import { ProductInterface } from "./contract/product.api";
import { SmartphoneInterface } from "./contract/smartphonesCat";

// General fetch function for categories
const fetchCategoryData = async <T>(endpoint: string): Promise<T[] | null> => {
  try {
    const response: any = await authSvc.getRequest(endpoint);
    return response.products || response;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return null;
  }
};

// Fetch products
export const fetchProducts = async (): Promise<ProductInterface[] | null> => {
  return await fetchCategoryData<ProductInterface>("/products");
};

// Fetch all categories
export const fetchAllCategories = async (): Promise<CategoriesInterface[] | null> => {
  return await fetchCategoryData<CategoriesInterface>("/products/categories");
};

// Fetch smartphones category
export const fetchSmartphonesCategories = async (): Promise<SmartphoneInterface[] | null> => {
  return await fetchCategoryData<SmartphoneInterface>("/products/category/smartphones");
};

// Fetch beauty category
export const fetchBeautyCategories = async (): Promise<SmartphoneInterface[] | null> => {
  return await fetchCategoryData<SmartphoneInterface>("/products/category/beauty");
};

// Fetch fragrances category
export const fetchFragrancesCategories = async (): Promise<SmartphoneInterface[] | null> => {
  return await fetchCategoryData<SmartphoneInterface>("/products/category/fragrances");
};

// Fetch furniture category
export const fetchFurnitureCategories = async (): Promise<SmartphoneInterface[] | null> => {
  return await fetchCategoryData<SmartphoneInterface>("/products/category/furniture");
};

// Fetch groceries category
export const fetchGroceriesCategories = async (): Promise<SmartphoneInterface[] | null> => {
  return await fetchCategoryData<SmartphoneInterface>("/products/category/groceries");
};

// Fetch home decoration category
export const fetchHomeDecorationCategories = async (): Promise<SmartphoneInterface[] | null> => {
  return await fetchCategoryData<SmartphoneInterface>("/products/category/home-decoration");
};

// Fetch kitchen accessories category
export const fetchKitchenAccessoriesCategories = async (): Promise<SmartphoneInterface[] | null> => {
  return await fetchCategoryData<SmartphoneInterface>("/products/category/kitchen-accessories");
};

// Fetch laptops accessories category
export const fetchLaptopsCategories = async (): Promise<SmartphoneInterface[] | null> => {
  return await fetchCategoryData<SmartphoneInterface>("/products/category/laptops");
};

// Fetch Man shirts category
export const fetchMenShirtsCategories = async (): Promise<SmartphoneInterface[] | null> => {
  return await fetchCategoryData<SmartphoneInterface>("/products/category/mens-shirts");
};
// Fetch Men Watches category
export const fetchMenShoesCategories = async (): Promise<SmartphoneInterface[] | null> => {
  return await fetchCategoryData<SmartphoneInterface>("/products/category/mens-shoes");
};
// Fetch laptops accessories category
export const fetchMenWatchesCategories = async (): Promise<SmartphoneInterface[] | null> => {
  return await fetchCategoryData<SmartphoneInterface>("/products/category/mens-watches");
};
