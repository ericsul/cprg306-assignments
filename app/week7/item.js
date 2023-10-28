import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <div
      className="text-4xl border border-red-300 bg-green-300 font-bold text-blue-400 w-full max-w-xs m-4 p-2"
      onClick={() => onSelect(name)}
    >
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Item;
