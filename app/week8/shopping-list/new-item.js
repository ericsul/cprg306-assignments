import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [itemCreated, setItemCreated] = useState(false);

  const handleAddItem = () => {
    const newItem = {
      name,
      quantity: parseInt(quantity),
      category,
    };

    

    setItemCreated(true);
    setName("");
    setQuantity("");
    setCategory("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <main>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        {itemCreated && (
          <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
            Item Created
          </div>
        )}

        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold mb-5">Add New Item</h1>
          <div className="flex">
            <div className="flex flex-col">
              <span className="text-blue-800">Item Name:</span>
              <label className="block mb-4">
                <input
                  required
                  className="border border-blue-800 p-2 m-2"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </label>
            </div>

            <div className="flex flex-col">
              <span className="text-blue-800">Quantity:</span>
              <label className="block mb-4">
                <input
                  required
                  className="border border-blue-800 p-2 m-2"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </label>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-800">Category:</span>
              <label className="block mb-4">
                <select
                  required
                  className="border border-blue-800 p-2 m-2"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value="Produce">Produce</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Meat">Meat</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Canned Goods">Canned</option>
                  <option value="Frozen Foods">Frozen</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Dry Goods">Dry</option>
                  <option value="Household">Household</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>
          </div>

          <button
            className="hover:bg-sky-100 border border-black p-2 m-2 block w-10"
            onClick={handleAddItem}
          >
            Add
          </button>
        </div>
      </div>
    </main>
  );
}
