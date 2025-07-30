import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

const CTAInmediataSectionvolquetes = () => {
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
            ¿Querés reservar tu volquete ahora?
          </h2>
          
          <p className="text-xl md:text-lg text-gray-700 mb-4">
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
                <span className="font-bold text-md">LLAMAR AHORA</span>
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
                <svg
                        className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-[#e7d21e] group-hover:text-[#04348c] transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                      </svg>
                <span className="font-bold text-md">WHATSAPP</span>
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
                <MapPin className="w-5 h-5 text-[#e7d21e]" />
                <span className="font-bold text-md">CÓMO LLEGAR</span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTAInmediataSectionvolquetes;