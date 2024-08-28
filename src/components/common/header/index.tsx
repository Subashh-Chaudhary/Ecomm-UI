import {Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
export const HomeHeader = () => {
  return (
    <>
      <Navbar fluid rounded className="bg-slate-100 2xl:px-10 px-1">
        <Navbar.Brand>
          <img
            src="https://flowbite-react.com/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Collapse>
            <NavLink to="/register" className={({isActive}: {isActive:boolean}) =>(isActive? 'block text-orange-600': 'block text-gray-700')}>Register</NavLink>
            <NavLink to="/login" className={({isActive}: {isActive:boolean}) =>(isActive? 'block text-orange-600': 'block text-gray-700')}>Login</NavLink>
          </Navbar.Collapse>
          {/* <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown> */}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse >
          <NavLink to="/" className={({isActive}: {isActive:boolean}) =>(isActive? 'block text-orange-600': 'block text-gray-700')}>Home</NavLink>
          <NavLink to="/about" className={({isActive}: {isActive:boolean}) =>(isActive? 'block text-orange-600': 'block text-gray-700')}>About</NavLink>
          <NavLink to="/categories" className={({isActive}: {isActive:boolean}) =>(isActive? 'block text-orange-600': 'block text-gray-700')}>Categories</NavLink>
          <NavLink to="/products" className={({isActive}: {isActive:boolean}) =>(isActive? 'block text-orange-600': 'block text-gray-700')}>All Products</NavLink>
          <NavLink to="/contact" className={({isActive}: {isActive:boolean}) =>(isActive? 'block text-orange-600': 'block text-gray-700')}>Contact</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
