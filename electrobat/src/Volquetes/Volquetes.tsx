
import React from "react";
import { motion } from "framer-motion";
import volquete2 from "../assets/imgs/volqueteycamion.webp";
import volquete1 from "../assets/imgs/volquete.webp";

export const VolquetesSection: React.FC = () => {
  const equipmentTypes = [
    {
      id: 1,
      title: "Volquetes grandes",
      description: "Volquetes de carga para camiones de alta capacidad",
      image: volquete1,
      tags: ["Alta capacidad"]
    },
    {
      id: 2,
      title: "Volquetes medianos",
      description: "Volquetes versátiles para diversos tipos de carga",
      image: volquete2,
      tags: ["Versatilidad"]
    }
  ];

  return (
    <section id="trucks" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Volquetes
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Volqueres de carga para proyectos de construcción y transporte de cualquier escala
          </p>
        </motion.div>

        {/* Featured equipment showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {equipmentTypes.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <div className="aspect-w-16 aspect-h-9 lg:aspect-h-7">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-lg overflow-hidden shadow-xl"
        >
          <div className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Servicio de Alquiler Disponible</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ofrecemos volquetes de alta capacidad para sus necesidades de transporte y carga. 
              Nuestros volquetes están en perfecto estado y disponibles para alquiler inmediato.
            </p>
            <a
  href="https://api.whatsapp.com/send/?phone=5493416868049&text=Hola%21+Queria+consultar+por+el+alquiler+de+volquetes&type=phone_number&app_absent=0"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500 transition-colors inline-block"
>
  Solicitar Información
</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};