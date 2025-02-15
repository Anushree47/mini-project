'use client';
import { IconCheck, IconLoader3 } from '@tabler/icons-react';
import axios from 'axios';
import React from 'react'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';



const Contact = () => {
  const router= useRouter();
  //intializing formik 
  const contactForm = useFormik(     {
    initialValues: {
    name: '',
  email: '',
  city:" ",
   message: ''
 },
  onSubmit: (values, { resetForm , setSubmitting}) => {
    axios.post('http://localhost:5000/contact/add',values)
      .then((result) => {
      toast.success('Message send  successfully');
        resetForm();
        router.push('/loginForm');
      }).catch((err) => {
        toast.error(err?.response?.data?.message || 'SOMETHING WENT WRONG');
        setSubmitting(false);
        });
},
//  validationSchema: SignupSchema
})

return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-emerald-300 to-stone-200">
    <div className="w-80 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
    {/* Form */}
    <div className="mb-4">
    <form onSubmit={contactForm.handleSubmit} >
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      onChange={contactForm.handleChange}
                      value={contactForm.values.name}
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
                    (contactForm.errors.name && contactForm.touched.name) && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        {contactForm.errors.name}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    Email ID
                  </label>
                  <div className="relative">
                    <input
                      type= "text"
                      id= "email"
                      onChange={contactForm.handleChange}
                      value={contactForm.values.email}
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
                    (contactForm.errors.email && contactForm.touched.email) && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        {contactForm.errors.email}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    CITY
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="city"
                      onChange={contactForm.handleChange}
                      value={contactForm.values.city}
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
                    (contactForm.errors.city&& contactForm.touched.city) && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        {contactForm.errors.city}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    MESSAGE
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="message"
                      onChange={contactForm.handleChange}
                      value={contactForm.values.message}
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
                    (contactForm.errors.message && contactForm.touched.message) && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        {contactForm.errors.message}
                      </p>
                    )
                  }
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
                  type="submit"
                  disabled={contactForm.isSubmitting}
                  className="flex items-center gap-3 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  { contactForm.isSubmitting ? <IconLoader3 className='animate-spin' /> : <IconCheck /> }
                  { contactForm.isSubmitting ? 'Submitting...' : 'submit' }
                </button>
              </div>
    </form>
    </div>
    </div>
    </div>
);



}

export default Contact