import React from 'react';

import './card.css';

const Card = ({ monster }) => {
    const { name, id, email } = monster;
    return (
        <div className="card-container">
            <img alt="Monster" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card