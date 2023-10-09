import { useState } from 'react';

export default function Page(){
    // Initialize State Variables
const [name, setName] = useState('');
const [quantity, setQuantity] = useState(1);
const [category, setCategory] = useState('produce');

  // Create a Form Submission Handler
const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    // Reset the state variables to their initial values
    setName('');
    setQuantity(1);
    setCategory('produce');
};

  // Render the Component
return (
    <div className="max-w-md mx-auto mt-10">
    <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
        <label htmlFor="name" className="block font-medium text-gray-700">
            Name
        </label>
        <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
        </div>

        {/* Quantity Field */}
        <div>
        <label htmlFor="quantity" className="block font-medium text-gray-700">
            Quantity
        </label>
        <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            max="99"
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
        </div>

        {/* Category Field */}
        <div>
        <label htmlFor="category" className="block font-medium text-gray-700">
            Category
        </label>
        <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
        >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
        </select>
        </div>

        {/* Submit Button */}
        <div>
        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
            Submit
        </button>
        </div>
    </form>
    </div>
);
}
