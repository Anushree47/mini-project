'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required Swiper modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Slide data (reusable content)
const slides = [
  {
    title: 'RENT TODAY',
    description: 'Rent top-quality agricultural equipment for every season, without the burden of ownership.',
    imageUrl: '/home.jpg',
  },
  {
    title: 'Equip your farm, Rent with ease',
    description: 'Your Trusted Partner in Agricultural Machinery Rental.',
    imageUrl: '/hom2.jpg',
  },
  {
    title: 'Agri Solutions',
    description: 'Empowering Farmers with Affordable Equipment Solutions.',
    imageUrl: '/home1.jpg',
  },
  {
    title: 'Pro Farm Rentals',
    description: 'Your Trusted Partner in Agricultural Machinery Rentals.',
    imageUrl: '/home5.jpg',
  },
  {
    title: 'Affordable Farm Tools on-Demand',
    description: 'Modern machinery for modern farms: rent, cultivate, and thrive.',
    imageUrl: '/home4.jpg',
  },
  {
    title: 'Rent, Farm, Grow',
    description: 'Save money, save time: reliable agricultural equipment, just a rental away.',
    imageUrl: '/home3.jpg',
  },
];

const SlideComponent = () => {
  return (
    <div className="w-full h-[70vh] relative">
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50, // Slide rotation angle
          stretch: 0, // Space between slides
          depth: 100, // 3D depth of slides
          modifier: 1, // Multiplier for the 3D effect
          slideShadows: true, // Enable slide shadows
        }}
        autoplay={{
          delay: 3000, // 3 seconds delay for autoplay
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="h-full w-full"
      >
        {/* Dynamically map through the slides */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-[300px] h-[400px]">
            <div
              className="relative flex flex-col justify-center items-center text-center text-white h-full bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              {/* Overlay to improve text visibility */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

              {/* Slide Content */}
              <div className="relative z-10 p-4">
                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideComponent;
