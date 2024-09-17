import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ErrorComponent from "../error/error.component";
import { ProductInterface } from "../product/product.contract";
import authSvc from "../../pages/auth/auto.service";
import { toast } from "react-toastify";
import BasicLoading from "../loading/loading.component";

const ProductDetails = () => {
  // State declarations
  const [quantity, setQuantity] = useState(1);
  const [errorMsz, setErrorMsz] = useState("");
  const [allProduct, setAllProduct] = useState<ProductInterface[]>([]);
  const [product, setProduct] = useState<ProductInterface | null>(null); // Added state for selected product

  const [index, setIndex] = useState(0);
  const [image, setImage] = useState<string >(""); // Initialize with null
  const [loading, setLoading] = useState(true);

  // Fetch product list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await authSvc.getRequest("/products");
        setAllProduct(response.products);
      } catch (exception) {
        console.error("Error: ", exception);
      }
      finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Find product based on URL parameter
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      const foundProduct = allProduct.find((p) => p.id === Number(id));
      setProduct(foundProduct || null);
    }
  }, [id, allProduct]);

  // Update image state whenever index or product changes
  useEffect(() => {
    if (product && product.images[index]) {
      setImage(product.images[index]);
    } else {
      setImage("");
    }
  }, [index, product]);

  if(loading){
    return (
      <BasicLoading label="Component loading" isCenter={true}/>
    )
    
  }

  if (!product) {
    return <ErrorComponent />;
  }

  // Handler for decrementing the quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setErrorMsz("Can't purchase 0 items.");
    }
  };

  // Handler for incrementing the quantity
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setErrorMsz("");
  };

  const nextImage = () => {
    if (product.images[index + 1]) {
      setIndex((prev) => prev + 1);
    } else {
      toast.info("It's the first one...")
    }
  };

  const prevImage = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      toast.info("No more image...")
    }
  };

  console.log(product.images)

  return (
    <>
      <h1 className="py-1 md:py-2 mx-3 lg:mx-28 text-md md:text-lg font-bold">
        Categories:
      </h1>
      <div className="bg-gray-100 ">
        <h2 className="pt-1 md:pt-2 mx-3 lg:mx-28 text-sm md:text-lg font-bold">
          Product:
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-12 py-6 lg:py-6">
          <div className="flex flex-col gap-2 lg:gap-8">
            <div className="w-full px-2 lg:w-[550px] lg:h-[450px]">
              <img
                className="w-full h-full lg:hover:scale-105 transition-all ease-in-out duration-300 rounded-lg"
                src={image}
                alt="watch"
              />
            </div>
            <div className="flex justify-center gap-12 lg:gap-24 mt-2">
              <div className=" w-10 h-10 grid items-center justify-center rounded-full bg-gray-800 rotate-90 shrink-0 cursor-pointer hover:bg-gray-600 duration-100 transition-all"
              onClick={nextImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-[#fff] inline"
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
              <div className="bg-gray-800 hover:bg-gray-600 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer"
              onClick={prevImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-[#fff] inline"
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
          <div className="w-full bg-gray-200 lg:bg-transparent rounded-lg px-5  py-3 lg:max-w-[400px] lg:px-0 lg:py-0">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                {product.title}
              </h2>

              <div className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`h-5 w-5 ${
                      index < Math.round(Number(product.rating))
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="mt-4 lg:mt-8 ">
              <h3 className="text-lg font-bold text-gray-800">Price</h3>
              <p className="text-gray-800 text-3xl font-bold mt-1 lg:mt-2">
                ${product.price}
              </p>
            </div>

            <div className="mt-4 lg:mt-5">
              <h3 className="text-lg font-bold text-gray-800">
                Choose a Color
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <button
                  type="button"
                  className="w-8 h-8 lg:h-8 lg:w-8 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
                <button
                  type="button"
                  className="w-8 h-8 lg:h-8 lg:w-8 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
                <button
                  type="button"
                  className="w-8 h-8 lg:h-8 lg:w-8 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
                <button
                  type="button"
                  className="w-8 h-8 lg:h-8 lg:w-8 bg-red-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Quantity</h3>
              <div className="flex divide-x border w-max mt-4 rounded overflow-hidden">
                <button
                  className="bg-gray-800 text-white text-xl lg:text-3xl w-9 h-8 font-semibold flex items-center justify-center"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span className="bg-transparent w-9 h-8 font-semibold flex items-center justify-center text-gray-800 text-lg">
                  {quantity}
                </span>
                <button
                  className="bg-gray-800 text-white text-xl lg:text-3xl w-9 h-8 font-semibold flex items-center justify-center"
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
                className="min-w-full py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm lg:text-md font-semibold rounded"
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
              Free delivery on order Rs.120
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
