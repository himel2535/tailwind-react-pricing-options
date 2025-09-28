import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { title, price, description ,features} = pricing;
  return (
    <div className="bg-amber-600 p-5 border rounded-lg">
      {/* card header */}
      <div>
        <h1 className="text-3xl">{title}</h1>
        <h5 className="text-xl">{price}</h5>
      </div>

      {/* card body */}
      <div className="bg-amber-500 p-2 rounded-xl my-2 ">
        <p className="text-lg ">{description}</p>
        {
            features.map((feature,index)=> <PricingFeatures key={index} feature={feature}></PricingFeatures>)
        }
      </div>
    </div>
  );
};

export default PricingCard;
