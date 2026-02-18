import React from "react";

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-2">

        {/* Left Side - Contact Info */}
        <div className="p-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <p className="mt-2 text-gray-600">
            Fill in the form to start a conversation
          </p>

          {/* Address */}
          <div className="flex items-center mt-8 text-gray-700">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-7 h-7 text-orange-600"
            >
              <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0L6.343 16.657a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-4 font-medium">
              Lata Library, Main Street, India
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center mt-6 text-gray-700">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-7 h-7 text-orange-600"
            >
              <path d="M3 5a2 2 0 012-2h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2h-1C9 21 3 15 3 6V5z" />
            </svg>
            <span className="ml-4 font-medium">
              +91 9005622817
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center mt-6 text-gray-700">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-7 h-7 text-orange-600"
            >
              <path d="M3 8l9 6 9-6" />
              <path d="M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
            </svg>
            <span className="ml-4 font-medium">
              info@latalibrary.com
            </span>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          <form className="space-y-5">

            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-300"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
