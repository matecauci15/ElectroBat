import { Phone, MessageCircle } from "lucide-react";

export const CTAFinalSimplevolquetes = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+5493416868049';
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5493416868049';
    const message = encodeURIComponent('Hola! Necesito cambiar mi batería de auto.');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
    }
  };

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4 max-w-xl text-center">
        {/* Título Principal */}
        <h2 className="text-xl md:text-xl font-bold text-[#04348c] mb-2">
          ¿Necesitás un volquete sin vueltas?
        </h2>

        {/* Subtítulo */}
        <p className="text-sm text-gray-700 mb-3">
          Llamanos o escribinos por WhatsApp y coordinamos todo. Servicio profesional
en Rosario
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
          <button
            id="cta-llamar-final"
            onClick={handlePhoneClick}
            className="bg-[#04348c] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 text-[#e7d21e]" />
            LLAMAR AHORA
          </button>

          <button
            id="cta-whatsapp-final"
            onClick={handleWhatsAppClick}
            className="flex-1 bg-white text-[#04348c] border-2 border-[#e7d21e] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#e7d21e]/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-[#e7d21e]" />
            WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
};
