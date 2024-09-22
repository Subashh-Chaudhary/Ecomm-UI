  import { useContext } from "react";
  import { DataContext } from "../../contexts/dataContext";
  import { CartItemDetails } from "../../contexts/contract.context";
  import { Link } from "react-router-dom";

  const CartPage = () => {
    const context = useContext(DataContext);
    const response = context?.carts ?? [];
    const count = context?.cartCount ?? 0;
    
    const handleDeleteCart = (id: number) => {
      if (context && context.deleteCart) {
        context.deleteCart(id);
      }
    };

    return (
      <>
          <section className="bg-gray-50">
            <div className="w-full lg:px-28 py-2 lg:py-4 px-2  bg-slate-50 ">
              <div
              className="flex w-fit items-center gap-1 relative">
                <h3
              className="text-md lg:text-2xl font-bold text-slate-700 ">
                My Carts
              </h3>
              <p
              className={`${count < 1 ? 'hidden' : 'h-4 w-4 text-[10px] md:h-6 md:w-6 rounded-full bg-[#F85606] flex items-center justify-center text-white absolute top-0 -right-4 md:-right-6'}`}>
                {count}
              </p>
              </div>
                
            </div>
            {
              context && context.carts.length !==0 ? <div className="w-full bg-gray-200 md:pb-6 overflow-hidden">
              <div className="max-w-[1200px] bg-gray-50 my-3  py-2 px-4 rounded mx-auto shadow-2xl">
                <div className="my-2 grid grid-cols-12 ">
                  <div className="col-span-5 sm:col-span-6 text-slate-700 font-bold text-sm sm:text-xl">
                    <h3>Items</h3>
                  </div>
                  <div className="col-span-2 text-slate-700 font-bold text-sm sm:text-xl">
                    <h3>Price</h3>
                  </div>
                  <div className=" col-span-3 sm:col-span-2 text-slate-700 font-bold text-sm sm:text-xl">
                    <h3>Quantity</h3>
                  </div>
                  <div className="col-span-2 text-slate-700 font-bold text-sm sm:text-xl">
                    <h3>Total</h3>
                  </div>
                </div>
                <hr />
                <div>
                  {response &&
                    response.map((item: CartItemDetails) => (
                      <>
                        <div
                          key={item.id}
                          className="my-5 grid grid-cols-12 items-center"
                        >
                          <div className="col-span-5 sm:col-span-6 flex items-center sm:gap-3">
                            <div className="h-16 w-16 md:w-24 md:h-24 overflow-hidden">
                              <img src={item.image} alt="" />
                            </div>
                            <div>
                              <div className=" text-[11px] md:text-2xl font-bold">
                                <h2>{item.name}</h2>
                              </div>
                              <button
                                className="bg-red-500 sm:mt-1 text-white px-2 py-1 text-[7px] sm:text-sm rounded hover:bg-red-600 transform hover:-translate-y-1 transition-transform duration-200"
                                onClick={() => handleDeleteCart(item.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                          <div className="col-span-2 text-[11px] sm:text-sm font-bold">
                            <h3>${item.price.toFixed(2)}</h3>
                          </div>
                          <div className="col-span-3 sm:col-span-2 text-[11px] sm:text-sm font-bold">
                            <h3>{item.quantity}</h3>
                          </div>
                          <div className="col-span-2 text-[11px] sm:text-sm font-bold">
                            <h3>{item.totalPrice.toFixed(2)}</h3>
                          </div>
                        </div>
                        <hr />
                      </>
                    ))}

                  <div className="my-6  flex flex-col gap-1 items-end mr-2.5 sm:mr-5">
                    <div className="font-bold bg-white text-sm md:text-xl">
                      Grand Total: $
                      {context &&
                        context.carts
                          .reduce((acc, item) => acc + item.totalPrice, 0)
                          .toFixed(2)}
                    </div>
                    <div
                    className="px-2 py-1 md:px-6 sm:py-2 bg-[#F85606] text-white text-sm sm:text-lg rounded font-bold">
                      Checkout
                    </div>
                  </div>
                </div>
              </div>
            </div> : 
            <div
            className="flex min-h-[350px] flex-col gap-2 items-center justify-center"
            >
              <div
              className="h-24 w-24 sm:h-48 sm:w-48 overflow-hidden">
                <img src="https://www.pngplay.com/wp-content/uploads/1/Shopping-Cart-PNG-HD-Free-Image.png" alt="cart" />
              </div>
              <p
              className="text-sm sm:text-md text-slate-700"
              >There are no items in this cart</p>
              <Link
              to= "/products">
              <button
              className="bg-transparent px-3 sm:px-6 text-[#F85606] border border-[#F85606] font-bold text-md sm:text-2xl rounded  py-3"> CONTINUE SHOPPING</button>
              </Link>
            </div>
            }
            
          </section>
      </>
    );
  };

  export default CartPage;
