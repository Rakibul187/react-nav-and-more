import React from 'react';
import Feature from '../../Feature/Feature';

const PriceOption = ({ option }) => {
    const { features } = option
    return (
        <div className='m-3 bg-indigo-300 rounded-md p-3'>
            <h3><span className='text-6xl font-bold text-white'>{option.price}</span><span className='text-2xl text-gray-200'>/month</span></h3>
            <p className='text-3xl my-4'>{option.name}</p>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='bg-green-500 w-full rounded-md py-3 mt-4 text-white font-bold hover:bg-green-800 '>Buy Now</button>
        </div>
    );
};

export default PriceOption;