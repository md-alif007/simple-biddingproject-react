import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({ handleBidNow, handleBidMoney }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("auction.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className='grid grid-cols-2 gap-2.5'>
            {
                cards.map((card) =>
                    <Card
                        key={card.id}
                        card={card}
                        handleBidNow={handleBidNow}
                        handleBidMoney={handleBidMoney}
                    >
                    </Card>)
            }
        </div>
    );
};

export default Cards;