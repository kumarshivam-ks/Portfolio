import React from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#1a1a1a] border border-gray-700 rounded-2xl p-8 shadow-[0_0_30px_rgba(156,163,175,.2)]">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-gray-400 mt-2">
            Register to get started
          </p>
        </div>

        {/* Name */}
        <div className="relative mb-5">
          <User
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-[#0d0d0d] border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition"
          />
        </div>

        {/* Email */}
        <div className="relative mb-5">
          <Mail
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#0d0d0d] border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition"
          />
        </div>

        {/* Password */}
        <div className="relative mb-5">
          <Lock
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#0d0d0d] border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition"
          />
        </div>

        {/* Confirm Password */}
        <div className="relative mb-6">
          <Lock
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-[#0d0d0d] border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition"
          />
        </div>

        {/* Register Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl transition duration-300 font-semibold">
          <UserPlus size={20} />
          Register
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white hover:text-gray-300 font-medium transition"
          >
            Login
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Registration;