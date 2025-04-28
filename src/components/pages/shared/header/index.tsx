"use client";

import Link from "next/link";
import { Button } from "../../../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full py-6 relative z-50">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl md:text-2xl font-bold leading-tight">
          refined.
        </Link>

        {/* Menú para desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#servicios"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#portafolio"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Portafolio
          </Link>
          <Link
            href="#resenas"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Reseñas
          </Link>
          <Link
            href="#agencia"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Agencia
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="rounded-full bg-white text-black hover:bg-gray-200 px-8 font-bold leading-tight">
            Contáctanos
          </Button>
        </div>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-t border-zinc-800 py-4 md:hidden">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              <Link
                href="#servicios"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Servicios
              </Link>
              <Link
                href="#portafolio"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Portafolio
              </Link>
              <Link
                href="#resenas"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Reseñas
              </Link>
              <Link
                href="#agencia"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Agencia
              </Link>
              <Button
                className="rounded-full bg-white text-black hover:bg-gray-200 px-8 font-bold leading-tight w-full"
                onClick={toggleMenu}
              >
                Contáctanos
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
