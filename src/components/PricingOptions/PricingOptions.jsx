import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  
  return (
    <div className="mx-10">
      <h2 className="text-4xl mb-5">Get Our Membership</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
