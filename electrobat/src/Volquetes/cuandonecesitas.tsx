import { motion } from "framer-motion";
import { Truck, Home, Trash2, Building } from "lucide-react";

export const Cuandonecesitas = () => {
  const escenarios = [
    {
      icon: Home,
      title: "Obras o reformas",
    },
    {
      icon: Trash2,
      title: "Limpieza profunda o mudanza",
    },
    {
      icon: Building,
      title: "Vaciado de locales o propiedades",
    },
    {
      icon: Truck,
      title: "Eventos grandes con residuos",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-[#04348c] sm:text-3xl mb-4">
            ¿CUÁNDO NECESITÁS UN VOLQUETE?
          </h2>
        </motion.div>

        {/* Escenarios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Escenarios comunes:
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {escenarios.map((escenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-200"
              >
                <escenario.icon className="h-5 w-5 text-[#04348c]" />
                <span className="text-gray-700"> {escenario.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Llamada a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-white border-2 border-[#e7d21e] rounded-lg p-6"
        >
          <p className="text-gray-700 text-lg mb-4">
            📞 <strong>Coordiná con nosotros y te lo llevamos.</strong>
          </p>
          
          <a
            href="https://wa.me/5493416868049?text=Hola!%20Necesito%20consultar%20por%20un%20volquete."
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="bg-[#e7d21e] text-[#04348c] font-semibold py-3 px-6 rounded-full hover:bg-[#e7d21e]/80 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Consultar por volquete
            </motion.button>
          </a>
        </motion.div>

      </div>
    </section>
  );
};