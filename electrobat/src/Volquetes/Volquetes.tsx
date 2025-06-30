import React from "react";
import { motion } from "framer-motion";
// import { Trash2, Building } from "lucide-react";
import volquete2 from "../assets/imgs/volqueteycamion.webp";
import volquete1 from "../assets/imgs/volquete.webp";

export const VolquetesSection: React.FC = () => {
  const equipmentTypes = [
    {
      id: 1,
      title: "Volquetes Medianos",
      description: "Ideales para escombros, tierra y materiales de construcción",
      image: volquete1,
      tags: ["Volquetes medianos"],
      // icon: Building,
      // features: ["Carga rápida", "Descarga eficiente", "Múltiples tamaños"]
    },
    {
      id: 2,
      // title: "Volquetes Grandes",
      // description: "Perfectos para basura pesada y residuos generales",
      image: volquete2,
      tags: ["Volquetes grandes"],
      // icon: Trash2,÷
      // features: ["Contenido protegido", "Sin derrames", "Transporte seguro"]
    }
  ];

  return (
    <section id="trucks" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#04348c] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#e7d21e] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#04348c] mb-4 leading-tight">
            Nuestros Volquetes
          </h2>
          
        </motion.div>

        {/* Equipment Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {equipmentTypes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-6 bg-white">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating icon */}
                  {/* <div className="absolute top-6 left-6 bg-[#e7d21e] p-3 rounded-full shadow-lg">
                    <item.icon className="w-6 h-6 text-[#04348c]" />
                  </div> */}
                  
                  {/* Tags */}
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-white/90 backdrop-blur-sm text-[#04348c] px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};