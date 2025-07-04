import React from "react";
import { motion } from "framer-motion";

export const ServiceBanner: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section className="py-8 lg:py-12 min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600">
            <div className="max-w-6xl mx-auto px-4 mt-10 lg:mt-20">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        ¿Qué necesitás?
                    </h2>
                    <p className="text-gray-300">Elegí tu servicio</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Baterías */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-800/40 border border-gray-600/50 rounded-xl overflow-hidden backdrop-blur-sm hover:border-gray-500/70 hover:bg-gray-800/50 transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="h-48 overflow-hidden">
                            <img 
                                src="https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Batería de auto"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-white mb-3">Baterías</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Cambio e instalación para todos los vehículos
                            </p>
                            <button
                                onClick={() => scrollToSection('baterias')}
                                className="w-full py-3 px-6 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-500 transition-all duration-300"
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
                        className="bg-gray-800/40 border border-gray-600/50 rounded-xl overflow-hidden backdrop-blur-sm hover:border-gray-500/70 hover:bg-gray-800/50 transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="h-48 overflow-hidden">
                            <img 
                                src="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Volquete para obras"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-white mb-3">Volquetes</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Alquiler para obras, mudanzas y limpieza
                            </p>
                            <button
                                onClick={() => scrollToSection('volquetes')}
                                className="w-full py-3 px-6 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-500 transition-all duration-300"
                            >
                                VER VOLQUETES
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};