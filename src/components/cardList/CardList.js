import React from 'react';

import Card from '../card/Card.js';

import './cardList.css';

const CardList = (props) => {
    const { monsters } = props;
    return (
        <div className="card-list">
            {
                monsters && monsters.length > 0 && monsters.map((monster) => (
                    <Card 
                        key={monster.id}
                        monster={monster}
                    />
                ))
            }
        </div>
    )
};

export default CardList