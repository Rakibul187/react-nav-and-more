import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div>
            <div className='flex items-center'>
                <span> <CheckCircleIcon className="h-6 w-6 text-green-500" /></span><span className='ml-2'>{feature}</span>
            </div>
        </div>
    );
};

export default Feature;