import { useDeferredValue, useEffect, useState } from "react";
import ProductCard from "./productCard";
import { SingleSlider } from "../common/slider/__contracts/slider.contract";

const Product = () => {
  const [allProduct, setAllProduct] = useState([] as Array<SingleSlider>);

  const getAllProduct = () => {
    // API call
    const response: Array<SingleSlider> = [
      {
        _id: "",
        title: "Metal Octopus-Shaped Scalp Head Massager Scratcher",
        rating: "3",
        image:
          "https://img.drz.lazcdn.com/g/kf/S806439d8561949808982eac36c774d51i.jpg_400x400q80.jpg",
        price: 330,
        link: "",
      },
      {
        _id: "",
        title: "Creative Iron Door Hanging Hook Wall Clothes Hanger Rack",
        rating: "5",
        image:
          "https://img.drz.lazcdn.com/static/np/p/f4a5f023663bf554cfb837a463383ef4.jpg_400x400q80.jpg",
        price: 440,
        link: "",
      },
      {
        _id: "",
        title:
          "4 Stage Knife Sharpener Manual Kitchen Knife Sharpening Tool For All Knives",
        rating: "3",
        image:
          "https://img.drz.lazcdn.com/static/np/p/8a4e7c5f5e87cfc0262ef7b7508368ac.jpg_400x400q80.jpg",
        price: 220,
        link: "",
      },
      {
        _id: "",
        title: "Qi Yi Cube Rubik's Cube 3x3",
        rating: "5",
        image:
          "https://img.drz.lazcdn.com/static/np/p/b403bf8c7e8d70402701d115d1dc0897.jpg_400x400q80.jpg",
        price: 450,
        link: "",
      },
      {
        _id: "",
        title:
          "Motorcycle Phone Holder Bike Mobile Holder for Pathao Metal Body",
        rating: "2",
        image:
          "https://img.drz.lazcdn.com/static/np/p/1bb5b11f5b6cccb7910460e6e559db46.jpg_400x400q80.jpg",
        price: 670,
        link: "",
      },
      {
        _id: "",
        title: "Printed Messenger Bag For Women",
        rating: "2",
        image:
          "https://img.drz.lazcdn.com/static/np/p/99026ddb97495ed66c80970fc63b9672.png_400x400q80.png",
        price: 850,
        link: "",
      },
    ];
    setAllProduct(response);
  };

  useEffect(() => {
    // API call function execute at first render of componet
    getAllProduct();
  }, []);
  return (
    <>
      
      <div className="flex justify-between mt-16 mb-3 mx-2 lg:mx-12 border-b-2 border-teal-900/30 border-solid pb-2">
        <h3 className="  text-2xl font-bold text-teal-700 ">Just for you</h3>
        <p className="px-1 lg:px-5 py-1 lg:py-2 bg-teal-200 rounded-lg font-bold cursor-pointer">
          View All
        </p>
      </div>
      <div className="flex gap-4 mx-2 lg:mx-12 mt-2 lg:mt-6 flex-wrap  justify-center mb-20">
        <ProductCard data={allProduct} />
      </div>
    </>
  );
};

export default Product;
