'use client';

import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';
// import { SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Landing() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="text-xl font-bold">
            Tech With Ndonga
          </Link>
          <div className="flex space-x-4">
            <Link href="#features" className="text-gray-700 hover:text-blue-500">
              Features
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Tech With Ndonga
          </h1>
          <p className="text-gray-600 mb-6">
            Discover, create, and share amazing content on our platform. Start your journey today!
          </p>
          <div className="flex justify-center">
      {/* <SignInButton mode="modal">
        <Button className="bg-black hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-md">
          Get Started
        </Button>
      </SignInButton> */}
    </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">Create Blogs</h3>
              <p className="text-gray-600">
                Write and publish blogs effortlessly with our user-friendly editor.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">Discover Content</h3>
              <p className="text-gray-600">
                Explore blogs from various creators across multiple categories.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">Engage Community</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals and share your thoughts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            BlogApp is a platform designed to bring creators and readers together. We strive to make content creation 
            and exploration simple and enjoyable for everyone.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">Have questions? Reach out to us!</p>
          <a
            href="mailto:contact@blogapp.com"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-white">
          <p>&copy; {new Date().getFullYear()} Tech With Ndonga. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
