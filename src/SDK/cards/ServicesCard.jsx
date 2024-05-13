import React from "react";

const ServicesCard = ({ card, index }) => {
  return (
    <div className="lg:mx-auto mx-4 w-11/12 lg:w-10/12 lg:mt-2 lg:mb-6 my-4 bg-accent-white">
      <div className="order border-accent-white shadow-lg rounded-2xl pt-2">
        <div
          key={index}
          className={`flex flex-col lg:flex-row lg:px-10 sm:px-20 sm:px-4 px-2 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div
            className={`w-full lg:w-1/2 lg:mt-10 lg:px-10 ${
              index % 2 === 1 ? "lg:pr-4" : "lg:pl-4"
            }`}
          >
            <div className="block lg:hidden flex justify-center">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full max-w-md"
              />
            </div>
            <div className="mx-4 lg:mx-auto">
              <h4 className="text-base lg:text-lg font-bold text-orange-500 mb-2">
                {card.title}
              </h4>
              <p className="text-sm lg:text-base font-normal text-black mb-4">
                {card.description}
              </p>
              <div className="flex flex-wrap mt-2 lg:mt-4">
                {card.tools.map((item, index) => (
                  <div key={index} className="flex items-center my-2 lg:my-2">
                    <p className="text-[#F15D27] bg-[#FEF2EE] font-medium text-xs lg:text-sm px-4 py-2 rounded-xl whitespace-nowrap mx-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`w-full lg:w-1/2 lg:pr-auto ${
              index % 2 === 1 ? "lg:pl-4" : "lg:ml-20"
            }`}
          >
            <div className="hidden lg:block">
              <img
                src={card.imageUrl}
                alt={card.title}
                style={{ width: 500, height: 350 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemoizedServicesCard = React.memo(ServicesCard);
