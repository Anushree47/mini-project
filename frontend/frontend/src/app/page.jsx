'use client'
import React, { useState } from 'react'
import CategoryDropdown from './CategoryDropdown/page';


const App = () => {
    // const [searchQuery, setSearchQuery] = useState("");

    // const handleSearch = () => {  
    // alert(Searching : {searchQuery});
    // };

    const categories = [
    // { id: 1, name: "Tractors", img },
    // { id: 2, name: "Harvesters", image: "harvester.jpg" },
    // { id: 3, name: "Irrigation Systems", image: "irrigation.jpg" },
    // { id: 4, name: "Soil Tools", image: "soil.jpg" },
    // {   }
    ];

    const benefits = [
    "Affordable Rentals",
    "Easy Booking Process",
    "Well-Maintained Equipment",
    "Nationwide Availability",
    ];

    return (
    <div className="font-sans">
      
      {/* Search Section */}
      <div className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-4">Find Equipment Near You</h2>
        <div className="flex justify-center">
            <input
            type="text"
            placeholder="Search equipment..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-1/2 border rounded-l-lg"
            />
            <button
            // onClick={handleSearch}
            className="px-6 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-500"    >
            Search
          </button>
        </div>
      </div>
    
      {/* Hero Section */}
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/heroo.jpg')" }}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Efficient Farming Starts Here</h1>
            <p className="text-lg mb-6">Rent Top-Quality Agricultural Equipment at Affordable Rates</p>
            <div className="space-x-4">
            <button className="w-30 px-6 py-2 bg-blue-600 rounded-lg hover:bg-green-500 text-lg">Browse Equipment</button>
            <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-green-500"><CategoryDropdown/></button>
        
      
            </div>
        </div>
        </div>

{/* 
      Categories Section
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg"
            >
              <img
                src="category.jpg"
                alt={category.name}
                className="h-32 w-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div> */}

      {/* Why Choose Us Section */}
      <div className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full mb-4">
                ✓
              </div>
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default App;