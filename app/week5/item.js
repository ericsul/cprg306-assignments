import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-100 p-4 mb-2 rounded-md shadow-md">
      <div className="font-semibold text-lg">{name}</div>
      <div className="text-sm text-gray-600">Category: {category}</div>
      <div className="text-sm text-gray-600">Quantity: {quantity}</div>
    </li>
  );
};

export default Item;
