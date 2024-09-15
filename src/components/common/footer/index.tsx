"use client";

import logo from "../../../assets/images/logo.png";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterPage = () => {
  return (
    <Footer container className="w-full px-5 lg:px-28 mx-auto bg-white">
      <div className="w-full">
        <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between lg:items-center">
          <div className="mb-6 lg:mb-0 cursor-pointer">
            <img 
            className= " w-16 h-10 lg:w-32 lg:h-24 bg-slate-600 rounded"
            src={logo} alt="" />
          </div>
          

          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Offers</Footer.Link>
                <Footer.Link href="#">Service</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Footer.Divider className="my-6" />

        {/* Copyright and Social Icons */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="SajiloCart" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterPage;
