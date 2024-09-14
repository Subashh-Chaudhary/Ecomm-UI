import { useEffect, useState } from "react";
import { CategoryCard } from "./categoryCard";
import { SingleSlider } from "../common/slider/__contracts/slider.contract";
import HomeTitle from "../common/title/homeTitle.component";

const CategoryComponent = () => {
  const [allCategory, setAllCategory] = useState([] as Array<SingleSlider>);

  const getAllCategory = () => {
    // API call
    let response: Array<SingleSlider> = [
      {
        _id: "",
        title: "Switcher",
        image:
          "https://img.drz.lazcdn.com/static/np/p/f1189959df0c7970eeec9059c01f1ad3.png_170x170q80.png",
        link: "https://www.daraz.com.np/network-switches/?up_id=147067185&clickTrackInfo=e74155c6-db1b-4c11-a078-dbab3265a187__129__147067185__static__0.1__158061__7253&from=hp_categories&item_id=147067185&version=v2&params=%7B%22catIdLv1%22%3A%2254%22%2C%22pvid%22%3A%22e74155c6-db1b-4c11-a078-dbab3265a187%22%2C%22src%22%3A%22hp_categories%22%2C%22categoryName%22%3A%22Switches%22%2C%22categoryId%22%3A%22129%22%7D&src=hp_categories&spm=a2a0e.tm80335403.categoriesPC.d_1_129",
      },
      {
        _id: "",
        title: "Airport Router",
        image:
          "https://img.drz.lazcdn.com/static/np/p/c43c9c0f132949729c8fe90061fe10d5.jpg_170x170q80.jpg",
        link: null,
      },
      {
        _id: "",
        title: "Pregnancy Pillows",
        image:
          "https://img.drz.lazcdn.com/static/np/p/52434a0b2ea1734a4616f8047afc50c7.jpg_170x170q80.jpg",
        link: null,
      },
      {
        _id: "",
        title: "Light Bulbs",
        image:
          "https://img.drz.lazcdn.com/static/np/p/abc8369e80b35db014db2dcf5e2e7ce7.jpg_170x170q80.jpg",
        link: null,
      },
      {
        _id: "",
        title: "Infant",
        image:
          "https://img.drz.lazcdn.com/static/np/p/02403c072560e9824ce7a57f9f04bd60.jpg_170x170q80.jpg",
        link: null,
      },
      {
        _id: "",
        title: "Bath Mats",
        image:
          "https://img.drz.lazcdn.com/static/np/p/2114a7d2c833badda6175a179ddecf7c.jpg_170x170q80.jpg",
        link: null,
      },
      {
        _id: "",
        title: "Spice Tools",
        image:
          "https://img.drz.lazcdn.com/static/np/p/742dd70673bbd3f49398e60fe1a939b9.jpg_170x170q80.jpg",
        link: null,
      },
    ];

    setAllCategory(response);
  };

  useEffect(() => {
    // API call execution
    getAllCategory();
  }, []);

  return (
    <>
      <HomeTitle title="Category" />
      <div className="flex gap-2 mx-2 lg:mx-28 mt-2 lg:mt-6 flex-wrap justify-center mb-5 lg:mb-13">
        <CategoryCard data={allCategory} />
      </div>
    </>
  );
};

export default CategoryComponent;
