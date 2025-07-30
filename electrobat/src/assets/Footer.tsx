import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const handlePhoneCall = () => {
    window.location.href = 'tel:+5493414395703';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:electrobat.baterias@gmail.com';
  };

  const handleMapsRedirect = () => {
    const address = 'Av. Córdoba 4031, Rosario, Santa Fe, Argentina';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ElectroBat</h3>
            <p className="text-gray-400 mb-4">
              20 años brindando soluciones en baterías industriales y alquiler
              de volquetes con la mejor calidad y servicio del mercado.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/electrobatrosarioo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/electrobatrosario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-[#e7d21e] transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#e7d21e] transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/ElectroBat"
                  className="text-gray-400 hover:text-[#e7d21e] transition-colors"
                >
                  Baterías
                </a>
              </li>
              <li>
                <a
                  href="/ElectroBat/volquetes"
                  className="text-gray-400 hover:text-[#e7d21e] transition-colors"
                >
                  Volquetes
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-[#e7d21e] transition-colors"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="/ElectroBat#contacto"
                  className="text-gray-400 hover:text-[#e7d21e] transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Venta de Baterías Industriales</li>
              <li className="text-gray-400">Alquiler de Volquetes</li>
              <li className="text-gray-400">Mantenimiento Preventivo</li>
              <li className="text-gray-400">Reciclaje de Baterías</li>
              <li className="text-gray-400">Asesoría Técnica Especializada</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#e7d21e] mt-1 mr-3" />
                <button
                  onClick={handleMapsRedirect}
                  className="text-gray-400 hover:text-[#e7d21e] transition-colors text-left cursor-pointer "
                >
                  Av. Córdoba 4031, Rosario, Santa Fe, Argentina
                </button>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#e7d21e] mr-3" />
                <button
                  onClick={handlePhoneCall}
                  className="text-gray-400 hover:text-[#e7d21e] transition-colors cursor-pointer "
                >
                  +54 9 3414395703
                </button>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#e7d21e] mr-3" />
                <button
                  onClick={handlePhoneCall}
                  className="text-gray-400 hover:text-[#e7d21e] transition-colors cursor-pointer "
                >
                  4395703 / 4396747
                </button>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#e7d21e] mr-3" />
                <button
                  onClick={handleEmail}
                  className="text-gray-400 hover:text-[#e7d21e] transition-colors cursor-pointer "
                >
                  electrobat.baterias@gmail.com
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};