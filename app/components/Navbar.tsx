import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 text-black p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:underline">
          Home
        </Link>
        <div className="flex space-x-6">
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/feedback" className="hover:underline">
            Feedback
          </Link>
          <Link href="/country" className="hover:underline">
            Country
          </Link>
          <Link href="/users" className="hover:underline">
            Users
          </Link>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
