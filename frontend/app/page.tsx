/**
 * Landing Page Component.
 *
 * Redesigned UI for a unique, modern look.
 * Uses inline SVG icons instead of react-icons.
 */

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full text-center">

        {/* Hero Section */}
        <div className="mb-12 p-8 bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-fadeIn">
            Organize Your Life with Todo App
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Simplify your day, boost productivity, and never forget a task.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Manage your tasks effortlessly with a sleek interface and intuitive design. Stay on top of your work and personal life like never before.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-white/80 via-white/60 to-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-white/20">
            {/* Checkmark SVG */}
            <svg className="w-12 h-12 text-purple-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Effortless Task Creation
            </h3>
            <p className="text-gray-600 text-sm">
              Add and organize tasks in seconds with our intuitive interface.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-white/80 via-white/60 to-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-white/20">
            {/* Lock SVG */}
            <svg className="w-12 h-12 text-pink-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.1046 0 2 .8954 2 2v2H10v-2c0-1.1046.8954-2 2-2zm0-4a4 4 0 00-4 4v2h8V11a4 4 0 00-4-4z" />
              <rect x="6" y="13" width="12" height="8" rx="2" ry="2" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Secure & Private
            </h3>
            <p className="text-gray-600 text-sm">
              Your tasks are protected with JWT-based authentication.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-white/80 via-white/60 to-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-white/20">
            {/* Mobile SVG */}
            <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 18h2" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Access Anywhere
            </h3>
            <p className="text-gray-600 text-sm">
              Use Todo App on any device, desktop or mobile, seamlessly.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Link
            href="/signup"
            className="w-full sm:w-auto px-10 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Get Started - Sign Up
          </Link>
          <Link
            href="/signin"
            className="w-full sm:w-auto px-10 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg border-2 border-purple-500 hover:scale-105 transform transition-all duration-300"
          >
            Sign In
          </Link>
        </div>

        {/* Footer Text */}
        <p className="text-gray-700 text-sm">
          Trusted by thousands of users to manage their daily tasks efficiently.
        </p>
      </div>
    </div>
  );
}
