// // ElectroBat - Banner.tsx
// import React from "react";
// import { motion } from "framer-motion";
// import { FaBatteryFull, FaTruck } from "react-icons/fa";
// import { TypeAnimation } from 'react-type-animation';

// export const Banner: React.FC = () => {
//     // Function to handle smooth scrolling
//     const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
//         e.preventDefault();
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start',
//             });
//         }
//     };

//     return (
//       <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-80"></div>
//           <video 
//             className="w-full h-full object-cover"
//             autoPlay 
//             muted 
//             loop 
//             playsInline
//           >
//             <source src="https://assets.mixkit.co/videos/preview/mixkit-big-yellow-excavator-working-on-a-construction-site-13216-large.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
        
//         <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-3xl mx-auto"
//           >
//             <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
//               <TypeAnimation
//                 sequence={[
//                   'Potencia para tu Maquinaria', 2000,
//                   'Baterías de Alta Calidad', 2000,
//                   'Volquetes de Primera Línea', 2000
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 repeat={Infinity}
//               />
//             </h1>
//             <p className="text-xl text-gray-300 mb-8">
//               20 años de experiencia brindando soluciones energéticas y equipamiento pesado.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <a 
//                 href="#batteries" 
//                 onClick={(e) => scrollToSection(e, 'batteries')}
//                 className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-colors"
//               >
//                 <FaBatteryFull className="mr-2" /> Venta de Baterías
//               </a>
//               <a 
//                 href="#trucks" 
//                 onClick={(e) => scrollToSection(e, 'trucks')}
//                 className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors"
//               >
//                 <FaTruck className="mr-2" /> Alquiler de Volquetes
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     );
// };

// // ElectroBat - Banner.tsx (Botones más pequeños)
// import React from "react";
// import { motion } from "framer-motion";
// import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaTools, FaBolt, FaCar } from "react-icons/fa";
// import { TypeAnimation } from 'react-type-animation';

// export const Banner: React.FC = () => {
//     // Function to handle smooth scrolling
//     const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
//         e.preventDefault();
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start',
//             });
//         }
//     };

//     const handlePhoneClick = () => {
//         window.location.href = 'tel:+5493414000000';
//     };

//     const handleWhatsAppClick = () => {
//         const message = encodeURIComponent('Hola! Necesito información sobre cambio de batería');
//         window.open(`https://wa.me/5493414000000?text=${message}`, '_blank');
//     };

//     const handleMapsClick = () => {
//         window.open('https://maps.google.com/?q=Rosario+ElectroBat', '_blank');
//     };

//     return (
//         <section id="home" className="relative min-h-screen md:mt-0  flex items-center justify-center overflow-hidden">
//             {/* Background */}
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black opacity-90"></div>
//                 {/* Animated background elements for desktop */}
//                 <div className="hidden lg:block absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
//                 <div className="hidden lg:block absolute bottom-20 right-10 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
//                 <div className="hidden lg:block absolute top-1/2 right-20 w-16 h-16 bg-green-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
//             </div>
            
//             {/* Main Content */}
//             <div className="relative md:mt-0 mt-10 z-10 w-full max-w-7xl mx-auto px-4 py-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
                    
//                     {/* Left Column - Main Content */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="text-center lg:text-left order-1"
//                     >
//                         {/* Main Title */}
//                         <div className="mb-6 lg:mb-8">
//                             <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
//                                 <TypeAnimation
//                                     sequence={[
//                                         '¿Problemas con la batería del auto?', 5000,
//                                         'Cambio de baterías para autos y camionetas', 2500,
//                                         'Servicio a domicilio en Rosario', 2500
//                                     ]}
//                                     wrapper="span"
//                                     speed={50}
//                                     repeat={Infinity}
//                                 />
//                             </h1>
//                             <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light">
//                                 en <span className="text-[#e7d21e] font-semibold">Rosario</span>
//                             </p>
//                         </div>

