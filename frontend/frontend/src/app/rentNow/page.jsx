// RentNowPage.jsx
'use client';
import React from 'react';
import { IconCheck, IconLoader3 } from '@tabler/icons-react';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';


  // Validation schema with address field
  const RentalSchema = Yup.object().shape
  ({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
    item: Yup.string().required('Select an item'),
    duration: Yup.number()
      .required('Duration is required')
      .min(1, 'Duration must be at least 1 day'),
  });
  const RentNowPage = ({  }) => 
    {
    const router= useRouter();

  // initializing formik
  const rentForm = useFormik({
    initialValues: {
        name: '',
        email: '',
        address: '',
        item : '',
        totalamt: '',
        duration: ''
    },
    onSubmit: (values, { resetForm , setSubmitting}) => {

      axios.post('http://localhost:5000/rentNow/rent', values)
        .then((result) => {
          toast.success('Rental Requested submitted Successfully')
          resetForm();
          router.push('/viewEquipment');
        }).catch((err) => {
          toast.error(err?.response?.data?.message || 'SOMETHING WENT WRONG');
          setSubmitting(false);
        });

      // send values to backend
    },
    validationSchema: RentalSchema
  })
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Rent Now</h2>
        {/* Form */}
        <form onSubmit={rentForm.handleSubmit} >
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      onChange={rentForm.handleChange}
                      value={rentForm.values.name}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
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
                    (rentForm.errors.name && rentForm.touched.name) && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        {rentForm.errors.name}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}

              {/* Email Field */}
              <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    E-Mail
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      onChange={rentForm.handleChange}
                      value={rentForm.values.email}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
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
                    (rentForm.errors.email && rentForm.touched.email) && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        {rentForm.errors.email}
                      </p>
                    )
                  }
                </div>

              {/* Address Field */}
              <div>
                  <label
                    htmlFor="address"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    ADDRESS
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      onChange={rentForm.handleChange}
                      value={rentForm.values.address}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
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
                    (rentForm.errors.address && rentForm.touched.address) && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        {rentForm.errors.address}
                      </p>
                    )
                  }
                </div>

              {/* Item Dropdown */}
                  
                  <div>
                  <label
                    htmlFor="address"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    ITEMS

                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="item"
                      onChange={rentForm.handleChange}
                      value={rentForm.values.item}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
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
                    (rentForm.errors.item && rentForm.touched.item) && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        {rentForm.errors.item}
                      </p>
                    )
                  }
                </div>
               {/* Display Total Amount */}
               <div>

               </div>

              {/* Duration Field */}
              <div>
                  <label
                    htmlFor="duration"
                    className="block text-sm mb-2 dark:text-white"
                  >
                   DURATION
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="duration"
                      onChange={rentForm.handleChange}
                      value={rentForm.values.duration}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="email-error"
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
                    (rentForm.errors.duration && rentForm.touched.duration) && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        {rentForm.errors.duration}
                      </p>
                    )
                  }
                </div>

              {/* Submit Button */}
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
                  type="submit"
                  disabled={rentForm.isSubmitting}
                  className="flex items-center gap-3 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  { rentForm.isSubmitting ? <IconLoader3 className='animate-spin' /> : <IconCheck /> }
                  { rentForm.isSubmitting ? 'Submitting...' : 'RENT NOW' }
                </button>
             </div>
            </form>
          
        
      </div>
    </div>
  )
}

export default RentNowPage;