import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { title, price, description ,features} = pricing;
  return (
    <div className="bg-amber-600 p-5 border rounded-lg flex flex-col">
      {/* card header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">{title}</h1>
        <h5 className="text-xl">{price}</h5>
      </div>

      {/* card body */}
      <div className="bg-amber-500 p-2 rounded-xl my-2 flex-1">
        <p className="text-lg ">{description}</p>
        {
            features.map((feature,index)=> <PricingFeatures key={index} feature={feature}></PricingFeatures>)
        }
      </div>
      <button className="btn w-full">Subscribe</button>
    </div>
  );
};

export default PricingCard;
