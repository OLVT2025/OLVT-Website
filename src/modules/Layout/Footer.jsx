import React from "react";
import Link from "next/link";
import imageUrls from "@/constants/imageUrls";
import { MemoizedContactFrom } from "./ContactFrom";

const Footer = () => {
  return (
    <div className="font-almarai">
      <div className=" !important  max-w-7xl mx-auto">
        <MemoizedContactFrom />
      </div>

      <footer className="bg-accent-black pt-6 mb-0 text-accent-white ">
        <div className=" bg-accent-black pt-2 w-full  max-w-7xl mx-auto">
          <div className="relative  w-11/12 mx-auto mt-12 text-accent-white">
            <div className="flex flex-col gap-8  sm:flex-row justify-between">
              <div className="flex w-full sm:w-1/2 flex-row justify-between sm:justify-start sm:flex-col">
                <img
                  src={imageUrls.companyLogoWithTitle}
                  alt="Orange League logo"
                  className=" cursor-pointer w-28 sm:w-52 "
                />

                <div className="flex gap-x-4  sm:ml-14 sm:mt-3">
                  <Link target="_blank" href={"https://www.linkedin.com/company/orange-lvt"}>
                  <img src={imageUrls.linkedin} alt="linkedin" />
                  </Link>

                  <img src={imageUrls.twitter} alt="twitter" />

                  <img src={imageUrls.discord} alt="discord" />

                  <img src={imageUrls.instagram} alt="instagram" />
                </div>
              </div>

              <div className="flex w-full sm:w-1/2 flex-col  justify-center sm:justify-end">
              <h2 className="text-primary-orange text-center text-base sm:text-xl font-bold">Company</h2>

                <div className="grid grid-cols-2 w-full justify-between">
                  <div className="justify-self-center">

                  <Link href="/" className="block mb-2 hover:underline" passHref>
                      Home
                    </Link>
                    
                    <Link href="/technologies" className="block mb-2 hover:underline" passHref>
                      Technologies
                    </Link>
                  </div>
                  <div className="justify-self-center">
                  <Link href="/services" className="block mb-2 hover:underline" passHref>
                     Services
                    </Link>
                    <Link href="/about-us" className="block mb-2 hover:underline" passHref>
                      About us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 mx-auto flex text-sm font-normal sm:text-base py-2 font-almarai  justify-between  border-t border-accent-white">
              <div className="flex">
                <p className="mr-10">Privacy Policy</p>
                <p>Terms of Conditions</p>
              </div>

              <p>Orange League Ventures Technologies. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export const MemoizedFooter = React.memo(Footer);