//                           <h1>Problemas con la bateria del auto?</h1>
//                         <div className="flex flex-col sm:flex-row gap-3 mb-8 lg:mb-10">
//                             <button
//                                 id="cta-hero-phone"
//                                 onClick={handlePhoneClick}
//                                 className="flex-1 flex items-center justify-center px-4 py-3 lg:py-4 border-2 border-[#e7d21e] text-sm lg:text-base font-medium rounded-lg text-[#e7d21e] bg-transparent hover:bg-yellow-400/20 hover:border-[#e7d21e] hover:scale-105 transition-all duration-300 backdrop-blur-sm group"
//                             >
//                                 <FaPhone className="mr-3 text-lg lg:text-xl group-hover:animate-bounce" />
//                                 <div>
//                                     <div className="font-semibold">Llama ahora</div>
//                                     <div className="text-xs opacity-90">Si necesitás cambio a domicilio o asesoramiento</div>
//                                 </div>
//                             </button>
                            
//                             <button
//                                 id="cta-hero-whatsapp"
//                                 onClick={handleWhatsAppClick}
//                                 className="flex-1 flex items-center justify-center px-4 py-3 lg:py-4 border-2 border-green-400/70 text-sm lg:text-base font-medium rounded-lg text-green-100 bg-transparent hover:bg-green-500/20 hover:border-green-300 hover:scale-105 transition-all duration-300 backdrop-blur-sm group"
//                             >
//                                 <FaWhatsapp className="mr-3 text-lg lg:text-xl group-hover:animate-bounce" />
//                                 <div>
//                                     {/* <div className="font-semibold">WHATSAPP</div> */}
//                                     <div className="text-xs opacity-90">Consultar precio o asesoramiento. Siempre tenemos stock.</div>
//                                 </div>
//                             </button>
//                         </div>

//                         {/* Quick Benefits - Only desktop */}
//                         <div className="hidden lg:flex items-center justify-start space-x-8 mb-8 text-sm">
//                             <div className="flex items-center text-gray-300">
//                                 <FaBolt className="text-[#e7d21e] mr-2" />
//                                 <span>Instalación rápida</span>
//                             </div>
//                             {/* <div className="flex items-center text-gray-300">
//                                 <FaClock className="text-blue-400 mr-2" />
//                                 <span>Disponible 24/7</span>
//                             </div> */}
//                             <div className="flex items-center text-gray-300">
//                                 <FaCar className="text-green-400 mr-2" />
//                                 <span>Todos los vehículos</span>
//                             </div>
//                         </div>

//                         {/* Scroll indicator */}
//                         <a
//                             href="#why-choose-us"
//                             onClick={(e) => scrollToSection(e, 'why-choose-us')}
//                             className="inline-flex items-center text-[#e7d21e] hover:text-[#e7d21e] transition-colors border-b border-[#e7d21e] hover:border-[#e7d21e] pb-1 text-sm lg:text-base group"
//                         >
//                             ¿Por qué elegirnos?
//                             <motion.span 
//                                 className="ml-2"
//                                 animate={{ y: [0, 5, 0] }}
//                                 transition={{ duration: 1.5, repeat: Infinity }}
//                             >
//                                 ↓
//                             </motion.span>
//                         </a>
//                     </motion.div>

//                     {/* Right Column - Workshop Section */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                         className="order-2"
//                     >
//                         <div className="bg-gray-800/80 border-2 border-[#e7d21e] rounded-2xl p-4 lg:p-8 backdrop-blur-sm hover:border-[#e7d21e]/80 hover:bg-gray-800/90 transition-all duration-300 max-w-sm mx-auto lg:max-w-none">
//                             <div className="flex items-center justify-center space-x-2 lg:space-x-3 mb-4 lg:mb-6">
//                                 <FaTools className="text-[#e7d21e] text-lg lg:text-3xl" />
//                                 <h3 className="text-lg lg:text-2xl font-bold text-[#e7d21e] text-center">
//                                     VENÍ AL TALLER
//                                 </h3>
//                             </div>
                            
