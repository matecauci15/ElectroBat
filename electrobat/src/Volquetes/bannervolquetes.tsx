import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import volquete from '../assets/imgs/volquete.webp';
import mecanico from '../assets/imgs/mecanico.jpg';

export const BannerVolquetes: React.FC = () => {
    // Function to handle smooth scrolling
    const scrollToSectionButton = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    // CTA Functions
    const handlePhoneClick = () => {
        window.location.href = 'tel:+5493416868049';
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = '5493416868049';
        const message = encodeURIComponent('Hola! Necesito consultar por alquiler de volquetes en Rosario.');
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
        } else {
            window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
        }
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

        {/* SERVICE BANNER SECTION - IMPROVED */}
        <div className="relative z-0 py-4 md:py-12 mt-20">
          <div className="max-w-4xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-4 md:mb-8">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2 uppercase">
                Elegí tu servicio
              </h2>
              {/* <p className="text-sm md:text-lg text-gray-300">Elegí tu servicio</p> */}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-sm md:max-w-3xl mx-auto">
              {/* Baterías */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group bg-gray-800/90 border border-gray-600/50 rounded-lg md:rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                {/* Image */}
                <div className="aspect-[5/2] md:aspect-[3/2] overflow-hidden">
                  <img
                    src={mecanico}
                    alt="Batería de auto"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-2 md:p-6 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">
                    BATERÍAS
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm mb-2 md:mb-4 hidden md:block">
                    Cambio e instalación para todos los vehículos
                  </p>
                  <button
                    onClick={() => {
                      window.location.href = '/ElectroBat';
                    }}
                    className="w-full py-2 md:py-3 px-2 md:px-4 bg-blue-600 text-white font-semibold rounded md:rounded-lg hover:bg-blue-700 transition-all duration-300 text-xs md:text-base"
                  >
                    VER BATERÍAS
                  </button>
                </div>
              </motion.div>

              {/* Volquetes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group bg-gray-800/90 border border-gray-600/50 rounded-lg md:rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                {/* Image */}
                <div className="aspect-[5/2] md:aspect-[3/2] overflow-hidden">
                  <img
                    src={volquete}
                    alt="Volquete para obras"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-2 md:p-6 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">
                    VOLQUETES
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm mb-2 md:mb-4 hidden md:block">
                    Alquiler para obras, mudanzas y limpieza
                  </p>
                  <button
                    onClick={() => scrollToSectionButton("volquetes")}
                    className="w-full py-2 md:py-3 px-2 md:px-4 bg-[#efd816] text-white font-semibold rounded md:rounded-lg hover:bg-yellow-200 transition-all duration-300 text-xs md:text-base"
                  >
                    VER VOLQUETES
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* VOLQUETES CTA SECTION */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 min-h-screen flex items-center">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="px-4 py-8 space-y-8">
              
              {/* Mobile Main Content */}
              <div className="space-y-6">
                
                {/* Lead text - Mobile */}
                <div className="space-y-3">
                  <p className="text-white text-2xl text-center leading-relaxed">
                    ¿Necesitás un volquete para tu obra o limpieza en Rosario?
                  </p>
                  <p className="text-white text-xl text-center font-semibold">
                    Llevamos tu volquete donde lo necesitás
                  </p>
                </div>

                {/* Title section - Mobile */}
                <div className="space-y-3 text-center">
                  <h1 className="text-4xl font-black text-center text-white leading-tight">
                    Alquiler de Volquetes
                  </h1>
                  <div className="inline-flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-[#e7d21e]" />
                    <span className="text-white uppercase font-bold text-xl">
                      Rosario
                    </span>
                  </div>
                </div>

                <p className="text-lg text-white/80 text-center font-light">
                  Volquetes habilitados y asegurados
                </p>

                {/* Action buttons - Mobile */}
               {/* Botones de Acción CTA - Diseño clásico con efectos */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                <button
                  id="cta-hero-phone"
                  onClick={handlePhoneClick}
                  className="cursor-pointer flex-1 flex items-center justify-center px-4 py-4 sm:px-6 sm:py-5 lg:py-6 border-3 border-[#e7d21e] text-sm sm:text-base lg:text-lg font-bold rounded-xl text-[#e7d21e] bg-transparent hover:bg-[#e7d21e] hover:text-[#04348c] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm group"
                  style={{
                    boxShadow: '0 0 20px rgba(231, 210, 30, 0.3)',
                    borderWidth: '3px'
                  }}
                >
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                    <div className="flex items-center justify-center sm:justify-start font-bold text-lg">
                      <Phone className="mr-2 w-5 h-5 sm:w-6 sm:h-6 text-[#e7d21e] group-hover:text-[#04348c] transition-all duration-300" />
                      LLAMAR AHORA
                    </div>
                  </div>
                </button>

                <button
                  id="cta-hero-whatsapp"
                  onClick={handleWhatsAppClick}
                  className="cursor-pointer flex-1 flex items-center justify-center px-4 py-4 sm:px-6 sm:py-5 lg:py-6 border-3 border-[#25d366] text-sm sm:text-base lg:text-lg font-bold rounded-xl text-[#25d366] bg-transparent hover:bg-[#25d366] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm group"
                  style={{
                    boxShadow: '0 0 20px rgba(37, 211, 102, 0.3)',
                    borderWidth: '3px'
                  }}
                >
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                    <div className="flex text-lg items-center justify-center sm:justify-start font-bold">
                      <svg
                        className="mr-2 w-5 h-5 sm:w-6 sm:h-6 text-[#25d366] group-hover:text-white transition-all duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                      </svg>
                      WHATSAPP
                    </div>
                  </div>
                </button>
              </div>
              </div>

              {/* Mobile Schedule Card */}
              <div className="bg-gray-800/90 border-2 border-[#e7d21e] rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    ALQUILÁ TU VOLQUETE HOY MISMO
                  </h3>
                  
                  <button
                    onClick={handleMapsClick}
                    className="w-full flex items-center justify-center px-6 py-3 border-2 border-white text-base rounded-xl text-white bg-transparent hover:bg-[#04348c] hover:text-white transition-all duration-300 backdrop-blur-sm mb-4"
                  >
                    <MapPin className="text-[#e7d21e] mr-2 w-5 h-5" />
                    CÓMO LLEGAR
                  </button>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/50">
                  <div className="flex items-center justify-center mb-3">
                    <Clock className="text-[#e7d21e] mr-2 w-4 h-4" />
                    <h4 className="text-white font-semibold text-lg">HORARIOS</h4>
                  </div>
                  <div className="text-center text-md text-gray-300 space-y-1">
                    <p><strong>Lunes a Viernes:</strong> 8:00–13:00 / 14:30–18:30</p>
                    <p><strong>Sábados:</strong> 8:30–13:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Desktop - Left Column */}
                <div className="space-y-6">
                  
                  {/* Lead text - Desktop */}
                  <div className="space-y-3">
                    <p className="text-white font-semibold text-2xl leading-relaxed">
                      ¿Necesitás un volquete para tu obra o limpieza en Rosario?
                    </p>
                    <p className="text-gray-100 text-2xl ">
                      Llevamos tu volquete donde lo necesitás
                    </p>
                  </div>

                  {/* Title section - Desktop */}
                  <div className="space-y-2">
                    <h1 className="text-5xl font-black text-white leading-tight">
                      Alquiler de Volquetes
                    </h1>
                    <div className="inline-flex items-center space-x-2">
                      <MapPin className="w-6 h-6 text-[#e7d21e]" />
                      <span className="text-white uppercase font-bold text-2xl">
                        Rosario
                      </span>
                    </div>
                  </div>

                  <p className="text-xl text-gray-100 font-light">
                    Coordiná fácil y rápido por llamada o WhatsApp
                  </p>

                  {/* Action buttons - Desktop */}
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={handlePhoneClick}
                      className="group backdrop-blur-md hover:bg-[#e7d21e] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-[#e7d21e]"
                    >
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-[#e7d21e] group-hover:text-white group-hover:animate-bounce" />
                        <span>Llamar Ahora</span>
                      </div>
                    </button>

                    <button
                      onClick={handleWhatsAppClick}
                      className="group backdrop-blur-md hover:bg-[#e7d21e] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-[#e7d21e]"
                    >
                      <div className="flex items-center space-x-3">
                       <svg
                          className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-[#e7d21e] group-hover:text-[#04348c] transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                        </svg>
                        <span>WhatsApp</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Desktop - Right Column */}
                <div>
                  <div className="bg-gray-800/90 border-2 border-[#e7d21e] rounded-2xl p-8 backdrop-blur-sm hover:border-[#e7d21e]/80 hover:bg-gray-800/95 transition-all duration-300">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        ALQUILÁ TU VOLQUETE HOY MISMO
                      </h3>
                      
                      <button
                        onClick={handleMapsClick}
                        className="flex items-center justify-center px-6 py-4 border-2 border-white text-lg rounded-xl text-white bg-transparent hover:bg-[#04348c] hover:text-white hover:scale-102 transition-all duration-300 backdrop-blur-sm w-full"
                      >
                        <MapPin className="text-[#e7d21e] mr-2" />
                        CÓMO LLEGAR
                      </button>
                    </div>

                    <div className="text-center mb-6">
                      <p className="text-gray-300 text-lg font-medium">
                        Coordinamos la entrega y retiro del volquete <br />cuando vos quieras.
                      </p>
                    </div>

                    <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/50">
                      <div className="flex items-center justify-center mb-3">
                        <Clock className="text-[#e7d21e] mr-2 w-4 h-4" />
                        <h4 className="text-white font-semibold text-base">HORARIOS</h4>
                      </div>
                      <div className="text-center text-base text-gray-300 space-y-1">
                        <p><strong>Lunes a Viernes:</strong> 8:00–13:00 / 14:30–18:30</p>
                        <p><strong>Sábados:</strong> 9:00–13:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}