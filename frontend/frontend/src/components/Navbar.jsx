"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href="/loginForm";
  };

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
        {/* Logo */}
        <div className="px-4 md:px-0 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-semibold focus:outline-none focus:opacity-80"
            aria-label="Home"
          >
            {/* Add your logo here */}
            <img src="/agro.png" alt="Logo" className="w-24 h-auto" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            type="button"
            className="flex items-center justify-center size-6 border rounded-full hover:bg-gray-200 focus:outline-none dark:border-neutral-700 dark:hover:bg-neutral-700"
            aria-label="Toggle Menu"
          >
            <svg
              className="block"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-gray-800 dark:text-white">
            Home
          </Link>
          <Link href="/aboutPage" className="text-gray-800 dark:text-white">
            About
          </Link>
          <Link href="/contactForm" className="text-gray-800 dark:text-white">
            Contact
          </Link>

          {/* Conditional Login/Logout */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-red-500 hover:underline"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/loginForm"
              className="text-blue-500 hover:underline"
            >
              Login
            </Link>
          )}
          <Link href="/signupForm" className="text-gray-800 dark:text-white">
            SignUp
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
