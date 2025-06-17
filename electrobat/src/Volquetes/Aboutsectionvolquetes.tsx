import React from 'react';
import { motion } from 'framer-motion';
import empresa from '../assets/imgs/electrobat.webp';
import { Wrench, Award, Users, TrendingUp, Zap, Settings, Car, MapPin, Battery, Clock } from 'lucide-react';

export const AboutSectionvolquetes: React.FC = () => {

  return (
    <section id="about" className="py-20 bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-[#04348c] sm:text-4xl">
            NOSOTROS
          </h2>
          <div className="h-1 w-40 bg-[#e7d21e] rounded-full mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#04348c]/90 mb-4">20 Años de Experiencia</h3>
            <p className="text-gray-600 mb-6">
              Somos una empresa dedicada al abastecimiento, prestación de servicios y ventas de baterías con 20 años de trayectoria en el rubro. Apuntamos a dar respuestas, de acuerdo a las necesidades para cada exigencia concreta, colocando recursos frente a cada requerimiento.
            </p>
            <p className="text-gray-600 mb-6">
              La empresa está integrada por personas con trayectoria, idoneidad y experiencia, sumada a una permanente capacitación que afianza sus niveles de liderazgo y competitividad.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="bg-[#e7d21e] rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Servicio 24/7</span>
              </div>
              <div className="flex items-center">
                <span className="bg-[#e7d21e] rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Garantía Extendida</span>
              </div>
              <div className="flex items-center">
                <span className="bg-[#e7d21e] rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Asesoría Especializada</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
              className="relative h-80 md:h-96 rounded-lg shadow-xl group overflow-hidden"

          >
            <img 
              src={empresa} 
              alt="Equipo de trabajo" 
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="bg-[#e7d21e] inline-block px-4 py-2 rounded-lg text-blue-800 font-bold mb-2">
                ElectroBat
              </div>
              <p className="text-white text-lg">
                Profesionales con pasión por la excelencia
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 grid grid-cols-3 md:grid-cols-3 md:gap-8 gap-2 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
              <Users className="h-6 w-6 text-[#e7d21e]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600 mt-1">Clientes Satisfechos</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white  rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
              <Award className="h-6 w-6 text-[#e7d21e]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">25+</h3>
            <p className="text-gray-600 mt-1">Años de Experiencia</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-[#e7d21e]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
            <p className="text-gray-600 mt-1">Baterias Entregadas</p>
          </motion.div>
          
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
              <Wrench className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600 mt-1">Soporte Técnico</p>
          </motion.div> */}
        </div>
        
        {/* NUEVA SECCIÓN: ¿POR QUÉ ELEGIRNOS? - EMPIEZA AQUÍ */}
<motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-[#04348c] sm:text-4xl">
              ¿POR QUÉ ELEGIRNOS?
            </h3>
            <div className="h-1 w-20 bg-[#e7d21e] rounded-full mx-auto mt-3 md:w-90"></div>
            <p className="text-sm md:text-xl text-[#04348c]/80 mt-3 max-w-3xl mx-auto">
              Alquiler de volquetes seguro y profesional, con mas de 20 años de experiencia
            </p>
          </div>
          
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-2 border-[#e7d21e] h-full flex flex-col"
            >
              <div className="flex items-center ">
                <div className="bg-[#e7d21e]/30 rounded-full p-1.5 mr-2">
                  <Zap className="h-4 w-4 text-[#e7d21e]" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 leading-tight">Volquetes para obras, demoliciones</h4>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-2 border-[#e7d21e] h-full flex flex-col"
            >
              <div className="flex items-center">
                <div className="bg-[#e7d21e]/30 rounded-full p-1.5 mr-2">
                  <Settings className="h-4 w-4 text-[#e7d21e]" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 leading-tight">Coordinación por llamada o WhatsApp</h4>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-2 border-[#e7d21e] h-full flex flex-col"
            >
              <div className="flex items-center ">
                <div className="bg-[#e7d21e]/30 rounded-full p-1.5 mr-2">
                  <Car className="h-4 w-4 text-[#e7d21e]" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 leading-tight">Servicio exclusivo en Rosario ciudad</h4>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-2 border-[#e7d21e] h-full flex flex-col"
            >
              <div className="flex items-center ">
                <div className="bg-[#e7d21e]/30 rounded-full p-1.5 mr-2">
                  <Wrench className="h-4 w-4 text-[#e7d21e]" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 leading-tight">Entrega por orden de llegada con</h4>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-2 border-[#e7d21e] h-full flex flex-col"
            >
              <div className="flex items-center ">
                <div className="bg-[#e7d21e]/30 rounded-full p-1.5 mr-2">
                  <Battery className="h-4 w-4 text-[#e7d21e]" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 leading-tight">Retiro fácil y rápido cuando vos lo pedís</h4>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-2 border-[#e7d21e] h-full flex flex-col"
            >
              <div className="flex items-center ">
                <div className="bg-[#e7d21e]/30 rounded-full p-1.5 mr-2">
                  <MapPin className="h-4 w-4 text-[#e7d21e]" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 leading-tight">Más de 20 años de experiencia local</h4>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-6 text-center bg-yellow-50 p-4 rounded-lg border border-yellow-200"
          >
            <div className="flex items-center justify-center mb-2">
              <div className="bg-[#e7d21e]/30 rounded-full p-1.5 mr-2">
                <Clock className="h-4 w-4 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Horarios de Atención</h4>
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Lunes a Viernes:</span> 8:00 - 13:00 / 14:30 - 18:30
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Sábados:</span> 9:00 - 13:00
            </p>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};