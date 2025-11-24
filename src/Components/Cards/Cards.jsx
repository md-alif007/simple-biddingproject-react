import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("auction.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className='grid grid-cols-2 gap-2.5'>
            {
                cards.map((card)=><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;