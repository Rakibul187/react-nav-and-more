import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0,
            features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Never Use Feature',
                'Hudai Feature',
                'Ajaira Feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99,
            features: [
                'Everything on Free',
                'Extra Feature',
                'Unnecessary Feature',
                'Never Use Feature',
                'Hudai Feature',
                'Ajaira Feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99,
            features: [
                'Everything on Premium',
                'Extra Feature',
                'Unnecessary Feature',
                'Never Use Feature',
                'Hudai Feature',
                'Ajaira Feature'
            ]
        }
    ]
    return (
        <div>
            <h1 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal Of The City!!!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 m-3 rounded-md p-3'>
                {
                    pricingOption.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;