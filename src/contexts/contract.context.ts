import { ReactNode } from "react";
import { CategoriesInterface } from "../api/contract/categories.api";
import { ProductInterface } from "../components/product/product.contract";
import { SmartphoneInterface } from "../api/contract/smartphonesCat";

export interface DataContextType {
  product: ProductInterface[];
  category: CategoriesInterface[];
  smartphone: SmartphoneInterface[];
  beauty: SmartphoneInterface[];
  fragrances: SmartphoneInterface[];
  furniture: SmartphoneInterface[];
  groceries: SmartphoneInterface[];
  homeDecoration: SmartphoneInterface[];
  kitchenAccessories: SmartphoneInterface[];
  laptops: SmartphoneInterface[];
  menShirts: SmartphoneInterface[];
  menShoes: SmartphoneInterface[];
  menWatches: SmartphoneInterface[];
  mobileAccessories: SmartphoneInterface[];
  motorcycle: SmartphoneInterface[];
  carts: CartItemDetails[],
  addCart: (product: ProductInterface, quantity:number) => void;
  deleteCart: (id: number) => void;
  cartCount: number,
  users: UserInterface[],
  addUser: (user: UserInterface) => void;
  userExist: string,
  isLoggedin: boolean,
  handleStatusChange: () => void;
}

export interface DataProviderProps {
  children: ReactNode;
}

export interface CartItemDetails {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
  image: string;
}

export interface UserInterface{
  name: string,
  phone: string,
  email: string,
  password: string,
  confirmPassword ?: string,
  address: string,
  role: string,
  image ?: string,
}