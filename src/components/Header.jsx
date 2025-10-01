// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-white tracking-wide hover:scale-105 transform transition"
        >
          BirZumda
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 text-white font-medium items-center">
          <Link
            to="/jobs"
            className="relative group"
          >
            <span className="hover:text-yellow-300 transition">Ishlar</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all"></span>
          </Link>
          <Link
            to="/freelancers"
            className="relative group"
          >
            <span className="hover:text-yellow-300 transition">Freelancerlar</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all"></span>
          </Link>
          <Link
            to="/login"
            className="relative group"
          >
            <span className="hover:text-yellow-300 transition">Qo‘shish</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all"></span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
          <nav className="flex flex-col p-4 gap-4 text-gray-800 font-medium">
            <Link
              to="/jobs"
              className="hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Ishlar
            </Link>
            <Link
              to="/freelancers"
              className="hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Freelancerlar
            </Link>
            <Link
              to="/login"
              className="hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Qo‘shish
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
