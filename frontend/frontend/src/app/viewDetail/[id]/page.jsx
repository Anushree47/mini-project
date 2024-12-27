'use client';
import { IconBrandRevolut, IconFileDescription, IconNote } from '@tabler/icons-react';
import axios from 'axios';

import { useParams, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';


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
    name: '',
    category: '',
    imageUrl: '',
    price: '',
    features: '',
    description: ''

  };

  if (toolData === null) {
    return <h1>Loading ... </h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 bg-gradient-to-r from-emerald-300 to-stone-300">
      <header className=" text-white p-4 shadow-md bg-green-600">
        <div className="container mx-auto ">
        <h1 className='text-2xl text-center font-bold mb-6 '>  Tool Details</h1>
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
            <div className="flex items-center mb-4 gap-3">
              < IconBrandRevolut/>
              <p className="text-2xl font-bold text-gray-900"> ₹{toolData.price}</p>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-4">{toolData.category}</p>
            {/* <p className="text-lg text-gray-700 mb-6">{toolData.description}</p> */}
          <IconFileDescription />  <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
  {toolData.description
    .split(',') // Split the string into an array by the period (adjust if separator differs)
    .filter((feature) => feature.trim() !== "") // Remove empty items
    .map((feature, index) => (
      <li key={index}>{feature.trim()}</li>
    ))}
</ul>

            {/* <h3 className="text-xl font-semibold text-gray-800 mb-4">FEATURES : </h3>
            <p className="text-lg text-gray-700 mb-6">{toolData.features}</p> */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">FEATURES :</h3>
<ul className="list-disc list-inside text-lg text-gray-700 mb-6">
  {toolData.features
    .split(',') // Split the string into an array by the period (adjust if separator differs)
    .filter((feature) => feature.trim() !== "") // Remove empty items
    .map((feature, index) => (
      <li key={index}>{feature.trim()}</li>
    ))}
</ul>



          </div>
        </div>
      </main>


    </div>
  );
}

export default ViewPage;