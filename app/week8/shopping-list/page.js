"use client";

import React, { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useUserAuth } from "../_utils/auth-context";


const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [ingredient, setIngredient] = useState();
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();


  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(",")[0].trim();
    setSelectedItemName(cleanedItemName);
  };

  const handldeIngredientSelect = (ingredient) => {
    // Use a regular expression to remove emojis from the ingredient name
    const cleanedIngredient = ingredient.replace(/\p{Emoji}/gu, '');
    setIngredient(cleanedIngredient);
  }
  

  return (
    <main>
      {user ? ( 
        <div className="flex">
        <div>
          <NewItem />
          <ItemList items={items} onItemSelect={handleItemSelect} onIngredientSelect={handldeIngredientSelect} />
          <Link className="text-blue-600" href="/">
            Back To Home
          </Link>
        </div>
        <div>
          <MealIdeas ingredient={ingredient} />
        </div>
      </div>
      ) : (
        <div>
          <p>You must be logged in to view this content.</p>
        </div>
        ) }
    
    </main>
  );
};

// Mark the Page component as a client component
export default Page;
