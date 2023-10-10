// /app/week4/new-item.js
"use client"
import { useState } from 'react';



function NewItem() {
  // Initialize State Variables
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  // Create a Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
    name,
    quantity,
    category,
    };
    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="border rounded-md px-3 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Quantity Field */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            className="border rounded-md px-3 py-2 w-full"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </div>

        {/* Category Field */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700">Category</label>
          <select
            id="category"
            className="border rounded-md px-3 py-2 w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
        </select>
        </div>

        {/* Submit Button */}
        <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md flex justify-center">
            +
        </button>
        </div>
    </form>
    </div>
);
}

export default NewItem;
