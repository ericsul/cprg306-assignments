import React from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useClient } from "next/data-client";

const Page = () => {
  const [items, setItems] = useClient(itemsData);
  const [selectedItemName, setSelectedItemName] = useClient("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(",")[0].trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <div className="flex">
      <div>
        <NewItem />
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <Link className="text-blue-600" href="/">
          Back To Home
        </Link>
      </div>
      <div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

// Mark the Page component as a client component
export default Page;
