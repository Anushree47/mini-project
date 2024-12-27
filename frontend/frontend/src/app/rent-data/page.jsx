'use client';

import { IconPencil, IconTrash } from '@tabler/icons-react';
import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageRent = () => {

     const [ rentNowList , setrentNowList] = useState([])
     const [loading , setLoading] = useState(false)
const token= localStorage.getItem('token')
    const router = useRouter()
    const fetchrentNows= async() =>{
        setLoading(true)
        const res = await axios.get('http://localhost:5000/rentNow/getall')
        // console.log(res.data)
        setrentNowList(res.data)
        setLoading(false)
        
    }

    useEffect(() => {
        fetchrentNows();
    }, []);
    useEffect(() => {
        if(!token)
  {
    toast.error("login is required")
  router.push('/login')
  }    
        
      }, [])
    const deleterentNow = async (id) =>{
        if(!confirm('Are you sure you want to delete this request'))
            return

        const res = await axios.delete(`http://localhost:5000/rentNow/delete/${id}`)
        if(res.status===200)
        {
            fetchrentNows();
            toast.success('Request Deleted Successfully')
        }
        else
        toast.error('Failed To Delete')
    }

    

    return (
    <div className='h-screen bg-gray-200'>
        <h1 className='text-3xl font-bold text-center'>Manage Request</h1>
        <div className='container mx-auto'>
            {
                loading ? <p className='text-centre text-gray-500 text-2xl font-bold'>Loading....Please Wait
                  </p>
                    :(
<table className='w-full my-10'>
    <thead className='border border-slate-800 text-white bg-gray-600'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Address</th>
            <th>Duration</th>
            <th>Total Amount</th>
            <th>Delete</th>
            <th>Update</th>
           
        </tr>
    </thead>
    <tbody className=' bg-gray-100'>
        {
            rentNowList.map( (rentNow) => {
                return  <tr key={rentNow._id} className=''>
                    
                    <td className='p-2  border border-black-100'>{rentNow._id} </td>
                    <td className='p-2  border border-black-100'>{rentNow.fulname}</td>
                    <td className='p-2  border border-black-100'>{rentNow.email}</td> 
                    <td className='p-2  border border-black-100'>{rentNow.phoneNumber}</td>
                    <td className='p-2  border border-black-100'>{rentNow.address}</td>
                    <td className='p-2  border border-black-100'>{rentNow.duration}</td>
                    <td className='p-2  border border-black-100'>{rentNow.totalAmount}</td>
                    <td className='p-2  border border-black-100' > 
                        <button onClick={()=>{deleterentNow(rentNow._id )}}className='bg-red-500 text-white px-2 py-1 rounded'> <IconTrash></IconTrash></button></td>
                    <td className='p-2  border border-black-100'>
                        <Link  href={'/updaterentNow/'+rentNow._id}className='bg-blue-800 text-white block w-fit px-2 py-1 rounded '> <IconPencil></IconPencil></Link></td>
                </tr>
            })
        }
    </tbody>
</table>
                    )
}
        </div>
    </div>
    )
}

export default ManageRent