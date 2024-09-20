import { useContext, useEffect, useState } from "react";
import { SmartphoneInterface } from "../../api/contract/smartphonesCat";
import { DataContext } from "../../contexts/dataContext";
import CategeriesDatails from "./categoriDetails.component";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { ProductInterface } from "../../api/contract/product.api";

const Category = () => {
  const [category, setCategory] = useState<ProductInterface[]>([]);
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
  const [mobileAccessories, setMobileAccessories] = useState<SmartphoneInterface[]>([]);
  const [motorcycle, setMotorcycle] = useState<SmartphoneInterface[]>([]);

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
    mobileAccessories: mobileAccessoriesT = [],
    motorcycle: motorcycleT = [],
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
    setMobileAccessories(Array.isArray(mobileAccessoriesT) ? mobileAccessoriesT : []);
    setMotorcycle(Array.isArray(motorcycleT) ? motorcycleT : []);
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

  const [searchParams] = useSearchParams();
  const cat = searchParams.get("category");

  useEffect(() => {
    const findCategory = () => {
      if (cat) {
        switch (cat) {
          case "beauty":
            setCategory(beauty);
            break;
          case "fragrances":
            setCategory(fragrances);
            break;
          case "furniture":
            setCategory(furniture);
            break;
          case "groceries":
            setCategory(groceries);
            break;
          case "home-decoration":
            setCategory(homeDecoration);
            break;
          case "kitchen-accessories":
            setCategory(kitchenAccessories);
            break;
          case "laptops":
            setCategory(laptops);
            break;
          case "mens-shirts":
            setCategory(menShirts);
            break;
          case "mens-shoes":
            setCategory(menShoes);
            break;
          case "mens-watches":
            setCategory(menWatches);
            break;
          case "mobile-accessories":
            setCategory(mobileAccessories);
            break;
          case "motorcycle":
            setCategory(motorcycle);
            break;
          default:
            console.log("Invalid category type");
            break;
        }
      }
    };
    findCategory();
  }, [cat, smartphone, beauty, fragrances, furniture, groceries, homeDecoration, kitchenAccessories, laptops, menShirts, menShoes, menWatches, mobileAccessories, motorcycle]);

  const title = category && category.length > 0 ? category[0].category : "";
  console.log(category);
  
  console.log(title);
  
  return (
    <>
      <section className="bg-gray-50">
        <div className="w-full lg:px-28 py-2 lg:py-4 text-sm lg:text-2xl font-bold text-slate-700 bg-slate-50 flex items-center gap-1 ">
          Categories
          <FaAngleDoubleRight />
        </div>
        <div className="w-full bg-gray-200 pb-6">
          <div className="px-28 overflow-hidden">
            <CategeriesDatails title={title} data={category} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
