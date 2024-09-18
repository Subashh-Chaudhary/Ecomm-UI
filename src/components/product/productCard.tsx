import { Card } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { ProductInterface, ProductProps } from "./product.contract";

const ProductCard = ({ data, isInHomePage }: ProductProps) => {
  // Define the maximum length for the title
  const maxLength: number = 30;

  // Process data to truncate titles
  let processedData: ProductInterface[];
  if(isInHomePage){
    const slicedData = data.slice(0, 18);
    processedData = slicedData.map((item: ProductInterface) => {
      const truncatedTitle = item.title.length > maxLength
        ? item.title.substring(0, maxLength - 2) + "..."
        : item.title;
      data
      return {
        ...item,
        title: truncatedTitle
      };
    });
  }
  else{
    processedData = data.map((item: ProductInterface) => {
      const truncatedTitle = item.title.length > maxLength
        ? item.title.substring(0, maxLength - 2) + "..."
        : item.title;
      data
      return {
        ...item,
        title: truncatedTitle
      };
    });
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {processedData && processedData.map((row: ProductInterface, i: number) => (
        <NavLink key={i} to={`/product?id=${row.id}&title=${encodeURIComponent(row.title)}`}>
        
        <Card
          className="w-full sm:h-auto max-w-[150px] md:max-w-[250px] hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <div className="relative w-full">
            <img
              className="object-cover w-full h-36"
              src={row.images[0]}
              alt={row.title}
            />
          </div>
          <NavLink to={`/product?id=${row.id}&title=${encodeURIComponent(row.title)}`}>
            <h5 className="text-[14px] md:text-sm lg:text-base font-semibold tracking-tight text-gray-900 dark:text-white sm:mt-2 lg:h-10">
              {row.title}
            </h5>
          </NavLink>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`h-5 w-5 ${index < Math.round(Number(row.rating)) ? 'text-yellow-300' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 rounded bg-cyan-100 px-2 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              {row.rating}
            </span>
          </div>
          <div className="flex items-center gap-1 lg:gap-2 justify-between">
            <span className="text-[12px] md:text-sm lg:text-[15px] font-bold text-gray-900 dark:text-white">
              ${row.price}
            </span>
            <NavLink
              to={`/product?id=${row.id}&title=${encodeURIComponent(row.title)}`}
              className="rounded-lg bg-cyan-700 px-[6px] lg:px-2 md:px-3 py-3 md:py-2 text-[9px] md:text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add Cart
            </NavLink>
          </div>  
        </Card>
        </NavLink>
      ))}
    </div>
  );
};

export default ProductCard;
