import React from 'react';

const Footer = () => {
    return (
        <div className='text-center p-5'>
            <div>
                <h1 className='text-3xl'><span className='text-blue-800'>Auction</span><span className='font-bold text-yellow-500'>Gallery</span></h1>
            </div>
            <div className='flex gap-5 justify-center mt-3'>
                <h1>Bid.</h1>
                <h1>Win.</h1>
                <h1>Own.</h1>
            </div>
            <div className='flex gap-5 justify-center mt-3'>
                <h1>Home</h1>
                <h1>Auctions</h1>
                <h1>Categorie</h1>
                <h1>How to work</h1>
            </div>
            <p className='mt-5 mb-2'>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;