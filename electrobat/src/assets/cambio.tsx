import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Clock, CheckCircle, AlertTriangle, Wrench, Car, ArrowRight } from "lucide-react";

const DomicilioSections = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5493416868049';
  };

  // OPCIÓN 1: Diseño minimalista con cards flotantes compactas
  const Option1 = () => (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-yellow-50 opacity-30"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-[#e7d21e]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header compacto */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#04348c] mb-6">
            Cambios a Domicilio
                      <div className="h-1 w-84 bg-[#e7d21e] mx-auto mt-4"></div>
          </h2>

          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#04348c] to-blue-600 rounded-2xl p-6 shadow-xl">
            <p className="text-lg md:text-xl text-white mb-3 font-semibold">
              ¿Tu batería falló o no te arranca el auto en Rosario?
            </p>
            <p className="text-base text-blue-100 mb-4">
              Lo resolvemos en 3 pasos simples.
            </p>
            <div className="inline-flex items-center bg-[#e7d21e] text-[#04348c] px-4 py-2 rounded-full font-bold text-sm">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Vamos a donde estás
            </div>
          </div>
        </motion.div>

        {/* Steps con cards compactas - misma altura */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Paso 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group h-full"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#e7d21e] hover:border-[#04348c] transform hover:-translate-y-1 h-full flex flex-col">
              <div className="text-center flex-1 flex flex-col">
                <div className="bg-[#e7d21e] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-md">
                  1
                </div>
                <Phone className="w-8 h-8 text-[#e7d21e] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#04348c] mb-3">Nos llamás</h3>
                <p className="text-gray-600 mb-6 text-sm flex-1">
                  Este servicio se coordina únicamente por teléfono
                </p>
                <button
                  id="cta-domicilio-phone-minimal"
                  onClick={handlePhoneClick}
                  className="w-full flex items-center justify-center px-4 py-2.5 bg-[#04348c] text-white font-bold rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md text-sm mt-auto"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  LLAMAR AHORA
                </button>
              </div>
            </div>
          </motion.div>

          {/* Paso 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group h-full"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#e7d21e] hover:border-[#04348c] transform hover:-translate-y-1 h-full flex flex-col">
              <div className="text-center flex-1 flex flex-col">
                <div className="bg-[#e7d21e] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-md">
                  2
                </div>
                <Wrench className="w-8 h-8 text-[#e7d21e] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#04348c] mb-3">
                  Vamos hasta vos
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  Cambiamos la batería ahí mismo
                </p>
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-center text-gray-700 text-xs">
                    <CheckCircle className="w-4 h-4 mr-2 text-[#e7d21e]" />
                    <span>Servicio rápido, seguro y con garantía</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-700 text-xs">
                    <CheckCircle className="w-4 h-4 mr-2 text-[#e7d21e]" />
                    <span><span className="font-semibold">Sin Cargo</span> entregando tu vieja batería</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Paso 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group h-full"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#e7d21e] hover:border-[#04348c] transform hover:-translate-y-1 h-full flex flex-col">
              <div className="text-center flex-1 flex flex-col">
                <div className="bg-[#e7d21e] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-md">
                  3
                </div>
                <Clock className="w-8 h-8 text-[#e7d21e] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#04348c] mb-3">
                  Control gratuito al año
                </h3>
                <p className="text-gray-600 text-sm flex-1">
                  Revisamos si tu vehículo sigue cargando bien, sin costo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Final compacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#04348c] to-blue-600 rounded-2xl p-6 shadow-xl">
            <button
              id="cta-domicilio-phone-final-minimal"
              onClick={handlePhoneClick}
              className="inline-flex items-center px-8 py-3 bg-[#e7d21e] text-[#04348c] font-bold rounded-xl hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-md text-base"
            >
              <Phone className="mr-3 w-5 h-5" />
              COORDINAR CAMBIO A DOMICILIO
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // OPCIÓN 2: Diseño con números grandes compactos
  const Option2 = () => (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background pattern más sutil */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #e7d21e 1px, transparent 1px)`,
          backgroundSize: '25px 25px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header compacto */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cambios a <span className="text-[#04348c]">Domicilio</span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-800 mb-3 font-semibold">
              ¿Tu batería falló o no te arranca el auto en Rosario?
            </p>
            <p className="text-base text-gray-600 mb-4">
              Lo resolvemos en 3 pasos simples.
            </p>
            <div className="inline-flex items-center bg-[#e7d21e] text-[#04348c] px-6 py-2.5 rounded-full font-bold text-sm shadow-md">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Vamos a donde estás
            </div>
          </div>
        </motion.div>

        {/* Flow de pasos con números más grandes y flechas centradas */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Paso 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col h-full"
            >
              <div className="text-center flex-1 flex flex-col">
                <div className="text-[120px] md:text-[150px] font-black text-[#e7d21e]/30 leading-none mb-4 select-none">
                  01
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] -mt-16 relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                  <Phone className="w-10 h-10 text-[#04348c] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[#04348c] mb-3">
                    Nos llamás
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm flex-1">
                    Este servicio se coordina únicamente por teléfono
                  </p>
                  <button
                    id="cta-domicilio-phone-flow"
                    onClick={handlePhoneClick}
                    className="w-full flex items-center justify-center px-4 py-2.5 bg-[#04348c] text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md text-sm mt-auto"
                  >
                    <Phone className="mr-2 w-4 h-4" />
                    LLAMAR
                  </button>
                </div>
              </div>
              {/* Flecha conectora centrada */}
              <div className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-12 h-12 text-[#04348c] drop-shadow-lg" />
              </div>
            </motion.div>

            {/* Paso 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex flex-col h-full"
            >
              <div className="text-center flex-1 flex flex-col">
                <div className="text-[120px] md:text-[150px] font-black text-[#e7d21e]/30 leading-none mb-4 select-none">
                  02
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] -mt-16 relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                  <Car className="w-10 h-10 text-[#04348c] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[#04348c] mb-3">
                    Vamos hasta vos
                  </h3>
                  <div className="space-y-2 text-gray-600 text-xs flex-1 flex flex-col justify-center">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      <span>Servicio rápido, seguro y con garantía</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      <span><strong>Sin Cargo</strong> entregando tu vieja batería</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Flecha conectora centrada */}
              <div className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-12 h-12 text-[#04348c] drop-shadow-lg" />
              </div>
            </motion.div>

            {/* Paso 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative flex flex-col h-full"
            >
              <div className="text-center flex-1 flex flex-col">
                <div className="text-[120px] md:text-[150px] font-black text-[#e7d21e]/30 leading-none mb-4 select-none">
                  03
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] -mt-16 relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                  <Clock className="w-10 h-10 text-[#04348c] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[#04348c] mb-3">
                    Control gratuito
                  </h3>
                  <p className="text-gray-600 text-sm flex-1">
                    Revisamos si tu vehículo sigue cargando bien, sin costo al año.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Final compacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            id="cta-domicilio-phone-final-flow"
            onClick={handlePhoneClick}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#04348c] to-blue-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-xl text-base"
          >
            <Phone className="mr-3 w-5 h-5" />
            COORDINAR CAMBIO A DOMICILIO
          </button>
        </motion.div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Selector de opciones compacto */}
      <div className="bg-white py-4 px-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-gray-900 text-xl font-bold mb-4 text-center">
            2 Opciones Compactas - Fondo Blanco
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedOption(1)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all shadow-sm text-sm ${
                selectedOption === 1
                  ? 'bg-[#e7d21e] text-[#04348c] shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Opción 1: Cards Flotantes
            </button>
            <button
              onClick={() => setSelectedOption(2)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all shadow-sm text-sm ${
                selectedOption === 2
                  ? 'bg-[#e7d21e] text-[#04348c] shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Opción 2: Números Gigantes
            </button>
          </div>
        </div>
      </div>

      {/* Mostrar la opción seleccionada */}
      {selectedOption === 1 && <Option1 />}
      {selectedOption === 2 && <Option2 />}
    </div>
    
  );
};

export default DomicilioSections;