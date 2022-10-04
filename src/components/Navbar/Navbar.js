import React, { useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: './home' },
        { id: 2, name: 'Products', path: './products' },
        { id: 3, name: 'Orders', path: './orders' },
        { id: 4, name: 'Contact', path: './contact' },
        { id: 5, name: 'About', path: './about' }
    ]
    return (
        <nav className='bg-purple-200'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 lg:hidden">
                {
                    open ?
                        <XMarkIcon />
                        : <Bars3Icon />
                }
            </div>


            <ul className={`lg:flex justify-center absolute lg:static duration-500 ease-in w-full bg-purple-200 ${open ? 'top-6' : 'top-[-150px]'}`}>
                {routes.map(route => <NavItem key={route.id} route={route}></NavItem>)}
            </ul>
        </nav>
    );
};

export default Navbar;


// {<nav className='bg-purple-200 w-full'>
// <div onClick={() => setOpen(!open)} className="h-6 w-6 block md:hidden">
//     {
//         open ? <XMarkIcon /> : <Bars3Icon />
//     }
// </div>

// <ul className={`bg-purple-200 w-full md:flex md:static text-xl justify-center duration-500 ease-in absolute ${open ? 'top-6' : 'top-[-150px]'}`}>
//     {routes.map(route => <NavItem key={route.id} route={route}></NavItem>)}
// </ul>
// </nav>}