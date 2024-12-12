'use client';
import Card from '@/components/Card'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const toolPage = () => {



    const [tools, settools] = useState([]);
    const fetchtools = async () => {
      try{
        const response = await axios.get('http://localhost:5000/product/getall');
        settools(response.data);
      } catch (error) {
        console.error('Error fetching tools:', error);
        
      }
    };

    useEffect(() => {
      fetchtools();
    }, []);

  return (
    <div className='p-6'>
        <h1 className='text-2xl text-center font-bold mb-6 '> Our Tools</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  '>
            {tools.map((tool, index ) => (
                <Card
                
                key={index}
                title={tool.title}
                description={tool.description}
                imageUrl={tool.imageUrl}
                id={tool._id}//Pass tool ID to card
                />
            ))}
      </div>
    </div>
  )
}

export default toolPage;