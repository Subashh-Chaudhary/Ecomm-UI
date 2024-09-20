import { Card } from "flowbite-react";
import { CategoriesInterface } from "../../api/contract/categories.api";
import { NavLink } from "react-router-dom";
import beauty from "../../assets/images/categories/beauty.jpeg";
import bike from "../../assets/images/categories/bike.jpeg";
import decoration from "../../assets/images/categories/decoration.jpeg";
import fragrences from "../../assets/images/categories/fragrences.png";
import furniture from "../../assets/images/categories/furnitures.jpeg";
import groceries from "../../assets/images/categories/groceries.png";
import kitchen from "../../assets/images/categories/kitchen.jpeg";
import laptop from "../../assets/images/categories/laptop.jpeg";
import mobileAssoc from "../../assets/images/categories/mobileAssoc.png";
import shirt from "../../assets/images/categories/shirt.jpeg";
import shoes from "../../assets/images/categories/shoes.jpeg";
import watch from "../../assets/images/categories/watch.jpeg";
import { useEffect, useState } from "react";

export const CategoryCard = ({ data }: { data:CategoriesInterface[]}) => {
  // Limit the data to the first 6 categories
  const limitedData = data.slice(0, 12);
  let [index, setIndex] = useState(0);

  useEffect(() =>{
    setIndex((index) => index + 1)
  }, [data])

  // // Setting the category image locally
  const localImage = [beauty, fragrences, furniture, groceries, decoration, kitchen, laptop, shirt, shoes, watch, mobileAssoc, bike]

  return (
    <div className="grid grid-cols-3 gap-2 md:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {limitedData.map((row: CategoriesInterface, i: number) =>
        row.url ? (
          <NavLink key={i} to={`/category?&category=${encodeURIComponent(row.slug)}`} className="transition-transform transform hover:translate-y-[-5px]">
            <Card className="w-full h-full cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <div className="relative w-full aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={localImage[i]}
                  alt={row.name}
                />
              </div>
              <div className="md:px-4">
                <h5 className="text-sm lg:text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  {row.name}
                </h5>
              </div>
            </Card>
          </NavLink>
        ) : (
          <Card
            key={i}
            className="w-full h-full cursor-pointer hover:shadow-2xl transition-transform transform hover:translate-y-[-5px]"
          >
            <div className="relative w-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={localImage[index]}
                alt={row.name}
              />
            </div>
            <div className="md:px-4">
              <h5 className="text-sm lg:text-base font-bold tracking-tight text-gray-900 dark:text-white">
                {row.name}
              </h5>
            </div>
          </Card>
        )
      )}
    </div>
  );
};
