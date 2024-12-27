  'use client';
import Card from '@/components/Card';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const toolPage = () => {



    const [tools, settools] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchKeyword, setSearchKeyword] = useState('');
const token= localStorage.getItem('token')
const router = useRouter()
const handleSearch = () => {  
   
   };
//fetch tool from backend 
  
    const fetchtools = async () => {
      try{
        const response = await axios.get('http://localhost:5000/product/getall');
        settools(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching tools:', error);
        
      }
    };

    useEffect(() => {
      fetchtools();
    }, []);
    useEffect(() => {
      if(!token)
{
  toast.error("login is required")
router.push('/loginForm')
}    
      
    }, [])
    

// Handle dropdown change
const handleFilterChange = (e) => {
  setSelectedCategory(e.target.value);
};

// Filtered tool based on selected category
const filteredTool = tools.filter(
  (tool) => (selectedCategory === 'All' || tool.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()) && tool.title.toLowerCase().includes(searchKeyword.toLowerCase())
);



  return (
    <div className='p-6 bg-gradient-to-r from-emerald-300 to-stone-300'>
        <h1 className='text-2xl text-center font-bold mb-6 '> Our Tools</h1>
        <div className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-4">Find Equipment Near You</h2>
        <div className="flex justify-center">
            <input
            type="text"
            placeholder="Search equipment..."
            value={searchKeyword}
            onChange={e => setSearchKeyword(e.target.value)}
            className="px-4 py-2 w-1/2 border rounded-l-lg"
            />
            <button
            onClick={handleSearch}
            className="px-6 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-500"    >
            Search
          </button>
        </div>
      </div>
        
  {/* Filter Dropdown */}
  <div className="mb-6 flex justify-center">
        <label htmlFor="toolFilter" className="mr-4 font-bold">Filter by Category:</label>
        <select
          id="toolFilter"
          value={selectedCategory}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="Tractor">Tractor</option>
          <option value="Harvester">Harvester</option>
          <option value="Seeder">Seeder</option>
          <option value="Cutters and Shredders">Cutters and Shredders</option>
          <option value="SPRAYERS">SPRAYERS</option>
          <option value="Planting">Planting</option>
        </select>
      </div>

     {/* tools Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  '>
            {filteredTool.map((tools, index ) => (
                <Card
                
                key={index}
                title={tools.title}
           
                description={tools.description.substring(0,30 )}
                imageUrl={tools.imageUrl}
                id={tools._id}//Pass tool ID to card
                
           category={tools.Category || 'unknown'} // Pass tool
            detailedDescription={tools.detailedDescription || 'No details available'}
            
                />
            ))}
      </div>
    </div>
  )
}

export default toolPage;