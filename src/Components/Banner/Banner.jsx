import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="h-[50vh] flex items-start justify-start bg-cover bg-center px-10 py-10"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/rRMQSMnK/Banner-min.jpg)",
                }}
            >
                <div className="text-white max-w-md">
                    <h1 className="text-2xl font-bold mb-5">
                        Bid on Unique Items from <br /> Around the World
                    </h1>
                    <p className="mb-5">
                        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                    </p>
                    <button className="btn bg-white text-black">Explore Auctions</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;