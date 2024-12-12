'use client'
import React from 'react';
import { FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa'; // Importing icons from react-icons

function SocialMediaIcons() {
  return (
    <div className="flex justify-center space-x-6 mt-10">
      {/* Instagram Icon */}
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-500 text-4xl hover:text-pink-600 transition duration-300" />
      </a>

      {/* Twitter Icon */}
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-400 text-4xl hover:text-blue-500 transition duration-300" />
      </a>

      {/* Google Icon */}
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        <FaGoogle className="text-red-500 text-4xl hover:text-red-600 transition duration-300" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;