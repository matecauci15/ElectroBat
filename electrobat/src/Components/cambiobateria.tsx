import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Battery, Clock } from "lucide-react";

export const BatteryReplacementSection = () => {
  const [batteryLevel, setBatteryLevel] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel((prev) => {
        if (prev <= 10) return 90;
        return prev - 0.5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const warningSignals = [
    {
      icon: Clock,
      title: "Arranque lento",
      description: "Motor tarda en encender",
    },
    {
      icon: Battery,
      title: "Luces débiles",
      description: "Iluminación deficiente",
    },
    // {
    //   icon: Wrench,
    //   title: "Sonidos extraños",
    //   description: "Ruidos al arrancar",
    // },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header con batería animada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <div className="flex justify-center items-center mb-4">
            <div className="relative">
              <div className="relative w-12 h-6 border-2 border-[#04348c] rounded-sm">
                {/* Terminal de la batería */}
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-3 bg-[#04348c] rounded-r"></div>

                {/* Nivel de batería */}
                <motion.div
                  className={`absolute inset-1 rounded-sm transition-colors duration-500 ${
                    batteryLevel > 30 ? "bg-green-500" : "bg-red-500"
                  }`}
                  animate={{ width: `${Math.max(batteryLevel, 8)}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#04348c] sm:text-3xl mb-3">
            ¿Cuándo cambiar tu batería?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Detecta a tiempo las señales de una batería que necesita reemplazo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 ">
          {/* Señales de Alerta */}
          {warningSignals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="bg-[#e7d21e]/30 border-2 border-[#e7d21e]/50 rounded-lg p-6 text-center hover:border-[#e7d21e] transition-all duration-300 hover:shadow-md"
            >
              <div className=" rounded-full  flex items-center justify-center mx-auto mb-2">
                <signal.icon className="h-8 w-8 text-[#04348c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#04348c]/80 mb-2">
                {signal.title}
              </h3>
              <p className="text-gray-600 text-md">{signal.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mensaje Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-lg mb-4 flex flex-col items-center text-center  mx-auto"
        >
          <div className=" rounded-full mb-2">
            <AlertTriangle size={40} className=" text-[#e7d21e]" />
          </div>
          <p className="text-gray-700 text-lg sm:text-lg">
            Si tu batería tiene{" "}
            <span className="font-semibold text-[#04348c]">más de 1 año</span>,
            es momento de hacer una revisión preventiva.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
