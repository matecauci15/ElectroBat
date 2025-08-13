import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaCar } from "react-icons/fa";
import { MapPin, MapPinned, Phone } from "lucide-react";

export const Banner: React.FC = () => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:+5493414000000';
    };

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent('Hola! Necesito información sobre cambio de batería');
        window.open(`https://wa.me/5493416868049?text=${message}`, '_blank');
    };

    const handleMapsClick = () => {
        window.open('https://maps.google.com/?q=Rosario+ElectroBat', '_blank');
    };

    return (
      <section id="home" className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 ">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-600 opacity-90"></div>
          {/* Animated background elements for desktop */}
          <div className="hidden lg:block absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="hidden lg:block absolute bottom-20 right-10 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="hidden lg:block absolute top-1/2 right-20 w-16 h-16 bg-green-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        {/* ORIGINAL BANNER SECTION */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 min-h-screen flex items-center ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center w-full">
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
                <p className="mt-20 md:mt-5 text-xl sm:text-2xl lg:text-2xl text-white leading-tight">
                  ¿Problemas con la batería del auto?
                </p>
              </motion.div>

              {/* H1 - Título Principal */}
              <div className="mb-6 lg:mb-8">
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight">
                  Cambio de baterías para autos en Rosario 
                  <div className="flex flex-col mt-2">
                  <span className="text-white/90 text-xl">Todo tipo de vehículos</span>
                  </div>
                    
                  <div className="flex text-[#efd816] flex-row items-center justify-center lg:justify-start mt-2">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6" />
                    <span className="xl:text-2xl ml-1 uppercase text-xl block text-white font-semibold">
                      Rosario
                    </span>
                  </div>
                </h1>
              </div>

              {/* Botones de Acción CTA - Con animaciones en iconos */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                <button
                  id="cta-hero-phone"
                  onClick={handlePhoneClick}
                  className="cursor-pointer flex-1 flex items-center justify-center px-4 py-4 sm:px-6 sm:py-5 lg:py-4 border-3 border-[#e7d21e] text-sm sm:text-base lg:text-lg font-bold rounded-xl bg-[#e7d21e] text-white hover:bg-[#f5e64a] hover:border-[#f5e64a] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm group"
                  style={{
                    boxShadow: '0 0 20px rgba(231, 210, 30, 0.3)',
                    borderWidth: '3px',
                    minHeight: '88px'
                  }}
                >
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                    <div className="flex items-center justify-center sm:justify-start font-bold text-lg mb-1">
                      <Phone className="mr-2 w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:animate-bounce transition-all duration-300" />
                      LLAMAR AHORA
                    </div>
                    <div className="text-xs sm:text-sm font-medium leading-tight opacity-90 group-hover:opacity-100">
                      Si necesitás cambio a domicilio o asesoramiento
                    </div>
                  </div>
                </button>

                <button
                  id="cta-hero-whatsapp"
                  onClick={handleWhatsAppClick}
                  className="cursor-pointer flex-1 flex items-center justify-center px-4 py-4 sm:px-6 sm:py-5 lg:py-4 border-3 border-[#25d366] text-sm sm:text-base lg:text-lg font-bold rounded-xl bg-[#25d366] text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm group"
                  style={{
                    boxShadow: '0 0 20px rgba(37, 211, 102, 0.3)',
                    borderWidth: '3px'
                  }}
                >
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                    <div className="flex text-lg items-center justify-center sm:justify-start font-bold mb-1">
                      <svg
                        className="mr-2 w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:animate-bounce transition-all duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                      </svg>
                      WHATSAPP
                    </div>
                    <div className="text-xs sm:text-sm font-medium leading-tight opacity-90 group-hover:opacity-100">
                      Consultar precio o asesoramientos. Stock disponible
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
                  <FaCar className="text-[#e7d21e] mr-2" />
                  <span>Todos los vehículos</span>
                </div>
              </div>

              {/* Botón ¿Por qué elegirnos? */}
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
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
              </a>
            </motion.div>

            {/* Right Column - Subsección: VENÍ AL TALLER */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2"
            >
              <div className="bg-gray-800/60 border-2 border-[#e7d21e] rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm hover:border-[#e7d21e]/80 hover:bg-gray-800/75 transition-all duration-300 max-w-md mx-auto lg:max-w-none">
                {/* CTA Texto Destacado */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="flex items-center justify-center space-x-3 mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-white">
                      VENÍ AL LOCAL Y SALÍ CON BATERÍA NUEVA
                    </h3>
                  </div>
                </div>

                {/* Botón Cómo Llegar - Más pequeño en mobile */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <button
                    id="cta-workshop-maps"
                    onClick={handleMapsClick}
                    className="cursor-pointer flex items-center font-bold justify-center px-4 py-2 sm:px-6 sm:py-4 lg:py-5 border-2 border-white text-md sm:text-base lg:text-lg rounded-xl text-white bg-transparent hover:bg-[#04348c] hover:text-white hover:scale-102 transition-all duration-300 backdrop-blur-sm group max-w-xs sm:max-w-sm lg:max-w-2xl md:w-full"
                  >
                    <MapPinned className="text-[#e7d21e] mr-2" />
                    CÓMO LLEGAR
                  </button>
                </div>

                {/* Texto Aclaratorio */}
                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-gray-300 text-md sm:text-base lg:text-lg font-medium mb-2">
                    Cambiamos tu batería al instante sin sacar turno.
                  </p>
                </div>

                {/* Horarios */}
                <div className="bg-gray-700/50 rounded-lg p-3 sm:p-4 border border-gray-600/50">
                  <div className="flex items-center justify-center mb-2 sm:mb-3">
                    <h4 className="text-white font-semibold text-md sm:text-base">
                      HORARIOS
                    </h4>
                  </div>
                  <div className="text-center text-sm sm:text-sm lg:text-base text-gray-300 space-y-1">
                    <p>
                      <strong>Lunes a Viernes:</strong> 8:00–13:00 / 14:30–18:30
                    </p>
                    <p>
                      <strong>Sábados:</strong> 8:30–13:00
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
}