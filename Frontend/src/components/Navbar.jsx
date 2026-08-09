import React from "react";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

export const Navbar = () => {
    return (
        <nav className="bg-black text-white px-8 py-5 flex justify-between items-center border-b border-gray-800">

            {/* Logo */}
            <div className="text-2xl font-bold tracking-wide">
                Kumar <span className="text-gray-400">Shivam</span>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-8">
                <Link to="/" className="hover:text-gray-300 transition">
                    Home
                </Link>

                <Link to="/education" className="hover:text-gray-300 transition">
                    Education
                </Link>

                <Link to="/experience" className="hover:text-gray-300 transition">
                    Experience
                </Link>

                <Link to="/projects" className="hover:text-gray-300 transition">
                    Projects
                </Link>

                <Link to="/achievements" className="hover:text-gray-300 transition">
                    Achievements
                </Link>
            </div>

            {/* Login Button */}
            <Link to="/login" className="flex items-center gap-2 px-5 py-2 rounded-sm border border-gray-500 hover:border-gray-300 transition-all duration-300" >
                <LogIn size={18} /> Login
            </Link>

        </nav>
    );
};