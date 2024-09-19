import { ReactNode } from "react";
import { CategoriesInterface } from "../api/contract/categories.api";
import { ProductInterface } from "../components/product/product.contract";
import { SmartphoneInterface } from "../api/contract/smartphonesCat";

export interface DataContextType {
          product: ProductInterface[],
          category: CategoriesInterface[],
          smartphone: SmartphoneInterface[],
          beauty: SmartphoneInterface[],
          fragrances: SmartphoneInterface[],
          furniture: SmartphoneInterface[],
          groceries: SmartphoneInterface[],
          homeDecoration: SmartphoneInterface[],
          kitchenAccessories: SmartphoneInterface[],
          laptops: SmartphoneInterface[],
          menShirts: SmartphoneInterface[],
          menShoes: SmartphoneInterface[],
          menWatches: SmartphoneInterface[],
}

export interface DataProviderProps {
          children: ReactNode;
        }
        