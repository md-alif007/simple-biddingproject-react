import React from 'react';

const Card = ({ card, handleBidNow }) => {
    return (
        <div >
            <div className="card bg-base-100 image-full">
                <figure>
                    <img
                        src={card.img}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{card.item}</h2>
                    <h2 className='font-semibold'>Current Bid : {card.currentBid}</h2>
                    <h2 className='font-semibold'>Time left   : {card.timeLeft}</h2>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleBidNow()}
                            className="btn hover:bg-slate-300 hover:text-black">
                            Bid Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;