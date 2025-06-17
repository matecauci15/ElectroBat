// import { motion } from "framer-motion";
// import { Truck, Home, Trash2, Building } from "lucide-react";

// export const Cuandonecesitas = () => {
//   const escenarios = [
//     {
//       icon: Home,
//       title: "Obras o reformas",
//     },
//     {
//       icon: Trash2,
//       title: "Limpieza profunda o mudanza",
//     },
//     {
//       icon: Building,
//       title: "Vaciado de locales o propiedades",
//     },
//     {
//       icon: Truck,
//       title: "Eventos grandes con residuos",
//     },
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Título */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8"
//         >
//           <h2 className="text-2xl font-bold text-[#04348c] sm:text-3xl mb-4">
//             ¿CUÁNDO NECESITÁS UN VOLQUETE?
//           </h2>
//         </motion.div>

//         {/* Escenarios */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="mb-8"
//         >
//           <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
//             Escenarios comunes:
//           </h3>
          
//           <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mx-auto">
//             {escenarios.map((escenario, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 * index }}
//                 viewport={{ once: true }}
//                 className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-200"
//               >
//                 <escenario.icon className="h-5 w-5 text-[#04348c]" />
//                 <span className="text-gray-700"> {escenario.title}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Llamada a la acción */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center bg-white border-2 border-[#e7d21e] rounded-lg p-6"
//         >
//           <p className="text-gray-700 text-lg mb-4">
//             📞 <strong>Coordiná con nosotros y te lo llevamos.</strong>
//           </p>
          
//           <a
//             href="https://wa.me/5493416868049?text=Hola!%20Necesito%20consultar%20por%20un%20volquete."
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <motion.button
//               className="bg-[#e7d21e] text-[#04348c] font-semibold py-3 px-6 rounded-full hover:bg-[#e7d21e]/80 transition-colors duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Consultar por volquete
//             </motion.button>
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

import { useState, useEffect, useRef } from "react";
import { Truck, Home, Trash2, Building } from "lucide-react";

interface VisibleElements {
  title?: boolean;
  scenarios?: boolean;
  cta?: boolean;
}

export const Cuandonecesitas = () => {
  const [visibleElements, setVisibleElements] = useState<VisibleElements>({});
  const elementsRef = useRef<Record<string, HTMLElement | null>>({});

  const escenarios = [
    {
      icon: Home,
      title: "Obras o reformas",
      description: "Escombros, materiales y residuos de construcción"
    },
    {
      icon: Trash2,
      title: "Limpieza profunda",
      description: "Mudanzas, vaciado de casas y limpieza general"
    },
    {
      icon: Building,
      title: "Locales comerciales",
      description: "Vaciado de oficinas, locales y propiedades"
    },
    {
      icon: Truck,
      title: "Eventos grandes",
      description: "Residuos de fiestas, eventos y celebraciones"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const animateKey = target.dataset.animate;
            if (animateKey) {
              setVisibleElements(prev => ({
                ...prev,
                [animateKey]: true
              }));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    Object.values(elementsRef.current).forEach(element => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const setElementRef = (key: string) => (el: HTMLElement | null) => {
    elementsRef.current[key] = el;
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div
          ref={setElementRef('title')}
          data-animate="title"
          className={`text-center mb-6 lg:mb-12 transition-all duration-1000 ${
            visibleElements.title 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h2 className="text-xl lg:text-3xl sm:text-3xl font-bold text-[#04348c] mb-2 lg:mb-4">
            ¿CUÁNDO NECESITÁS UN VOLQUETE?
          </h2>
          <div className="w-76 lg:w-120 h-1 bg-[#e7d21e] mx-auto rounded-full"></div>
        </div>

        {/* Escenarios - Diseño de Cards */}
        <div
          ref={setElementRef('scenarios')}
          data-animate="scenarios"
          className={`mb-8 lg:mb-12 transition-all duration-1000 delay-200 ${
            visibleElements.scenarios 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
            {escenarios.map((escenario, index) => (
              <div
                key={index}
                className="group bg-white p-3 lg:p-6 rounded-lg lg:rounded-xl shadow-md lg:shadow-lg border border-gray-200 lg:border-2 lg:border-transparent hover:border-[#e7d21e] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 mx-auto mb-2 lg:mb-4 bg-[#04348c] rounded-full flex items-center justify-center group-hover:bg-[#e7d21e] transition-all duration-300">
                    <escenario.icon className="h-5 w-5 lg:h-8 lg:w-8 text-white group-hover:text-[#04348c]" />
                  </div>
                  <h3 className="font-bold text-[#04348c] mb-1 lg:mb-2 text-sm lg:text-lg">
                    {escenario.title}
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed hidden lg:block">
                    {escenario.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Llamada a la acción */}
        <div
          ref={setElementRef('cta')}
          data-animate="cta"
          className={`text-center transition-all duration-1000 delay-400 ${
            visibleElements.cta 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="bg-white border-2 border-[#e7d21e] rounded-lg p-4 text-[#04348c] shadow-lg">
            <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-4">
              ¿Listo para solicitar tu volquete?
            </h3>
            <p className="text-sm lg:text-lg mb-4 lg:mb-6 lg:opacity-90">
              📞 Coordiná con nosotros y te lo llevamos donde necesites
            </p>
            
            <a
              href="https://wa.me/5493416868049?text=Hola!%20Necesito%20consultar%20por%20un%20volquete."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#e7d21e] text-[#04348c] font-bold py-2.5 px-6 lg:py-4 lg:px-8 rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-300 text-sm lg:text-lg shadow-lg">
                Consultar por WhatsApp
              </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cuandonecesitas;