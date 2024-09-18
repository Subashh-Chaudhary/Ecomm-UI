import { ReactNode } from "react";
import { CategoriesInterface } from "../api/contract/categories.api";
import { ProductInterface } from "../components/product/product.contract";

export interface DataContextType {
          product: ProductInterface[];
          category: CategoriesInterface;
}

export interface DataProviderProps {
          children: ReactNode;
        }
        