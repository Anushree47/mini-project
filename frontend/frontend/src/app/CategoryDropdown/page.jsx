import React, { useState } from 'react';

const CategoryDropdown = () => {
  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Event handler for dropdown change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="flex  items-center justify-center  bg-gray-600">
      <label className="text-lg font-semibold mb-2">Select Category:</label>
      <select
        className="block w-64 px-4 py-2 border rounded-md shadow-sm bg-red-100 text-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="" disabled>Select an option</option>
        <option value="Harvestor Tools">Harvestor Tools</option>
        <option value="Tractors">Tractors</option>
        <option value="Irrigation Tools">Irrigation Tools</option>
        <option value="Soil Tools">Soil Tools</option>
        <option value="Seeds">Seeds</option>
      </select>

      {selectedCategory && (
        <div className="mt-4 text-lg text-blue-600 font-medium">
          Selected Category: {selectedCategory}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;