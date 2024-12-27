'use client';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import axios from 'axios'
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Managetool = () => {

    const [toolList, setToolList] = useState([])
    const [loading, setLoading] = useState(false)
    const token= localStorage.getItem('token')
    const router = useRouter()
    const fetchUsers = async (e) => {
        setLoading(true)
        const res = await axios.get('http://localhost:5000/product/getall')
        console.log(res.data)
        setToolList(res.data)
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

    const deleteTool = async (id) => {
        if (!confirm('Are you sure you want to delete this tool')) return

        const res = await axios.delete(`http://localhost:5000/product/delete/${id}`)
        if (res.status === 200) {
            fetchUsers();
            toast.success(' Tool Deleted Successfully')
        }
        else
            toast.error('Failed To Delete')
    }



    return (
        <div className='min-h-screen bg-gray-200'>
            <h1 className='text-3xl font-bold text-center'>Tool Data</h1>
            <div className='container mx-auto'>
                {
                    loading ? <p className='text-centre text-gray-500 text-2xl font-bold'>Loading....Please Wait
                    </p>
                        : (
                            <table className='w-full my-10'>
                                <thead className='border border-slate-800 text-white bg-gray-600'>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Features</th>
                                        <th>Description</th>
                                        <th>Image</th>
                                        <th>Delete</th>
                                        <th>Update</th>

                                    </tr>
                                </thead>
                                <tbody className=' bg-gray-100'>
                                    {
                                        toolList.map((product) => {
                                            return <tr key={product._id} className=''>

                                                <td className='p-2  border border-black-100'>{product._id} </td>
                                                <td className='p-2  border border-black-100'>{product.name}</td>
                                                <td className='p-2  border border-black-100'>{product.title}</td>
                                                <td className='p-2  border border-black-100'>{product.category}</td>
                                                <td className='p-2  border border-black-100'>{product.price}</td>
                                                <td className='p-2  border border-black-100'>{product.features.substring(0, 20)}</td>
                                                <td className='p-2  border border-black-100'>{product.description.substring(0, 20)}</td>
                                                <td className='p-2  border border-black-100'>
                                                    <img src={product.imageUrl} alt="" />
                                                </td>

                                                <td className='p-2  border border-black-100' >
                                                    <button onClick={() => { deleteTool(product._id) }} className='bg-red-500 text-white px-2 py-1 rounded'> <IconTrash></IconTrash></button></td>
                                                <td className='p-2  border border-black-100'>
                                                    <Link href={'/updateTool/' + product._id} className='bg-blue-800 text-white block w-fit px-2 py-1 rounded '> <IconPencil></IconPencil></Link></td>
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

export default Managetool