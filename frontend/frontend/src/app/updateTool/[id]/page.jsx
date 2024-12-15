'use client';
import { IconCheck, IconLoader3 } from '@tabler/icons-react';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const updateTool = () => {
    const { id } = useParams();
    const router = useRouter();
     console.log(id);
  
    const [toolData, setToolData] = useState(null);
  
    const fetchToolData = async () => {
      const res = await axios.get(`http://localhost:5000/product/getbyid/${id}`);
      console.log(res.data);
      setToolData(res.data);
    }
  
    useEffect(() => {
      fetchToolData();
    }, [])
    const uploadImage = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
    
        formData.append('file', file)
        formData.append('upload_preset', 'anupreset47')
        formData.append('cloud_name', 'du4tklzpq')
        const res = await axios.post('https://api.cloudinary.com/v1_1/du4tklzpq/image/upload', formData)
    
        if (res.status === 200) {
          console.log(res.data);
          toast.success('IMAGE UPLOADED SUCCESSFULLY')
          product.setFieldValue('imageUrl', res.data.url);
    
        }
      }
    const submitForm = async (values) => {
      console.log(values);
  
      const res = await axios.put(`http://localhost:5000/product/update/${id}`,values);
      if (res.status === 200) {
        toast.success('Tool Updated Successfully');
        router.push('/tool-data');
      }
      
    }
  return (
  
    <div className='min-h-screen'>
    <div className="max-w-lg mx-auto mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            Update Tool
          </h1>

        </div>
        <div className="mt-5">


          {
            toolData === null ? (
              <p className='text-center my-5 text-gray-500 font-bold text-2xl'>Loading, Please Wait...</p>
            ) : (
              <Formik initialValues={toolData} onSubmit={submitForm}>
                {
                  (updateForm) => {
                    return (
                      <form onSubmit={updateForm.handleSubmit} >
                        <div className="grid gap-y-4">
                          {/* Form Group */}
                           {/* Form Group Title*/}
                <div>
                  <label
                    htmlFor="Title"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    Title
                  </label>
                  <div className="relative">
                    <input
                      type="title"
                      id="title"
                      onChange={updateForm.handleChange}
                      value={updateForm.values.title}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="updateFormTitleerror"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (updateForm.errors.title && updateForm.touched.title) && (
                      <p className="text-xs text-red-600 mt-2" id="updateFormTitle-error">
                        {updateForm.errors.title}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                         {/* Form Group name*/}
                <div>
                  <label
                    htmlFor=" Brand"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="name"
                      id="name"
                      onChange={updateForm.handleChange}
                      value={updateForm.values.name}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="Brand-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (updateForm.errors.name && updateForm.touched.name) && (
                      <p className="text-xs text-red-600 mt-2" id=" Brand-error">
                        {updateForm.errors.name}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}

                {/* Form Group description  */}
                <div>
                  <label
                    htmlFor="Model"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    Description
                  </label>
                  <div className="relative">
                    <input
                      type="description"
                      id="description"
                      onChange={updateForm.handleChange}
                      value={updateForm.values.description}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="Model-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {

                    (updateForm.errors.description && updateForm.touched.description) && (
                      <p className="text-xs text-red-600 mt-2" id="Model-error">
                        {updateForm.errors.description}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group Category */}
                <div>
                  <label
                    htmlFor="Category"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    Category
                  </label>
                  <div className="relative">
                    <input
                      type="category"
                      id="category"
                      onChange={updateForm.handleChange}
                      value={updateForm.values.category}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="Category-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (updateForm.errors.category && updateForm.touched.category) && (
                      <p className="text-xs text-red-600 mt-2" id="Category-error">
                        {updateForm.errors.category}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group   features */}
                <div>
                  <label
                    htmlFor=" Type"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    Features
                  </label>
                  <div className="relative">
                    <input
                      type="features"
                      id="features"
                      onChange={updateForm.handleChange}
                      value={updateForm.values.features}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby=" Type-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (updateForm.errors.features && updateForm.touched.features) && (
                      <p className="text-xs text-red-600 mt-2" id="Type-error">
                        {updateForm.errors.features}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group Price */}
                <div>
                  <label
                    htmlFor="Price"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    Price
                  </label>
                  <div className="relative">
                    <input
                      type="Price"
                      id="price"
                      onChange={updateForm.handleChange}
                      value={updateForm.values.price}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="Price-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (updateForm.errors.Price && updateForm.touched.Price) && (
                      <p className="text-xs text-red-600 mt-2" id="Price-error">
                        {updateForm.errors.Price}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group image */}
                <div>
                  <label htmlFor='image-upload'
                    className='w-1/2 block m-auto text-lg  bg-gray-200 text-cener border-2 border-dashed border-gray-700 p-8 font-bold'>Upload Image</label>
                  <input id='image-upload' className='hidden' type="file" onChange={uploadImage } />
                </div>
                {/* End Form Group */}

                {/* Checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ms-3">
                    <label htmlFor="remember-me" className="text-sm dark:text-white">
                      I accept the{" "}
                      <a
                        className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <button
                  type="Add To Cart"
                  disabled={updateForm.isSubmitting || !updateForm.values.imageUrl}
                  className="flex items-center gap-3 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {updateForm.isSubmitting ? <IconLoader3 className='animate-spin' /> : <IconCheck />}
                  {updateForm.isSubmitting ? 'Submitting...' : 'Add To Cart'}
                </button>
                        </div>
                      </form>
                    )
                  }
                }
              </Formik>
            )
          }


          {/* End Form */}
        </div>
      </div>
    </div>

  </div>
  
    
  )
}

export default updateTool