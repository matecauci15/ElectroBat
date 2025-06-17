
// import React from "react";
// import { motion } from "framer-motion";
// import volquete2 from "../assets/imgs/volqueteycamion.webp";
// import volquete1 from "../assets/imgs/volquete.webp";

// export const VolquetesSection: React.FC = () => {
//   const equipmentTypes = [
//     {
//       id: 1,
//       title: "Volquetes grandes",
//       description: "Volquetes de carga para camiones de alta capacidad",
//       image: volquete1,
//       tags: ["Alta capacidad"]
//     },
//     {
//       id: 2,
//       title: "Volquetes medianos",
//       description: "Volquetes versátiles para diversos tipos de carga",
//       image: volquete2,
//       tags: ["Versatilidad"]
//     }
//   ];

//   return (
//     <section id="trucks" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="md:text-4xl text-3xl uppercase font-extrabold text-[#04348c] sm:text-4xl">
//             Nuestros Volquetes
//           </h2>
//           <div className="h-1 md:w-80 w-64 bg-[#e7d21e] rounded-xl mx-auto mt-4"></div>
//           <p className="mt-4 max-w-2xl mx-auto md:text-xl text-md text-gray-600">
//             Volquetes de carga para proyectos de construcción y transporte de cualquier escala
//           </p>
//         </motion.div>

//         {/* Featured equipment showcase */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
//           {equipmentTypes.map((item) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="relative overflow-hidden rounded-lg shadow-lg group"
//             >
//               <div className="aspect-w-16 aspect-h-9 lg:aspect-h-7">
//                 <img 
//                   src={item.image} 
//                   alt={item.title} 
//                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
//                 <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
//                 <p className="text-gray-200 mb-3">{item.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {item.tags.map((tag, index) => (
//                     <span key={index} className="bg-[#e7d21e] text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="overflow-hidden "
//         >
//           <div className="p-8 lg:p-8 text-center">
//             <h3 className="text-xl font-bold text-[#04348c] mb-4">Servicio de Alquiler Disponible</h3>
//             <p className="text-gray-600 text-md mb-6 max-w-2xl mx-auto">
//               Ofrecemos volquetes de alta capacidad para sus necesidades de transporte y carga. 
//               En perfecto estado y disponibles para su alquiler de inmediato
//             </p>
//             <a
//   href="https://api.whatsapp.com/send/?phone=5493416868049&text=Hola%21+Queria+consultar+por+el+alquiler+de+volquetes&type=phone_number&app_absent=0"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="px-6 py-3 bg-[#e7d21e] text-[#04348c]/90 font-medium rounded-md hover:bg-yellow-500 transition-colors inline-block"
// >
//   Solicitar catálogo de Volquetes
// </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
import React from "react";
import { motion } from "framer-motion";
import { Truck, Package, Trash2, Building, CheckCircle } from "lucide-react";
import volquete2 from "../assets/imgs/volqueteycamion.webp";
import volquete1 from "../assets/imgs/volquete.webp";

export const VolquetesSection: React.FC = () => {
  const equipmentTypes = [
    {
      id: 1,
      title: "Volquetes Abiertos",
      description: "Ideales para escombros, tierra y materiales de construcción",
      image: volquete1,
      tags: ["Alta capacidad", "Escombros"],
      icon: Building,
      features: ["Carga rápida", "Descarga eficiente", "Múltiples tamaños"]
    },
    {
      id: 2,
      title: "Volquetes Cerrados",
      description: "Perfectos para basura pesada y residuos generales",
      image: volquete2,
      tags: ["Basura pesada", "Residuos generales"],
      icon: Trash2,
      features: ["Contenido protegido", "Sin derrames", "Transporte seguro"]
    }
  ];

  const benefits = [
    { icon: Truck, text: "Volquetes abiertos y cerrados disponibles" },
    { icon: Package, text: "Medidas adaptadas al tipo de carga" },
    { icon: CheckCircle, text: "Para escombros, basura pesada y residuos" },
    { icon: Building, text: "Ideal para proyectos de construcción" }
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
            Alquiler de Volquetes
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones de transporte especializadas para construcción, 
            escombros y residuos
          </p>
        </motion.div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-8 mb-6 "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-start gap-3 group"
              >
                <div className="bg-[#e7d21e] p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium text-sm leading-tight">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
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
                  <div className="absolute top-6 left-6 bg-[#e7d21e] p-3 rounded-full shadow-lg">
                    <item.icon className="w-6 h-6 text-[#04348c]" />
                  </div>
                  
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

              {/* Content */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-[#04348c] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {item.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#e7d21e] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
 <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden "
        >
          <div className="p-8 bg-white rounded-xl lg:p-8 text-center">
            <h3 className="text-xl font-bold text-[#04348c] mb-4">Servicio de Alquiler Disponible</h3>
            <p className="text-gray-600 text-md mb-6 max-w-2xl mx-auto">
              Ofrecemos volquetes de alta capacidad para sus necesidades de transporte y carga. 
              En perfecto estado y disponibles para su alquiler de inmediato
            </p>
            <a
  href="https://api.whatsapp.com/send/?phone=5493416868049&text=Hola%21+Queria+consultar+por+el+alquiler+de+volquetes&type=phone_number&app_absent=0"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-[#e7d21e] text-[#04348c]/90 font-medium rounded-md hover:bg-yellow-500 transition-colors inline-block"
>
  Solicitar catálogo de Volquetes
</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};