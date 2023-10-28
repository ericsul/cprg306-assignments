"use client";

import React, { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

function ItemList({ name, quantity, category }) {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = (items, sortBy) => {
    return [...items].sort((a, b) =>
      sortBy === 'name' ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
    );
  };

  const handleSort = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const renderSortButton = (label, sortKey) => {
    const buttonStyle = {
      backgroundColor: sortBy === sortKey ? 'lightgreen' : 'pink',
    };

    return (
      <button onClick={() => handleSort(sortKey)} style={buttonStyle}>
        Sort by {label}
      </button>
    );
  };

  const sortedItems = sortItems(itemsData, sortBy);

  return (
    <div className="item-list-container">
      <div className="sort-buttons">
        <label>Sort by:</label>
        {renderSortButton('Name', 'name')}
        {renderSortButton('Category', 'category')}
      </div>

      <div className="item-list">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;