//                             <button
//                                 id="cta-workshop-maps"
//                                 onClick={handleMapsClick}
//                                 className="w-full flex items-center justify-center px-4 lg:px-6 py-3 lg:py-5 border-2 border-blue-400/70 text-sm lg:text-lg font-medium rounded-xl text-blue-100 bg-transparent hover:bg-blue-500/20 hover:border-blue-300 hover:scale-105 transition-all duration-300 mb-4 lg:mb-6 backdrop-blur-sm group"
//                             >
//                                 <FaMapMarkerAlt className="mr-2 lg:mr-3 text-sm lg:text-lg group-hover:animate-pulse" />
//                                 CÓMO LLEGAR
//                             </button>

//                             <div className="text-center">
//                                 <p className="text-gray-300 text-sm lg:text-lg font-medium mb-1 lg:mb-2">
//                                     Cambiamos tu batería al instante
//                                 </p>
//                                 <p className="text-gray-400 text-xs lg:text-base">
//                                     Sin sacar turno • Atención inmediata
//                                 </p>
//                             </div>

//                             {/* Workshop benefits - Desktop only */}
//                             <div className="hidden lg:block mt-6 pt-6 border-t border-gray-600/50">
//                                 <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
//                                     <div className="flex items-center">
//                                         <div className="w-2 h-2 bg-[#e7d21e] rounded-full mr-2"></div>
//                                         <span>Garantía incluida</span>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
//                                         <span>Herramientas profesionales</span>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
//                                         <span>Diagnóstico gratuito</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };


// ? -=-=-=-=-====---=-=-=-=-=-       -=====-=-=-=  -============ ====---     - --  - - - - - - - - - - - --  - - --  - --  - -

// ElectroBat - Banner.tsx (Versión mejorada - MapPin centrado y botones optimizados)
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaCar } from "react-icons/fa";
import { MapPin, MapPinned, MessageSquare, Phone } from "lucide-react";

