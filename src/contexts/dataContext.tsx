import React, { createContext, useEffect, useState, ReactNode } from "react";
import { fetchProducts, fetchAllCategories, fetchSmartphonesCategories, fetchBeautyCategories, fetchFragrancesCategories, fetchFurnitureCategories, fetchGroceriesCategories, fetchHomeDecorationCategories, fetchKitchenAccessoriesCategories, fetchLaptopsCategories, fetchMenShirtsCategories, fetchMenShoesCategories, fetchMenWatchesCategories, fetchMobileAccessoriesCategories, fetchMotorcycleCategories } from "../api/apiService";
import { CategoriesInterface } from "../api/contract/categories.api";
import { ProductInterface } from "../components/product/product.contract";
import { CartItemDetails, DataContextType } from "./contract.context";
import { SmartphoneInterface } from "../api/contract/smartphonesCat";

// Create context with proper typing
export const DataContext = createContext<DataContextType | null>(null);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [product, setProduct] = useState<ProductInterface[]>([]);
  const [category, setCategory] = useState<CategoriesInterface[]>([]);
  const [smartphone, setSmartphone] = useState<SmartphoneInterface[]>([]);
  const [beauty, setBeauty] = useState<SmartphoneInterface[]>([]);
  const [fragrances, setFragrances] = useState<SmartphoneInterface[]>([]);
  const [furniture, setFurniture] = useState<SmartphoneInterface[]>([]);
  const [groceries, setGroceries] = useState<SmartphoneInterface[]>([]);
  const [homeDecoration, setHomeDecoration] = useState<SmartphoneInterface[]>([]);
  const [kitchenAccessories, setKitchenAccessories] = useState<SmartphoneInterface[]>([]);
  const [laptops, setLaptops] = useState<SmartphoneInterface[]>([]);
  const [menShirts, setMenShirts] = useState<SmartphoneInterface[]>([]);
  const [menShoes, setMenShoes] = useState<SmartphoneInterface[]>([]);
  const [menWatches, setMenWatches] = useState<SmartphoneInterface[]>([]);
  const [mobileAccessories, setMobileAccessories] = useState<SmartphoneInterface[]>([]);
  const [motorcycle, setMotorcycle] = useState<SmartphoneInterface[]>([]);
  const [carts, setCarts] = useState<CartItemDetails[]>([]);

  const addCart = (product: ProductInterface, quantity:number) => {
    // Check if the product is already in the cart
    const existingItem = carts.find((item) => item.id === product.id);

    if (existingItem) {
      // Update the quantity if the item is already in the cart
      setCarts(
        carts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity, totalPrice: (item.quantity + quantity) * item.price }
            : item
        )
      );
    } else {
      // Add the product to the cart if it's not there
      setCarts([
        ...carts,
        {
          id: product.id,
          name: product.brand,
          price: product.price,
          quantity: quantity,
          totalPrice: product.price * quantity,
          image: product.thumbnail
        },
      ]);
    }
  };

  const deleteCart = (id: number) => {
    setCarts(carts.filter((item) => item.id !== id));
  };

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

    const getSmartPhone = async () => {
      const result = await fetchSmartphonesCategories();
      if (result) {
        setSmartphone(result);
      } else {
        console.log("fetchSmartphonesCategories Failed");
      }
    };

    const getBeauty = async () => {
      const result = await fetchBeautyCategories();
      if (result) {
        setBeauty(result);
      } else {
        console.log("fetchSmartphonesCategories Failed");
      }
    };
    const getFragrances = async () => {
      const result = await fetchFragrancesCategories();
      if (result) {
        setFragrances(result);
      } else {
        console.log("fetchFragrancesCategories Failed");
      }
    };
    const getFurniture = async () => {
      const result = await fetchFurnitureCategories();
      if (result) {
        setFurniture(result);
      } else {
        console.log("fetchFurnitureCategories Failed");
      }
    };
    const getGroceries = async () => {
      const result = await fetchGroceriesCategories();
      if (result) {
        setGroceries(result);
      } else {
        console.log("fetchGroceriesCategories Failed");
      }
    };
    const getHomeDecoration = async () => {
      const result = await fetchHomeDecorationCategories();
      if (result) {
        setHomeDecoration(result);
      } else {
        console.log("fetchHomeDecorationCategories Failed");
      }
    };
    const getKitchenAccessories = async () => {
      const result = await fetchKitchenAccessoriesCategories();
      if (result) {
        setKitchenAccessories(result);
      } else {
        console.log("fetchKitchenAccessoriesCategories Failed");
      }
    };
    const getLaptops = async () => {
      const result = await fetchLaptopsCategories();
      if (result) {
        setLaptops(result);
      } else {
        console.log("fetchLaptopsCategories Failed");
      }
    };
    const getMenShirts = async () => {
      const result = await fetchMenShirtsCategories();
      if (result) {
        setMenShirts(result);
      } else {
        console.log("fetchMenShirtsCategories Failed");
      }
    };
    const getMenShoes = async () => {
      const result = await fetchMenShoesCategories();
      if (result) {
        setMenShoes(result);
      } else {
        console.log("fetchMenShoesCategories Failed");
      }
    };
    const getMenWatches = async () => {
      const result = await fetchMenWatchesCategories();
      if (result) {
        setMenWatches(result);
      } else {
        console.log("fetchMenWatchesCategories Failed");
      }
    };
    const getMoblieAccessories = async () => {
      const result = await fetchMobileAccessoriesCategories();
      if (result) {
        setMobileAccessories(result);
      } else {
        console.log("fetchMobileAccessoriesCategories Failed");
      }
    };
    const getMotorcycle = async () => {
      const result = await fetchMotorcycleCategories();
      if (result) {
        setMotorcycle(result);
      } else {
        console.log("fetchMotorcycleCategories Failed");
      }
    };

    getProduct();
    getCategory();
    getSmartPhone();
    getBeauty();
    getFragrances();
    getFurniture();
    getGroceries();
    getHomeDecoration();
    getKitchenAccessories();
    getLaptops();
    getMenShirts();
    getMenShoes();
    getMenWatches();
    getMoblieAccessories();
    getMotorcycle();
  }, []);

  return (
    <DataContext.Provider value={{ product, category, smartphone, beauty, fragrances, furniture, groceries, homeDecoration , kitchenAccessories, laptops, menShirts, menShoes, menWatches, mobileAccessories, motorcycle, carts, addCart, deleteCart}}>
      {children}
    </DataContext.Provider>
  );
};
