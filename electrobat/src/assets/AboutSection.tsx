import React from 'react';
import { motion } from 'framer-motion';
import empresa from './imgs/electrobat.webp';
import { Wrench, Award, Users, TrendingUp, Zap, Settings, Car, MapPin, Battery, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {

  // const handleMapsClick = () => {
  //     window.open('https://maps.google.com/?q=Rosario+ElectroBat', '_blank');
  // };


  return (
    <section id="about" className="py-20 bg-gray-100">
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
          <div className="h-1 md:w-44 w-36 rounded-xl bg-[#e7d21e] mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#04348c]/90 mb-4">30 Años de Experiencia</h3>
            <p className="text-gray-600 text-lg mb-6">
              Somos una empresa dedicada al abastecimiento, prestación de servicios y ventas de baterías con 20 años de trayectoria en el rubro. Apuntamos a dar respuestas, de acuerdo a las necesidades para cada exigencia concreta, colocando recursos frente a cada requerimiento.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              La empresa está integrada por personas con trayectoria, idoneidad y experiencia, sumada a una permanente capacitación que afianza sus niveles de liderazgo y competitividad.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="bg-[#e7d21e] rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 text-lg">Servicio rápido</span>
              </div>
              <div className="flex items-center">
                <span className="bg-[#e7d21e] rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 text-lg">Capacitación a empresas</span>
              </div>
              <div className="flex items-center">
                <span className="bg-[#e7d21e] rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 text-lg">Asesoría Especializada</span>
              </div>
            </div>
          </motion.div>
          
          <Link
          to="https://maps.google.com/?q=Rosario+ElectroBat"
          target="_blank"
          className="group relative block"
          rel="noopener noreferrer"
          // onClick={handleMapsClick}
          >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl group"
            >
            <img 
              src={empresa} 
              alt="Equipo de trabajo" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6">
              {/* <p className="text-white text-lg">
                Profesionales con pasión por la excelencia
                </p> */}
            </div>
          </motion.div>
                </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-3 md:grid-cols-3 md:gap-8 gap-2 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center text-2xl w-12 h-12 mb-4 bg-yellow-100 rounded-full">
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
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
              <Award className="h-6 w-6 text-[#e7d21e]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">30+</h3>
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
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-[#04348c] sm:text-4xl">
              ¿POR QUÉ ELEGIRNOS?
            </h3>
            <div className="h-1 md:w-100 w-80 rounded-xl bg-[#e7d21e] mx-auto mt-4"></div>
            <p className="text-lg md:text-xl text-[#04348c]/80 mt-4 max-w-3xl mx-auto">
              Más que un cambio de batería: una solución completa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#e7d21e]"
            >
              <div className="flex items-center mb-3">
                <div className="bg-[#e7d21e]/30 rounded-full p-2 mr-3">
                  <Zap className="h-5 w-5 text-[#e7d21e]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Control de carga incluido</h4>
              </div>
              <p className="text-gray-600 text-lg">En cada cambio de batería</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#e7d21e]"
            >
              <div className="flex items-center mb-3">
                <div className="bg-[#e7d21e]/30 rounded-full p-2 mr-3">
                  <Settings className="h-5 w-5 text-[#e7d21e]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Revisión preventiva</h4>
              </div>
              <p className="text-gray-600 text-lg">Cada seis meses</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#e7d21e]"
            >
              <div className="flex items-center mb-3">
                <div className="bg-[#e7d21e]/30 rounded-full p-2 mr-3">
                  <Car className="h-5 w-5 text-[#e7d21e]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Servicio a domicilio</h4>
              </div>
              <p className="text-gray-600 text-lg">En la ciudad de Rosario</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#e7d21e]"
            >
              <div className="flex items-center mb-3">
                <div className="bg-[#e7d21e]/30 rounded-full p-2 mr-3">
                  <Wrench className="h-5 w-5 text-[#e7d21e]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Instalación profesional</h4>
              </div>
              <p className="text-gray-600 text-lg">Con personal capacitado</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#e7d21e]"
            >
              <div className="flex items-center mb-3">
                <div className="bg-[#e7d21e]/30 rounded-full p-2 mr-3">
                  <Battery className="h-5 w-5 text-[#e7d21e]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Baterías de alta calidad</h4>
              </div>
              <p className="text-gray-600 text-lg">Para todo tipo de vehículos</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#e7d21e]"
            >
              <div className="flex items-center mb-3">
                <div className="bg-[#e7d21e]/30 rounded-full p-2 mr-3">
                  <MapPin className="h-5 w-5 text-[#e7d21e]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Ubicación estratégica</h4>
              </div>
              <p className="text-gray-600 text-lg">Centro geográfico de la ciudad</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 text-center bg-yellow-50 p-6 rounded-lg border border-yellow-200"
          >
            <div className="flex items-center justify-center mb-2">
              <div className="bg-[#e7d21e]/30 rounded-full p-2 mr-3">
                <Clock className="h-5 w-5 text-[#e7d21e]" />
              </div>
              <h4 className="text-xl font-semibold text-[#04348c]">Horarios de Atención</h4>
            </div>
            <p className="text-gray-700">
              <span className="font-medium text-lg">Lunes a Viernes:</span> 8:00 - 13:00 / 14:30 - 18:30
            </p>
            <p className="text-gray-700">
              <span className="font-medium text-lg">Sábados:</span> 8:30 - 13:00
            </p>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};