export const Banner: React.FC = () => {
    // Function to handle smooth scrolling
    // const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    //     e.preventDefault();
    //     const element = document.getElementById(id);
    //     if (element) {
    //         element.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start',
    //         });
    //     }
    // };

    const handlePhoneClick = () => {
        window.location.href = 'tel:+5493414000000';
    };

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent('Hola! Necesito información sobre cambio de batería');
        window.open(`https://wa.me/5493414000000?text=${message}`, '_blank');
    };

    const handleMapsClick = () => {
        window.open('https://maps.google.com/?q=Rosario+ElectroBat', '_blank');
    };

    return (
      <section
        id="home"
        className="relative min-h-screen md:mt-0 flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-gray-900 to-black opacity-90"></div>
          {/* Animated background elements for desktop */}
          <div className="hidden lg:block absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="hidden lg:block absolute bottom-20 right-10 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="hidden lg:block absolute top-1/2 right-20 w-16 h-16 bg-green-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Main Content */}
        <div className="relative md:mt-0 -mt-20 z-10 w-full max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-1"
            >
              {/* CTA Breve (Lead-in) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 lg:mb-6"
              >
                <p className="text-xl sm:text-2xl lg:text-2xl text-white leading-tight">
                  ¿Problemas con la batería del auto?
                </p>
              </motion.div>

              {/* H1 - Título Principal */}
              <div className="mb-6 lg:mb-8">
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight">
                  Cambio de baterías para autos y camionetas
                  <div className="flex text-[#efd816] flex-row items-center justify-center lg:justify-start mt-2">
                    <MapPin className="w-6 h-6 lg:w-8 lg:h-8" />
                    <span className="xl:text-3xl ml-2 text-2xl block text-white font-semibold">
                      Rosario
                    </span>
                  </div>
                </h1>
              </div>

              {/* Botones de Acción CTA - Mejorados */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                <button
                  id="cta-hero-phone"
                  onClick={handlePhoneClick}
                  className="flex-1 flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 lg:py-5 border-2 border-green-500 text-sm sm:text-base lg:text-lg font-semibold rounded-lg text-white bg-transparent hover:bg-[#e7d21e] hover:text-[#04348c] hover:scale-105 transition-all duration-300 backdrop-blur-sm group"
                >
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                    <div className="flex items-center justify-center sm:justify-start font-bold mb-1">
                      <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-green-500 group-hover:text-[#04348c] transition-colors" />
                      LLAMAR AHORA
                    </div>
                    <div className="text-xs sm:text-sm opacity-90 font-normal leading-tight">
                      Si necesitás cambio a domicilio o asesoramiento
                    </div>
                  </div>
                </button>

                <button
                  id="cta-hero-whatsapp"
                  onClick={handleWhatsAppClick}
                  className="flex-1 flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 lg:py-5 border-2 border-[#e7d21e] text-sm sm:text-base lg:text-lg font-semibold rounded-lg text-white bg-transparent hover:bg-[#e7d21e] hover:text-[#04348c] hover:scale-105 transition-all duration-300 backdrop-blur-sm group"
                >
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                    <div className="flex items-center justify-center sm:justify-start font-bold mb-1">
                      <MessageSquare className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-[#e7d21e] group-hover:text-[#04348c] transition-colors" />
                      WHATSAPP
                    </div>
                    <div className="text-xs sm:text-sm opacity-90 font-normal leading-tight">
                      Consultar precio o asesoramiento. Siempre tenemos stock
                    </div>
                  </div>
                </button>
              </div>

              {/* Quick Benefits - Solo desktop */}
              <div className="hidden lg:flex items-center justify-start space-x-8 mb-8 text-sm">
                <div className="flex items-center text-gray-300">
                  <FaBolt className="text-[#e7d21e] mr-2" />
                  <span>Instalación rápida</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaCar className="text-green-400 mr-2" />
                  <span>Todos los vehículos</span>
                </div>
              </div>

              {/* Botón ¿Por qué elegirnos?
              <a
                href="/nosotros"
                onClick={(e) => scrollToSection(e, "why-choose-us")}
                className="hidden md:inline-flex items-center text-[#e7d21e] hover:text-[#e7d21e] transition-colors border-b border-[#e7d21e] hover:border-[#e7d21e] pb-1 text-base lg:text-lg group font-medium"
              >
                ¿Por qué elegirnos?
                <motion.span
                  className="ml-2"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </a> */}
            </motion.div>

            {/* Right Column - Subsección: VENÍ AL TALLER */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2"
            >
              <div className="bg-gray-800/90 -mt-10 border-2 border-[#e7d21e] rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm hover:border-[#e7d21e]/80 hover:bg-gray-800/95 transition-all duration-300 max-w-md mx-auto lg:max-w-none">
                {/* CTA Texto Destacado */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="flex items-center justify-center space-x-3 mb-3 sm:mb-4">
                    <h3 className="text-md sm:text-xl lg:text-xl font-semibold text-white">
                    VENÍ AL TALLER Y SALÍ CON BATERÍA NUEVA

                    </h3>
                  </div>
                </div>

                {/* Botón Cómo Llegar - Más pequeño en mobile */}
                      <div className="flex justify-center mb-4 sm:mb-6">
                  <button
                    id="cta-workshop-maps"
                    onClick={handleMapsClick}
                    className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-4 lg:py-5 border-2 border-white text-sm sm:text-base lg:text-lg rounded-xl text-white bg-transparent hover:bg-[#04348c] hover:text-white hover:scale-102 transition-all duration-300 backdrop-blur-sm group max-w-xs sm:max-w-sm lg:max-w-2xl md:w-full"
                  >
                    <MapPinned className="text-[#e7d21e] mr-2" />
                    CÓMO LLEGAR
                  </button>
                </div>

                {/* Texto Aclaratorio */}
                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium mb-2">
                    Cambiamos tu batería al instante sin sacar turno.
                  </p>
                </div>

                {/* Horarios */}
                <div className="bg-gray-700/50 rounded-lg p-3 sm:p-4 border border-gray-600/50">
                  <div className="flex items-center justify-center mb-2 sm:mb-3">
                    {/* <FaClock className="text-[#e7d21e] mr-2" /> */}
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      ⏰ HORARIOS
                    </h4>
                  </div>
                  <div className="text-center text-xs sm:text-sm lg:text-base text-gray-300 space-y-1">
                    <p>
                      <strong>Lunes a Viernes:</strong> 8:00–13:00 / 14:30–18:30
                    </p>
                    <p>
                      <strong>Sábados:</strong> 9:00–13:00
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
};