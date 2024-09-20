import { useState } from "react";

const BasicModal = () =>{
          const [display, setDisplay] = useState(true);

          const handleClick = ()=>{
                    setDisplay((data) => !data);
          }
          return(
                    <>
                    <section 
                    className={`bg-gray-50 border rounded-md shadow-2xl shadow-slate-800 border-gray-200 lg:max-w-80 w-2/3 py-3 lg:py-6 px-4 lg:px-6 bottom-7 left-3 lg:left-24 ${display ? 'fixed' : 'hidden'} `}>
                              <div>
                                        <h2
                                        className=" text-md lg:text-2xl font-bold text-[#F85606]">Sajilo Cart - Demo Version</h2>
                                        <hr 
                                        className="mt-1"/>

                              </div>
                              <div
                              className="mt-1 lg:mt-3">
                                        <p
                                        className="text-slate-700 leading-normal text-sm lg:text-xl text-justify">This is a demo project, and I'm still working on adding more features. Thank you for your patience as we continue to improve the site!</p>
                              </div>
                              <div
                              className="mt-1 lg:mt-3">
                                        <button
                                        className="w-full text-md lg:text-xl bg-[#F85606] hover:bg-[#F85606]/70 rounded-md py-1 lg:py-2 text-gray-50 hover:text-gray-800 font-bold"
                                        onClick={handleClick}>
                                                  Close
                                        </button>
                              </div>
                    </section>
                    </>
          )
}

export default BasicModal;