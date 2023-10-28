"use client";

import { useState } from "react";
import React from "react";
import Item from "./item";
import itemsData from "./items.json";
import NewItem from "./new-item";

export default function ItemList({ name, quantity, category }) {
  const [sortBy, setSortBy] = useState("name");
  const [sortCategory, setSortCategory] = useState("category"); // Add a separate state for category sorting
  const sortedItems = [...itemsData];

  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortCategory === 'category') {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortCategory('category');
  };

  return (
    <>
      <div className="grid gap-2 max-w-xs m-4 p-2" style={{ display: 'flex', alignItems: 'center' }}>
        <label>Sort by:</label>
        <button
          onClick={handleSortByName}
          style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'red' }}
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{ backgroundColor: sortCategory === 'category' ? 'lightblue' : 'red' }}
        >
          Sort by Category
        </button>
      </div>

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
      </>
  );
}
