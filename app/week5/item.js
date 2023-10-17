import React from 'react';
import { useClient } from 'react';

function Item({ name, quantity, category }) {
return (
    <div className="border p-2 mb-2">
    {name}
    <br />
    Buy {quantity} in {category}
    </div>
);
}

export default Item;

