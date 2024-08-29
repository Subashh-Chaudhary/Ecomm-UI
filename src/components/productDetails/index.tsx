import { useState } from "react";
import { useParams } from "react-router-dom";
import { SingleSlider } from "../common/slider/__contracts/slider.contract";
import ErrorComponent from "../error/error.component";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [errorMsz, setErrorMsz] = useState("");

  const response: Array<SingleSlider> = [
    {
      _id: "p001",
      title: "Metal Octopus-Shaped Scalp Head Massager Scratcher",
      rating: "3",
      image:
        "https://img.drz.lazcdn.com/g/kf/S806439d8561949808982eac36c774d51i.jpg_400x400q80.jpg",
      price: 330,
      link: "",
    },
    {
      _id: "p002",
      title: "Creative Iron Door Hanging Hook Wall Clothes Hanger Rack",
      rating: "5",
      image:
        "https://img.drz.lazcdn.com/static/np/p/f4a5f023663bf554cfb837a463383ef4.jpg_400x400q80.jpg",
      price: 440,
      link: "",
    },
    {
      _id: "p003",
      title:
        "4 Stage Knife Sharpener Manual Kitchen Knife Sharpening Tool For All Knives",
      rating: "3",
      image:
        "https://img.drz.lazcdn.com/static/np/p/8a4e7c5f5e87cfc0262ef7b7508368ac.jpg_400x400q80.jpg",
      price: 220,
      link: "",
    },
    {
      _id: "p004",
      title: "Qi Yi Cube Rubik's Cube 3x3",
      rating: "5",
      image:
        "https://img.drz.lazcdn.com/static/np/p/b403bf8c7e8d70402701d115d1dc0897.jpg_400x400q80.jpg",
      price: 450,
      link: "",
    },
    {
      _id: "p005",
      title: "Motorcycle Phone Holder Bike Mobile Holder for Pathao Metal Body",
      rating: "2",
      image:
        "https://img.drz.lazcdn.com/static/np/p/1bb5b11f5b6cccb7910460e6e559db46.jpg_400x400q80.jpg",
      price: 670,
      link: "",
    },
    {
      _id: "p006",
      title: "Printed Messenger Bag For Women",
      rating: "2",
      image:
        "https://img.drz.lazcdn.com/static/np/p/99026ddb97495ed66c80970fc63b9672.png_400x400q80.png",
      price: 850,
      link: "",
    },
  ];

  // Handler for decrementing the quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setErrorMsz("can't purchase 0 items.");
    }
  };

  // Handler for incrementing the quantity
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setErrorMsz("");
  };

  // using useParams()
  const params = useParams();
  console.log(params);
  const product = response.find((p) => p._id === params.slug);
  console.log(product);

  // Find the product with the matching slug

  if (!product) {
    return <ErrorComponent />
  }

  // using useSearchParams()
  // const [searchParams] = useSearchParams();
  // const id = searchParams.get('id'); // Get the 'id' query parameter from the URL

  // // Find the product with the matching id
  // const product = response.find((p) => p._id === id);

  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  return (
    <>
      <h1>Product Details:</h1>
      <div className="bg-gradient-to-r from-gray-600 via-gray-900 to-gray-900 md:h-[580px] w-full">
        <div className="w-[1200px] h-full mx-auto flex gap-4">
          <div className="h-full w-2/3 relative">
            <div className="w-4/5 ms-14 overflow-hidden">
              <img
                className=" object-contain hover:scale-105 "
                src={product.image}
                alt="watch"
              />
            </div>
            <div className="flex gap-32 absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-[#333] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="bg-white w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-[#333] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="h-full w-1/2">
            <div className="lg:col-span-2 bg-gray-100 py-6 px-8 h-[580px] w-[400px]">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {product.title}
                </h2>

                <div className="flex space-x-1 mt-2">
                  <svg
                    className="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800">Price</h3>
                <p className="text-gray-800 text-3xl font-bold mt-2">
                  ${product.price}
                </p>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-bold text-gray-800">
                  Choose a Color
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <button
                    type="button"
                    className="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-red-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">Quantity</h3>
                <div className="flex divide-x border w-max mt-4 rounded overflow-hidden">
                  <button
                    className="bg-gray-800 text-white text-3xl w-10 h-9 font-semibold flex items-center justify-center"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <span className="bg-transparent w-10 h-9 font-semibold flex items-center justify-center text-gray-800 text-lg">
                    {quantity}
                  </span>
                  <button
                    className="bg-gray-800 text-white text-3xl w-10 h-9 font-semibold flex items-center justify-center"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                  <span className="ms-4 pt-2 text-sm text-red-800 ">
                    {errorMsz}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  className="min-w-full px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  className="min-w-full px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                >
                  Add to cart
                </button>
              </div>

              <div className="flex flex-wrap justify-center items-center text-sm text-gray-800 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-6 mr-3"
                  viewBox="0 0 48 48"
                >
                  <path d="M15.5 33.3h19.1v2H15.5z" data-original="#000000" />
                  <path
                    d="M45.2 35.3H43v-2h2.2c.4 0 .8-.4.8-.8v-9.1c0-.4-.3-.6-.5-.7l-3.2-1.3c-.3-.2-.8-.5-1.1-1l-6.5-10c-.1-.2-.4-.3-.7-.3H2.8c-.4 0-.8.4-.8.8v21.6c0 .4.4.8.8.8h3.9v2H2.8C1.3 35.3 0 34 0 32.5V10.9c0-1.5 1.3-2.8 2.8-2.8h31.3c1 0 1.9.5 2.4 1.3l6.5 10 .4.4 2.9 1.2c1.1.5 1.7 1.4 1.7 2.5v9.1c0 1.4-1.3 2.7-2.8 2.7z"
                    data-original="#000000"
                  />
                  <path
                    d="M26.5 21H3.9v-9.4h22.6zM5.9 19h18.6v-5.4H5.9zm32.9 2H27.9v-9.4h6.3zm-8.9-2h5.7L33 13.6h-3.1zm-19 20.9c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm0-9.2c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6zm27.9 9.2c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm0-9.2c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6z"
                    data-original="#000000"
                  />
                </svg>
                Free delivery on order $100
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-r from-gray-600 via-gray-900 to-gray-900 w-full h-[400px]">
        <div className="w-[1200px] h-full mx-auto flex gap-4 bg-slate-300">
          fsdj
        </div>
      </div> */}
    </>
  );
};

export default ProductDetails;
