import React, { createContext, useEffect, useState, ReactNode } from "react";
import { fetchProducts, fetchAllCategories } from "../api/apiService";
import { CategoriesInterface } from "../api/contract/categories.api";
import { ProductInterface } from "../components/product/product.contract";
import { DataContextType } from "./contract.context";

// Create context with proper typing
export const DataContext = createContext<DataContextType | null>(null);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [product, setProduct] = useState<ProductInterface[]>([]);
  const [category, setCategory] = useState<CategoriesInterface>({
    slug: "",
    name: "",
    url: "",
  });

  useEffect(() => {
    const getProduct = async () => {
      const result = await fetchProducts();
      if (result) {
        setProduct(result);
      } else {
        console.log("fetchProducts Failed");
      }
    };

    const getCategory = async () => {
      const result = await fetchAllCategories();
      if (result) {
        setCategory(result);
      } else {
        console.log("fetchCategories Failed");
      }
    };

    getProduct();
    getCategory();
  }, []);

  return (
    <DataContext.Provider value={{ product, category }}>
      {children}
    </DataContext.Provider>
  );
};
