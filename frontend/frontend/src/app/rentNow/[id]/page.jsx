
"use client";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useParams, useRouter } from "next/navigation"; // Correct routing import for Next.js 13+
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

const RentalForm = () => {

  const { id } = useParams();
  const token= localStorage.getItem('token')
      const router = useRouter()
 
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    duration: "",
    totalAmount: "",
    category: "", // Added category
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    duration: Yup.number()
      .positive("Duration must be positive")
      .required("Duration is required"),
    totalAmount: Yup.number()
      .positive("Total Amount must be positive")
      .required("Total Amount is required"),
    category: Yup.string().required("Category is required"), // Added validation
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    axios.post(`http://localhost:5000/rentNow/post/${id}`, values)
      .then((result) => {
        toast.success("Request sent successfully");
        resetForm();
        router.push("/viewEquipment");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "SOMETHING WENT WRONG");
        setSubmitting(false);
      });
    //send values to backend
  };
  useEffect(() => {
    if(!token)
{
toast.error("login is required")
router.push('/loginForm')
}    
    
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Rental Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Full Name */}
              <div className="mb-4">
                <label className="block mb-1">Full Name</label>
                <Field
                  type="text"
                  name="fullName"
                  className="w-full px-3 py-2 border rounded"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label className="block mb-1">Phone Number</label>
                <Field
                  type="text"
                  name="phoneNumber"
                  className="w-full px-3 py-2 border rounded"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="block mb-1">Address</label>
                <Field
                  type="text"
                  name="address"
                  className="w-full px-3 py-2 border rounded"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Category Dropdown */}
              <div className="mb-4">
                <label className="block mb-1">Category</label>
                <Field
                  as="select"
                  name="category"
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="" label="Select Category" />
                  <option value="tractor" label="Tractor" />
                  <option value="seeder" label="Seeder" />
                  <option value="planter" label="Planter" />
                  <option value="harvester" label="Harvester" />
                  <option value="cutter_and_shredder" label="Cutter and Shredder" />
                  <option value="sprayer" label="Sprayer" />
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Duration & Total Amount */}
              <div className="mb-4 flex gap-2">
                <div className="w-1/2">
                  <label className="block mb-1">Duration</label>
                  <Field
                    type="number"
                    name="duration"
                    className="w-full px-3 py-2 border rounded"
                  />
                  <ErrorMessage
                    name="duration"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1">Total Amount</label>
                  <Field
                    type="number"
                    name="totalAmount"
                    className="w-full px-3 py-2 border rounded"
                  />
                  <ErrorMessage
                    name="totalAmount"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-green-500 text-white py-2 rounded ${isSubmitting ? "opacity-50" : "hover:bg-green-600"
                  }`}
              >
                {isSubmitting ? "Submitting..." : "Start the Rental Journey"}
              </button>
            </Form>
          )}
        </Formik>
        <Toaster />
      </div>
    </div>
  );
};

export default RentalForm;
