import { useContext, useEffect, useState } from "react";
import CategeriesDatails from "./categoriDetails.component";
import { SmartphoneInterface } from "../../api/contract/smartphonesCat";
import { DataContext } from "../../contexts/dataContext";

import { FaAngleDoubleRight } from "react-icons/fa";

const AllCategoriesPage = () => {
  const [smartphone, setSmartphone] = useState<SmartphoneInterface[]>([]);
  const [beauty, setBeauty] = useState<SmartphoneInterface[]>([]);
  const [fragrances, setFragrances] = useState<SmartphoneInterface[]>([]);
  const [furniture, setFurniture] = useState<SmartphoneInterface[]>([]);
  const [groceries, setGroceries] = useState<SmartphoneInterface[]>([]);
  const [homeDecoration, setHomeDecoration] = useState<SmartphoneInterface[]>(
    []
  );
  const [kitchenAccessories, setKitchenAccessories] = useState<
    SmartphoneInterface[]
  >([]);
  const [laptops, setLaptops] = useState<SmartphoneInterface[]>([]);
  const [menShirts, setMenShirts] = useState<SmartphoneInterface[]>([]);
  const [menShoes, setMenShoes] = useState<SmartphoneInterface[]>([]);
  const [menWatches, setMenWatches] = useState<SmartphoneInterface[]>([]);

  const context = useContext(DataContext);
  const {
    smartphone: smartphoneT = [],
    beauty: beautyT = [],
    fragrances: fragrancesT = [],
    furniture: furnitureT = [],
    groceries: groceriesT = [],
    homeDecoration: homeDecorationT = [],
    kitchenAccessories: kitchenAccessoriesT = [],
    laptops: laptopsT = [],
    menShirts: menShirtsT = [],
    menShoes: menShoesT = [],
    menWatches: menWatchesT = [],
  } = context || {};

  useEffect(() => {
    // Update all state variables at once
    setSmartphone(Array.isArray(smartphoneT) ? smartphoneT : []);
    setBeauty(Array.isArray(beautyT) ? beautyT : []);
    setFragrances(Array.isArray(fragrancesT) ? fragrancesT : []);
    setFurniture(Array.isArray(furnitureT) ? furnitureT : []);
    setGroceries(Array.isArray(groceriesT) ? groceriesT : []);
    setHomeDecoration(Array.isArray(homeDecorationT) ? homeDecorationT : []);
    setKitchenAccessories(
      Array.isArray(kitchenAccessoriesT) ? kitchenAccessoriesT : []
    );
    setLaptops(Array.isArray(laptopsT) ? laptopsT : []);
    setMenShirts(Array.isArray(menShirtsT) ? menShirtsT : []);
    setMenShoes(Array.isArray(menShoesT) ? menShoesT : []);
    setMenWatches(Array.isArray(menWatchesT) ? menWatchesT : []);
  }, [
    smartphoneT,
    beautyT,
    fragrancesT,
    furnitureT,
    groceriesT,
    homeDecorationT,
    kitchenAccessoriesT,
    laptopsT,
    menShirtsT,
    menShoesT,
    menWatchesT,
  ]);

  return (
    <>
      <section className="bg-gray-50">
        <div className="w-full lg:px-28 py-2 lg:py-4 text-sm lg:text-2xl font-bold text-slate-700 bg-slate-50 flex items-center gap-1 ">
          Categories
          <FaAngleDoubleRight />
        </div>
        <div className="w-full bg-gray-200 pb-6">
          <div
          className="px-28 overflow-hidden">
            <CategeriesDatails title="Smartphone" data={smartphone} />
            <CategeriesDatails title="Kitchen Accessories" data={kitchenAccessories} />
            <CategeriesDatails title="Groceries" data={groceries} />
            <CategeriesDatails title="Beauty" data={beauty} />
            <CategeriesDatails title="Fragrances" data={fragrances} />
            <CategeriesDatails title="Furniture" data={furniture} />
            <CategeriesDatails title="Home Decoration" data={homeDecoration} />
            
            <CategeriesDatails title="Laptop" data={laptops} />
            <CategeriesDatails title="Men Shirts" data={menShirts} />
            <CategeriesDatails title="Men Shoes" data={menShoes} />
            <CategeriesDatails title="Men Watches" data={menWatches} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCategoriesPage;
