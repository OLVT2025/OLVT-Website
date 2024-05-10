import React from "react";
import Link from "next/link";
import imageUrls from "@/constants/imageUrls";
import { MemoizedContactFrom } from "./ContactFrom";

const Footer = () => {
  return (
    <>
      <div className="md:mx-32 !important">
        <MemoizedContactFrom />
      </div>

      <footer className="bg-accent-black py-6 text-accent-white">
        <div className=" bg-accent-black pt-2 w-full">
          <div className="relative w-11/12 mx-auto mt-12 text-accent-white">
            <div className="flex flex-col gap-8  sm:flex-row justify-between">
              <div className="flex w-full sm:w-1/2 flex-row justify-between sm:justify-start sm:flex-col">
                <p>Logo-socialmedia url</p>

                <div className="flex gap-x-4 sm:mt-5">
                  <img src={imageUrls.linkedin} alt="linkedin" />

                  <img src={imageUrls.twitter} alt="twitter" />

                  <img src={imageUrls.discord} alt="discord" />

                  <img src={imageUrls.instagram} alt="instagram" />
                </div>
              </div>

              <div className="flex w-full sm:w-1/2 justify-between">
                <FooterSection title="Product">
                  <p>Features</p>
                  <p>Integrations</p>
                  <p>Changelog</p>
                  <p>RoadMap</p>
                </FooterSection>

                <FooterSection title="Company">
                  <p>Our team</p>
                  <p>Our values</p>
                  <p>Blog</p>
                </FooterSection>

                <FooterSection title="Resources">
                  <p>Downloads</p>
                  <p>Documentation</p>
                  <p>Contacts</p>
                </FooterSection>
              </div>
            </div>
            <div className="my-10 mx-auto flex py-2 font-almarai   justify-between  border-t border-accent-white">
              <div className="flex">
                <p className="mr-10">Privacy Policy</p>
                <p>Terms of Conditions</p>
              </div>

              <p>Orange LVT Enterprises. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const FooterSection = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-primary-orange font-bold">{title}</h1>
      {children}
    </div>
  );
};

export const MemoizedFooter = React.memo(Footer);
