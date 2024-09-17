import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png"

export const HomeHeader = () => {
  // State to toggle the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to refresh the page when the logo is clicked
  const handleLogoClick = () => {
    window.location.reload(); // Refresh the page
  };

  return (
    <>
      <div className="bg-[#F85606] grid grid-cols-12 gap-4 h-12 lg:h-20 lg:px-28 px-4 relative">
        {/* Logo */}
        <div className="col-span-4 flex items-center">
          <img
            src={logo}
            className="h-9 w-[60px] md:w-[100px] md:h-16 cursor-pointer"
            alt="Flowbite React Logo"
            onClick={handleLogoClick}
          />
        </div>

        {/* Nav Links - Hidden on small screens */}
        <div className="col-span-6 hidden lg:flex flex-col text-xl gap-1">
          <div
          className="mt-2 flex items-center">
            <input
            className="w-4/5 h-9 px-3 py-1" 
            type="text" 
            placeholder="Search on Sajilo Cart"
            />
            <button
            className="h-8 w-9 bg-[#FFE1D2] -translate-x-10">
            </button>
          </div>
          <div
          className="hidden lg:flex flex-row gap-6 text-[15px] items-center">
            <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white hover:text-orange-300'
            }>
            Home
          </NavLink>
          <NavLink 
            to="/categories" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white hover:text-orange-300'
            }>
            Categories
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white hover:text-orange-300'
            }>
            All Products
          </NavLink>
          <NavLink 
            to="/cart" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white hover:text-orange-300'
            }>
            My Cart
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white hover:text-orange-300'
            }>
            Contact
          </NavLink>
          </div>
          
        </div>

        {/* Register and Login Links */}
        <div className="col-span-2 ml-6 hidden lg:flex flex-row gap-8 text-md items-center">
          <NavLink 
            to="/register" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white hover:text-orange-300'
            }>
            Register
          </NavLink>
          <NavLink 
            to="/login" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white hover:text-orange-300'
            }>
            Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden col-span-8 flex items-center justify-end">
          <button 
            onClick={toggleMenu} 
            className="text-white text-2xl focus:outline-none p-2">
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Toggle visibility based on state */}
      {menuOpen && (
        <div className="lg:hidden absolute top-0 h-full left-0 w-2/5 right-0 bg-[#F85606] flex flex-col gap-4 p-4 z-10">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white'
            }
            onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink 
            to="/categories" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white'
            }
            onClick={() => setMenuOpen(false)}>
            Categories
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white'
            }
            onClick={() => setMenuOpen(false)}>
            All Products
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white'
            }
            onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white'
            }
            onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink 
            to="/register" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white'
            }
            onClick={() => setMenuOpen(false)}>
            Register
          </NavLink>
          <NavLink 
            to="/login" 
            className={({ isActive }) => 
              isActive ? 'block text-slate-700 ' : 'block text-white'
            }
            onClick={() => setMenuOpen(false)}>
            Login
          </NavLink>
          <div className="absolute w-4/5 bottom-20 left-3 border border-white">
          </div>
          <img
          className="absolute w-16 h-12 bottom-24 left-9" 
          src={logo} 
          alt="" />
        </div>
      )}
    </>
  );
};
