import React from "react";
import { MemoizedCustomTitle } from "../GenericComponents/CustomTitle";
import imageUrls from "@/constants/imageUrls";

const imageUrlList = [
  `${imageUrls?.laptop}`,
  `${imageUrls?.laptop}`,
  `${imageUrls?.laptop}`,
  `${imageUrls?.laptop}`,
];

const AboutProduct = ({ imageUrlList, aboutProductContent , challengesContent, solutionContent}) => {
  return (
    <div className="px-2 py-6 m-2">
      <div className="flex justify-start my-2">
        <MemoizedCustomTitle title={`About Product`} />
      </div>

      <div dangerouslySetInnerHTML={{ __html: aboutProductContent }} className="prose" />

      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 py-6`}>
      {imageUrlList?.map((imageUrl, index) => (
         <div key={index} className="w-full h-60  rounded-3xl">
        <img
          
          src={imageUrl}
          alt={`${index + 1}`}
          className="w-full h-full object-cover rounded-3xl"
        />
        </div>
      ))}
    </div>

    

      <div>
        <div className="flex justify-start my-2">
          <MemoizedCustomTitle title={`Challenges`} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: challengesContent }} className="prose" />
      </div>

      <div>
        <div className="flex justify-start mt-12 mb-2">
          <MemoizedCustomTitle title={`Solution`} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: solutionContent }} className="prose" />
      </div>
    </div>
  );
};

export default AboutProduct;
