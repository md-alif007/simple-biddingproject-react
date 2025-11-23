import React from 'react';

const Navbar = () => {
    return (
        <nav className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <h1 className='text-3xl'><span className='text-blue-800'>Auction</span><span className='font-bold text-yellow-500'>Gallery</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to work</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Log Out</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;