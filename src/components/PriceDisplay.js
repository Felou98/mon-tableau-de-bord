// components/PriceDisplay.js
import React from 'react';

const PriceDisplay = ({ totalPrice }) => {
    return (
        <div>
            <h3>Prix total : {totalPrice} $</h3>
        </div>
    );
};

export default PriceDisplay;