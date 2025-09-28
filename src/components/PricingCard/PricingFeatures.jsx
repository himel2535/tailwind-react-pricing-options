import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    
    return (
        <p className='flex items-center mt-1'><CircleCheckBig className='w-[15px] h-[15px] mr-3'></CircleCheckBig>{feature}</p>
    );
};

export default PricingFeatures;