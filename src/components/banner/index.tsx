import { useEffect, useState } from "react";
import SliderComponent from "../common/slider";
import { SingleSlider } from "../common/slider/__contracts/slider.contract";

export const Banner = () => {
  const [bannerData, setBannerData] = useState([] as Array<SingleSlider>);

  const getAllBanner = ()=>{
          // Load API
          const response:Array<SingleSlider> =  [
                    {
                              _id: "",
                              title: "",
                              image: "https://img.lazcdn.com/us/domino/c3f2d87b-8ca4-468c-9f08-ca91e1171f18_NP-1976-688.jpg_2200x2200q80.jpg",
                              link: "/category?&category=mens-shoes",
                    },
                    {
                              _id: "",
                              title: "",
                              image: "https://img.lazcdn.com/us/domino/415ac2c1-ca28-4d9a-9fed-90b0c827b8f3_NP-1976-688.jpg_2200x2200q80.jpg",
                              link: "/category?&category=beauty",
                    },
                    {
                              _id: "",
                              title: "",
                              image: "https://img.lazcdn.com/us/domino/385be188-e8a3-48e1-9d7c-b5f9b61e0000_NP-1976-688.jpg_2200x2200q80.jpg",
                              link: "/category?&category=mens-shirts",
                    },
                    {
                              _id: "",
                              title: "",
                              image: "https://img.lazcdn.com/us/domino/47420a07-9fe4-44f6-8687-e2d96aaf7612_NP-1976-688.jpg_2200x2200q80.jpg",
                              link: "/category?&category=mobile-accessories",
                    },
                    {
                              _id: "",
                              title: "",
                              image: "https://img.lazcdn.com/us/domino/7a4aa50b-4604-4c07-a82c-c3456391b78b_NP-1976-688.jpg_2200x2200q80.jpg",
                              link: "/category?&category=groceries",
                    },
          ]
          setBannerData(response);
  }

  useEffect(() => {
          getAllBanner();
  }, []);

  return (
    <>
      <div className="h-36 lg:h-64 xl:h-80 2xl:h-[500px] lg:mx-28">
        <SliderComponent data={bannerData} />
      </div>
    </>
  );
};
