import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png"

export const HomeHeader = () => {
  return (
    <>
      <Navbar fluid rounded className="bg-slate-100 2xl:px-10 px-4">
        <Navbar.Brand>
          <img
            src={logo}
            className="mr-3 h-12 w-[100px] bg-slate-800 rounded sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Sajilo Cart
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="md:flex md:items-center md:justify-between">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <NavLink to="/" className={({isActive}: {isActive:boolean}) => (isActive ? 'block text-orange-600' : 'block text-gray-700')}>Home</NavLink>
            <NavLink to="/categories" className={({isActive}: {isActive:boolean}) => (isActive ? 'block text-orange-600' : 'block text-gray-700')}>Categories</NavLink>
            <NavLink to="/products" className={({isActive}: {isActive:boolean}) => (isActive ? 'block text-orange-600' : 'block text-gray-700')}>All Products</NavLink>
            <NavLink to="/about" className={({isActive}: {isActive:boolean}) => (isActive ? 'block text-orange-600' : 'block text-gray-700')}>About</NavLink>
            <NavLink to="/contact" className={({isActive}: {isActive:boolean}) => (isActive ? 'block text-orange-600' : 'block text-gray-700')}>Contact</NavLink>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <NavLink to="/register" className={({isActive}: {isActive:boolean}) => (isActive ? 'block text-orange-600' : 'block text-gray-700')}>Register</NavLink>
            <NavLink to="/login" className={({isActive}: {isActive:boolean}) => (isActive ? 'block text-orange-600' : 'block text-gray-700')}>Login</NavLink>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
