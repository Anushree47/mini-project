'use client';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageContact = () => {

     const [ userList , setUserList] = useState([])
     const [loading , setLoading] = useState(false)
 const token= localStorage.getItem('token')
  const router = useRouter();

    const fetchUsers= async() =>{
        setLoading(true)
    const res = await axios.get('http://localhost:5000/contact/getall')
        console.log(res.data)
        setUserList(res.data)
        setLoading(false)
        
    }

    useEffect(() => {
        fetchUsers();
    }, []);
    useEffect(() => {
        if(!token)
  {
    toast.error("login is required")
  router.push('/login')
  }    
        
      }, [])

    const deleteUser = async (id) =>{
        if(!confirm('Are you sure you want to delete this message'))return

        const res = await axios.delete(`http://localhost:5000/contact/delete/${id}`)
        if(res.status===200)
        {
            fetchUsers();
            toast.success(' Message Deleted Successfully')
        }
        else
        toast.error('Failed To Delete')
    }

    

    return (
    <div className='h-screen bg-gray-200'>
        <h1 className='text-3xl font-bold text-center'>User Messages</h1>
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
            <th>City</th>
            <th>Message</th>
            <th>RegisteredAt</th>
            <th>Delete</th>
            <th>Update</th>

        </tr>
    </thead>
    <tbody className=' bg-gray-100'>
        {
            userList.map( (contact) => {
                return  <tr key={contact._id} className=''>
                    
                    <td className='p-2  border border-black-100'>{contact._id} </td>
                    <td className='p-2  border border-black-100'>{contact.name}</td>
                    <td className='p-2  border border-black-100'>{contact.email}</td>
                    <td className='p-2  border border-black-100'>{contact.city}</td>
                    <td className='p-2  border border-black-100'>{contact.message}</td>
                    <td className='p-2  border border-black-100'>{contact.createdAt}</td>

                    <td className='p-2  border border-black-100' > 
                        <button onClick={()=>{deleteUser(contact._id )}}className='bg-red-500 text-white px-2 py-1 rounded'> <IconTrash></IconTrash></button></td>
                    <td className='p-2  border border-black-100'>
                        <Link  href={'/updateuser/'+contact._id}className='bg-blue-800 text-white block w-fit px-2 py-1 rounded '> <IconPencil></IconPencil></Link></td>
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

export default ManageContact