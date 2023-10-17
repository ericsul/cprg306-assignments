import React, { useState } from 'react';
import Item from './item';
import { useClient } from 'react';


// Define your items as you provided

function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [grouped, setGrouped] = useState(false);

  // Define the list of items
  const items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12];

  // Sort the items based on the selected sorting option
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group the items by category if the "grouped" state is true
  const groupedItems = grouped
    ? sortedItems.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(item);
        return acc;
      }, {})
    : null;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <div className="mb-4">
        <span className="mr-4">Sort by:</span>
        <button
          onClick={() => setSortBy('name')}
          className={`border ${sortBy === 'name' ? 'bg-blue-200' : 'bg-blue-100'} p-1 rounded`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`border ${sortBy === 'category' ? 'bg-blue-200' : 'bg-blue-100'} p-1 rounded`}
        >
          Category
        </button>
        <button
          onClick={() => setGrouped(!grouped)}
          className={`border ${grouped ? 'bg-blue-200' : 'bg-blue-100'} p-1 rounded`}
        >
          Grouped Category
        </button>
      </div>
      {grouped
        ? Object.keys(groupedItems).map((category) => (
            <div key={category}>
              <h2 className="text-xl font-bold capitalize">{category}</h2>
              {groupedItems[category].map((item) => (
                <Item key={item.name} {...item} />
              ))}
            </div>
          ))
        : sortedItems.map((item) => (
            <Item key={item.name} {...item} />
        ))}
    </div>
);
}

export default ItemList;
