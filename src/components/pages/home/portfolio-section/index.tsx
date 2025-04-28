"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "Páginas web",
  "Mobile app",
  "Tiendas virtuales",
  "Diseño",
  "SEO",
];

const portfolioItems = [
  {
    image: "/images/arxatec.png",
  },
  {
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  },
  {
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevProject = () => {
    setCurrentProject(
      (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length
    );
  };

  const currentItem = portfolioItems[currentProject];

  return (
    <section id="portafolio" className="py-12 md:py-24 bg-black px-4 md:px-0">
      <div className="container mx-auto">
        {/* Titulo */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-white text-center md:text-left">
          Proyectos increíbles que fueron
          <br />
          desarrollados por Refined
        </h2>

        {/* Carrusel de imagenes */}
        <div className="relative aspect-[16/9] w-full bg-gray-900 rounded-lg overflow-hidden mb-4 md:mb-8">
          <Image
            src={currentItem.image}
            alt={`Proyecto ${currentProject + 1}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" />
        </div>

        {/* Categorias y navegacion */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          {/* Categorías */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full md:w-auto mx-auto">
            {categories.map((category, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-default text-center px-2 md:px-0"
              >
                {category}
              </span>
            ))}
          </div>

          {/* navegacion del carrusel */}
          <div className="flex items-center mt-4 md:mt-0">
            <div className="flex space-x-2">
              <button
                onClick={prevProject}
                className="p-1.5 md:p-2 bg-gray-700 hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
              <button
                onClick={nextProject}
                className="p-1.5 md:p-2 bg-gray-700 hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Proyecto siguiente"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
