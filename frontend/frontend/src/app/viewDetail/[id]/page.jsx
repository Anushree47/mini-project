'use client';
import axios from 'axios';

import { useParams, useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';


function ViewPage() {

  const [toolData, setToolData] = useState(null);
  const { id } = useParams();
  const router = useRouter();

  const fetchtoolData = async () => {
    console.log(id);

      const res = await axios.get(`http://localhost:5000/product/getbyid/${id}`);
     console.log(res.data);
     setToolData(res.data);
  }

  useEffect(() => {
    fetchtoolData()
  }, [])

  const Tools = {
    title: ' ',
    name : '',
    category : '',
    imageUrl: '', 
    price: '',
    features : '',
    description: ''

  };

  if (toolData === null) {
    return <h1>Loading ... </h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tool Details</h1>
        </div>
      </header>
      <main className="container mx-auto p-8">
        <div className="flex flex-col lg:flex-row space-x-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              src={toolData.imageUrl}
              alt={toolData.title}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{toolData.title}</h2>
            <p className="text-2xl font-bold text-gray-900 mb-4">{toolData.name}</p>
            <p className="text-2xl font-bold text-gray-900 mb-4">{toolData.price}</p>
            <p className="text-lg text-gray-700 mb-6">{toolData.description}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{toolData.features}</h3>
           

        
          </div>
        </div>
      </main>

    
    </div>
  );
}

export default ViewPage;