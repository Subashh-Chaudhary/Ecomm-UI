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
                              image: "https://img.lazcdn.com/us/domino/38fc9632-ab75-48cc-8d31-af4d6e81cff1_NP-1976-688.jpg_2200x2200q80.jpg",
                              link: "https://www.daraz.com.np/shop/protein-nepal?path=index.htm&lang=en&pageTypeId=1&spm=a2a0e.tm80335403.bannerSliderDesktop.d_2",
                    },
                    {
                              _id: "",
                              title: "",
                              image: "https://img.lazcdn.com/us/domino/124aaa6e-0886-45ba-bad7-ce802e2d1dcd_NP-1976-688.jpg_2200x2200q80.jpg",
                              link: "https://pages.daraz.com.np/wow/gcp/route/daraz/np/upr/router?hybrid=1&data_prefetch=true&prefetch_replace=1&at_iframe=1&wh_pid=%2Flazada%2Fchannel%2Fnp%2Flong-term%2Ftech-monday&spm=a2a0e.tm80335403.bannerSliderDesktop.d_3",
                    },
                    {
                              _id: "",
                              title: "",
                              image: "https://img.lazcdn.com/us/domino/385be188-e8a3-48e1-9d7c-b5f9b61e0000_NP-1976-688.jpg_2200x2200q80.jpg",
                              link: "https://pages.daraz.com.np/wow/gcp/route/daraz/np/upr/router?hybrid=1&data_prefetch=true&prefetch_replace=1&at_iframe=1&wh_pid=%2Flazada%2Fmegascenario%2Fnp%2Fpay-day2024%2Fclothing-999&spm=a2a0e.tm80335403.bannerSliderDesktop.d_8",
                    },
                    {
                              _id: "",
                              title: "",
                              image: "https://img.lazcdn.com/us/domino/47420a07-9fe4-44f6-8687-e2d96aaf7612_NP-1976-688.jpg_2200x2200q80.jpg",
                              link: "https://pages.daraz.com.np/wow/gcp/route/daraz/np/upr/router?hybrid=1&data_prefetch=true&prefetch_replace=1&at_iframe=1&wh_pid=%2Flazada%2Fmegascenario%2Fnp%2Fpay-day2024%2Fpayday-sale&pha=true&spm=a2a0e.tm80335403.bannerSliderDesktop.d_1",
                    },
                    {
                              _id: "",
                              title: "",
                              image: "https://img.lazcdn.com/us/domino/7a4aa50b-4604-4c07-a82c-c3456391b78b_NP-1976-688.jpg_2200x2200q80.jpg",
                              link: "https://www.daraz.com.np/shop/mato-1594633189?spm=a2a0e.tm80335403.bannerSliderDesktop.d_4",
                    },
          ]
          setBannerData(response);
  }

  useEffect(() => {
          getAllBanner();
  }, []);

  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[500px]">
        <SliderComponent data={bannerData} />
      </div>
    </>
  );
};
