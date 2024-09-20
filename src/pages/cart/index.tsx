import { FaAngleDoubleRight } from "react-icons/fa";

const CartPage = () => {
  return (
    <>
      <section className="w-full">
        <div className="w-full lg:px-28 py-2 lg:py-4 px-2 text-md lg:text-2xl font-bold text-slate-700 bg-slate-50 flex items-center gap-1 ">
          My Carts
          <FaAngleDoubleRight />
        </div>
        <div className="flex justify-center items-center min-h-[350px] bg-gray-50 px-4">
          <div className="max-w-xl w-full p-6 lg:p-10 bg-white shadow-lg rounded-lg border border-gray-200">
            <h1 className="text-2xl lg:text-4xl font-bold text-center text-[#F85606] mb-4">
              <span className="text-green-500">My Carts</span> Feature Coming Soon!
            </h1>
            <p className="text-gray-700 text-sm lg:text-lg text-center leading-relaxed">
              I am currently working hard to bring you a better shopping
              experience. The "My Cart" section is under development and will be
              available soon.
              <span className="block mt-2 font-medium text-[#F85606]">
                Thank you for your patience and understanding!
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
