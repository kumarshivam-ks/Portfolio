import React from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";

function Login() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#1a1a1a] border border-gray-700 rounded-2xl p-8 shadow-[0_0_30px_rgba(156,163,175,.2)]">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-2">
            Login to continue
          </p>
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
        <div className="relative mb-4">
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

        {/* Forgot Password */}
        <div className="flex justify-end mb-6">
          <button className="text-sm text-gray-400 hover:text-white transition">
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl transition duration-300 font-semibold">
          <LogIn size={20} />
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Register */}
        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/Registration"
            className="text-white hover:text-gray-300 font-medium transition"
          >
            Register
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Login;