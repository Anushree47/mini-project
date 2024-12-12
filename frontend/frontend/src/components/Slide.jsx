'use client'
import React, { useEffect, useState } from 'react'

const slides = [

{
    title: 'RENT TODAY',
    description: 'Rent top-quality agricultural equipment for every season, without the burden of ownershi',
    imageUrl: "home.jpg",
},

{
    title: 'Equip your farm, Rent with ease ',
    description: 'Your Trusted Partner in Agricultural Machinery Rental',
    imageUrl: "hom2.jpg",
},
{
    title: ' Agri Solutionsss ',
    description: 'Empowering Farmers with Affordable Equipment Solutions',
    imageUrl: "home1.jpg",
},
{
    title: 'Pro Farm Rentals ',
    description:'Your Trusted Partner in Agricultural Machinery Rentals',
    imageUrl: "home5.jpg",
},
{
    title: 'Affordable Farm Tools on - Demand',
    description: 'Modern machinery for modern farms: rent, cultivate, and thrive',
    imageUrl: "home4.jpg",
},

{
    title: 'Rent , Farm, Grow ',
    description: 'Save money, save time: reliable agricultural equipment, just a rental away',
    imageUrl: "home3.jpg",
},

];

const slide = () => {
    

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(()=> {
    const interval = setInterval(()=>{
        setCurrentSlide((prevSlide)=>(prevSlide + 1)%slides.length);
    },5000);//slide change interval in miliseonds
    return () => clearInterval(interval);
},[]);

  return (
    <div className='relative w-full h-96 overflow-hidden'>
      {slides.map((slide,index) =>(
        <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${index===currentSlide ? 'opacity-100': 'opacity-0'}`}
        >
            <img src={slide.imageUrl} alt={slide.title} className='w-full h-full' />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex  flex-col justify-center items-center  text-center text-white p-4'>
                <h2 className='text-3xl font-bold'>{slide.title}</h2>
                <p className='text-lg mt-2'>{slide.description}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default slide;