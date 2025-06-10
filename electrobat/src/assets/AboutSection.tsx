import React from 'react';
import { motion } from 'framer-motion';
import empresa from './imgs/electrobat.webp';
import { FaTools, FaAward, FaUsers, FaChartLine } from 'react-icons/fa';

export const AboutSection: React.FC = () => {


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
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nosotros
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">20 Años de Experiencia</h3>
            <p className="text-gray-600 mb-6">
              Somos una empresa dedicada al abastecimiento, prestación de servicios y ventas de baterías con 20 años de trayectoria en el rubro. Apuntamos a dar respuestas, de acuerdo a las necesidades para cada exigencia concreta, colocando recursos frente a cada requerimiento.
            </p>
            <p className="text-gray-600 mb-6">
              La empresa está integrada por personas con trayectoria, idoneidad y experiencia, sumada a una permanente capacitación que afianza sus niveles de liderazgo y competitividad.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="bg-yellow-400 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Servicio 24/7</span>
              </div>
              <div className="flex items-center">
                <span className="bg-yellow-400 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Garantía Extendida</span>
              </div>
              <div className="flex items-center">
                <span className="bg-yellow-400 rounded-full p-2 mr-3">
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
            className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl group"
          >
            <img 
              src={empresa} 
              alt="Equipo de trabajo" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="bg-yellow-400 inline-block px-4 py-2 rounded-lg text-gray-900 font-bold mb-2">
                ElectroBat
              </div>
              <p className="text-white text-lg">
                Profesionales con pasión por la excelencia
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
              <FaUsers className="h-6 w-6 text-yellow-600" />
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
              <FaAward className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">20</h3>
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
              <FaChartLine className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
            <p className="text-gray-600 mt-1">Proyectos Entregados</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
              <FaTools className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600 mt-1">Soporte Técnico</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
