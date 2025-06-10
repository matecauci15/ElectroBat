import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const CTAInmediataSection = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+5493416868049';
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5493416868049';
    const message = encodeURIComponent('Hola! Necesito ayuda con mi batería de auto.');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
    }
  };

  const handleMapsClick = () => {
    // Coordenadas de ejemplo de Rosario (Plaza 25 de Mayo)
    const lat = -32.9442;
    const lng = -60.6505;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = `geo:${lat},${lng}?q=${lat},${lng}(Baterías Rosario)`;
    } else {
      window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
    }
  };

  return (
    <section className="py-8 bg-white relative overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-4 left-4 w-16 h-16 bg-[#04348c]/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#04348c]/5 rounded-full blur-lg"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header compacto */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl uppercase font-bold text-[#04348c] mb-3">
            ¿Querés resolverlo ahora?
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Tocá uno de estos botones y te ayudamos al instante:
          </p>
        </motion.div>

        {/* Botones CTA compactos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          
          {/* LLAMAR AHORA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button
              id="cta-llamar-inmediato"
              onClick={handlePhoneClick}
              className="cursor-pointer w-full bg-[#04348c] text-white hover:bg-blue-700 transition-all duration-300 rounded-xl p-4 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5" />
                <span className="font-bold text-sm">LLAMAR AHORA</span>
              </div>
            </button>
          </motion.div>

          {/* WHATSAPP DIRECTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              id="cta-whatsapp-inmediato"
              onClick={handleWhatsAppClick}
              className="cursor-pointer w-full bg-white text-[#04348c] border-2 border-[#04348c] hover:bg-[#04348c] hover:text-white transition-all duration-300 rounded-xl p-4 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-3">
                <MessageCircle className="w-5 h-5" />
                <span className="font-bold text-sm">WHATSAPP</span>
              </div>
            </button>
          </motion.div>

          {/* CÓMO LLEGAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              id="cta-maps-inmediato"
              onClick={handleMapsClick}
              className="cursor-pointer w-full bg-white text-[#04348c] border-2 border-[#04348c] hover:bg-[#04348c] hover:text-white transition-all duration-300 rounded-xl p-4 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span className="font-bold text-sm">CÓMO LLEGAR</span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTAInmediataSection;