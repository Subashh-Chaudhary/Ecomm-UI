import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { DataContext } from "../../../contexts/dataContext";

export const HomeHeader = () => {
  // State to toggle the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  const context = useContext(DataContext);
  const handleChange = context?.handleStatusChange;

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-[#F85606] sticky left-0 top-0 z-10  grid grid-cols-12 gap-4 h-12 lg:h-20 lg:px-28 px-4">
        {/* Logo */}
        <Link to="/" className="col-span-4 flex items-center">
          <img
            src={logo}
            className="h-9 w-[60px] md:w-[100px] md:h-16 cursor-pointer"
            alt="Flowbite React Logo"
          />
        </Link>

        {/* Nav Links - Hidden on small screens */}
        <div className="col-span-6 hidden lg:flex flex-col text-xl gap-1">
          <div className="mt-2 flex items-center">
            <input
              className="w-4/5 h-9 px-3 py-1 focus:ring-gray-700"
              type="text"
              placeholder="Search on Sajilo Cart"
            />
            <button className="h-8 w-9 bg-[#FFE1D2] rounded-sm -translate-x-10 flex justify-center items-center">
              <FaSearch />
            </button>
          </div>
          <div className="hidden lg:flex flex-row gap-6 text-[15px] items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block text-slate-700 "
                  : "block text-white hover:text-orange-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? "block text-slate-700 "
                  : "block text-white hover:text-orange-200"
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "block text-slate-700 "
                  : "block text-white hover:text-orange-200"
              }
            >
              All Products
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "block text-slate-700 "
                  : "block text-white hover:text-orange-200"
              }
            >
              My Cart
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "block text-slate-700 "
                  : "block text-white hover:text-orange-200"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Register and Login Links */}
        <div className="col-span-2 justify-end mr-4 hidden lg:flex flex-row gap-8 text-md items-center">
          {context?.isLoggedin ? (
            <div
              className="text-gray-50 cursor-pointer hover:text-orange-200"
              onClick={handleChange}
            >
              Logout{" "}
            </div>
          ) : (
            <>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "block text-slate-700 "
                    : "block text-white hover:text-orange-200"
                }
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "block text-slate-700 "
                    : "block text-white hover:text-orange-200"
                }
              >
                Login
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden col-span-8 flex items-center justify-end">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none p-2"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Toggle visibility based on state */}
      {menuOpen && (
        <div className="lg:hidden absolute top-0 h-full left-0 w-2/5 right-0 bg-[#F85606] flex flex-col gap-4 p-4 z-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "block text-slate-700 " : "block text-white"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? "block text-slate-700 " : "block text-white"
            }
            onClick={() => setMenuOpen(false)}
          >
            Categories
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "block text-slate-700 " : "block text-white"
            }
            onClick={() => setMenuOpen(false)}
          >
            All Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "block text-slate-700 " : "block text-white"
            }
            onClick={() => setMenuOpen(false)}
          >
            My Cart
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "block text-slate-700 " : "block text-white"
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
          {context?.isLoggedin ? (
            <div
            className="text-gray-50 cursor-pointer hover:text-orange-200"
            onClick={handleChange}
          >
            Logout{" "}</div>
          ) : (
            <>
              {" "}
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "block text-slate-700 " : "block text-white"
                }
                onClick={() => setMenuOpen(false)}
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "block text-slate-700 " : "block text-white"
                }
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
            </>
          )}

          <div className="absolute w-4/5 bottom-20 left-3 border border-white"></div>
          <img
            className="absolute w-16 h-12 bottom-24 left-9"
            src={logo}
            alt=""
          />
        </div>
      )}
    </>
  );
};
