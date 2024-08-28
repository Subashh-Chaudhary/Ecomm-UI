import {Navbar } from "flowbite-react";
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
            <Navbar.Link href="/register">Register</Navbar.Link>
            <Navbar.Link href="/login">Login</Navbar.Link>
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
          <Navbar.Link href="/" className="text-sm md:text-xl lg:text-[17px]"  active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about" className="text-sm md:text-xl lg:text-[17px]"  >About</Navbar.Link>
          <Navbar.Link href="/categories" className="text-sm md:text-xl lg:text-[17px]"  >Categories</Navbar.Link>
          <Navbar.Link href="/products" className="text-sm md:text-xl lg:text-[17px]"  >All Products</Navbar.Link>
          <Navbar.Link href="/contact" className="text-sm md:text-xl lg:text-[17px]"  >Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
