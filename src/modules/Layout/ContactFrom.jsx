import { MemoizedPrimaryButton } from "@/SDK/Buttons/PrimaryButton";
import { MemoizedCustomInputFiled } from "@/SDK/InputFileds/inputFiled";
import React from "react";

const ContactFrom = () => {
  return (
    <div className="lg:mx-auto mx-4 w-11/12 lg:w-9/12 lg:mt-2 lg:mb-6 my-8 order border-accent-white shadow-lg rounded-2xl py-2">
      <div className="">
        <div className="flex justify-between p-10">
          <div className="w-full lg:w-1/2 ">
            <div className="text-base font-bold text-center md:text-left hidden lg:block ">
              Let's Collaborate, <br /> Connect with Us Today
            </div>
            <div className="text-base font-bold text-center md:text-left block lg:hidden mb-4">
              Let's Collaborate, Connect with Us Today
            </div>
            <form >
              <MemoizedCustomInputFiled
                type="text"
                placeholder="Enter your name"
              />
              <MemoizedCustomInputFiled
                type="email"
                placeholder="Enter your email"
              />
              <MemoizedCustomInputFiled
                type="tel"
                placeholder="Enter your mobile number"
              />
              <div className="mb-4">
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full h-24 resize-none"
                ></textarea>
              </div>
              <MemoizedPrimaryButton buttonText={`Submit`} style="w-full" />
            </form>
          </div>
          <div className="hidden lg:block lg:w-1/2 ">
            <img
              src="/images/Contact.svg"
              alt="Image"
              className="w-full max-w-md ml-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemoizedContactFrom = React.memo(ContactFrom);
