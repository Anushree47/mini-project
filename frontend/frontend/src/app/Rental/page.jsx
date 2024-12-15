// 'use client'
// import axios from 'axios'
// import { useRouter } from 'next/router'
// import { useRouter } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

// function App() {
//     const router= useRouter();
//   const [tools, setTools] = useState([]); // List of tools fetched from backend
//   const [selectedTool, setSelectedTool] = useState(null); // Tool selected by the user
//   const [rentalDays, setRentalDays] = useState(""); // Number of rental days
//   const [address, setAddress] = useState(""); // User's address
//   const [totalAmount, setTotalAmount] = useState(0); // Calculated total rental cost

//   // Fetch tools data from backend on component mount
//   useEffect(() => {
//     // Simulating backend API call
//     const fetchTools = async () => {
//       const res = await axios.get("http://localhost:5000/product/getall"); // Replace with actual backend endpoint
//       const data = await response.json();
//       setTools(data);
//     };
//     fetchTools();
//   }, []);

//   // Handle tool selection
//   const handleToolSelect = (tool) => {
//     setSelectedTool(tool);
//     setRentalDays("");
//     setTotalAmount(0);
//   };

//   // Calculate total amount based on rental days and tool rate
//   const handleDaysChange = (e) => {
//     const days = parseInt(e.target.value, 10) || 0;
//     setRentalDays(days);
//     if (selectedTool) {
//       setTotalAmount(days * selectedTool.price);
//     }
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // alert(Tool: ${selectedTool.name}\nDays: ${rentalDays}\nAddress: ${address}\nTotal Amount: $${totalAmount});
//     // // Submit this data to backend via POST API call
//     // // Example: fetch('https://api.example.com/rent', { method: 'POST', body: JSON.stringify(...) })
//     // const  response = await axios.post(("http://localhost:5000/product/add", );)
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Tool Rental Portal</h1>

//       {/* Tools List */}
//       <div className="mb-4">
//         <h2 className="text-xl mb-2">Available Tools</h2>
//         {tools.length > 0 ? (
//           <ul className="list-disc ml-6">
//             {tools.map((tool) => (
//               <li
//                 key={tool.id}
//                 className="cursor-pointer text-blue-500"
//                 onClick={() => handleToolSelect(tool)}
//               >
//                 {tool.name} - ${tool.rate} per day
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Loading tools...</p>
//         )}
//       </div>

//       {/* Rental Form */}
//       {selectedTool && (
//         <form onSubmit={handleFormSubmit} className="border p-4 rounded shadow">
//           <h2 className="text-lg font-semibold mb-2">
//             Rent {selectedTool.name}
//           </h2>
//           <div className="mb-2">
//             <label className="block">Number of Days:</label>
//             <input
//               type="number"
//               value={rentalDays}
//               onChange={handleDaysChange}
//               min="1"
//               className="border rounded w-full p-1"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block">Address:</label>
//             <textarea
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               rows="3"
//               className="border rounded w-full p-1"
//               required
//             ></textarea>
//           </div>
//           <div className="mb-2">
//             <p>
//               <strong>Total Amount:</strong> ${totalAmount}
//             </p>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
//           >
//             Submit Rental
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default App;

'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'; // Correct import
import React, { useEffect, useState } from 'react'

function App() {
    const router = useRouter(); // useRouter now works correctly

    const [tools, setTools] = useState([]); // List of tools fetched from backend
    const [selectedTool, setSelectedTool] = useState(null); // Tool selected by the user
    const [rentalDays, setRentalDays] = useState(""); // Number of rental days
    const [address, setAddress] = useState(""); // User's address
    const [totalAmount, setTotalAmount] = useState(0); // Calculated total rental cost

    // Fetch tools data from backend on component mount
    useEffect(() => {
        const fetchTools = async () => {
            const res = await axios.get("http://localhost:5000/product/getall"); // Correct API call
            const data = res.data; // Use res.data to get the data from the axios response
            setTools(data);
        };
        fetchTools();
    }, []);

    // Handle tool selection
    const handleToolSelect = (tool) => {
        setSelectedTool(tool);
        setRentalDays("");
        setTotalAmount(0);
    };

    // Calculate total amount based on rental days and tool rate
    const handleDaysChange = (e) => {
        const days = parseInt(e.target.value, 10) || 0;
        setRentalDays(days);
        if (selectedTool) {
            setTotalAmount(days * selectedTool.price);
        }
    };

    // Handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // Example: alert for form submission
        alert(`Tool: ${selectedTool.name}\nDays: ${rentalDays}\nAddress: ${address}\nTotal Amount: $${totalAmount}`);
        // Submit this data to the backend via a POST API call
        // Example: axios.post("http://localhost:5000/product/add", { ... });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Tool Rental Portal</h1>

            {/* Tools List */}
            <div className="mb-4">
                <h2 className="text-xl mb-2">Available Tools</h2>
                {tools.length > 0 ? (
                    <ul className="list-disc ml-6">
                        {tools.map((tool) => (
                            <li
                                key={tool.id}
                                className="cursor-pointer text-blue-500"
                                onClick={() => handleToolSelect(tool)}
                            >
                                {tool.name} - ${tool.rate} per day
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading tools...</p>
                )}
            </div>

            {/* Rental Form */}
            {selectedTool && (
                <form onSubmit={handleFormSubmit} className="border p-4 rounded shadow">
                    <h2 className="text-lg font-semibold mb-2">
                        Rent {selectedTool.name}
                    </h2>
                    <div className="mb-2">
                        <label className="block">Number of Days:</label>
                        <input
                            type="number"
                            value={rentalDays}
                            onChange={handleDaysChange}
                            min="1"
                            className="border rounded w-full p-1"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Address:</label>
                        <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            rows="3"
                            className="border rounded w-full p-1"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-2">
                        <p>
                            <strong>Total Amount:</strong> ${totalAmount}
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
                    >
                        Submit Rental
                    </button>
                </form>
            )}
        </div>
    );
}

export default App;
