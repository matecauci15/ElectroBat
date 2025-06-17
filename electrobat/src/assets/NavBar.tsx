import React, { useState, useEffect } from "react";
import ElectroBat from "./imgs/electrobat.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const sections = React.useMemo(() => [
    { id: "features", label: "Inicio" },
    { id: "about", label: "Nosotros" },
    { id: "batteries", label: "Baterías" },
    { id: "contacto", label: "Contacto" },
    // { id: "trucks", label: "Volquetes" },
  ], []);

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Control del fondo transparente/sólido
      setScrolled(currentScrollY > 20);
      
      // Control de visibilidad del navbar - Más responsivo
      if (currentScrollY <= 10) {
        // Siempre visible en la parte superior
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scroll hacia arriba - mostrar navbar INMEDIATAMENTE
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo - ocultar navbar INMEDIATAMENTE
        setVisible(false);
        setIsOpen(false); // Cerrar menú mobile si está abierto
      }
      
      setLastScrollY(currentScrollY);
      
      // Detección de sección activa
      const scrollWithOffset = currentScrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollWithOffset >= offsetTop && scrollWithOffset < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            window.history.pushState(null, "", `#${section.id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, lastScrollY]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ 
        top: element.offsetTop - 70, 
        behavior: "smooth" 
      });
      setIsOpen(false);
      setActiveSection(id);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const scrollToBanner = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setActiveSection("features");
    window.history.pushState(null, "", "#features");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest('nav')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full text-white z-50 transition-transform duration-200 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-gradient-to-br from-blue-900/95 via-gray-900/98 to-black/95 backdrop-blur-md shadow-xl"
          : "bg-transparent backdrop-blur-none shadow-none border-b border-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo - Izquierda en desktop, centrado en mobile */}
          <div className="flex items-center z-10 absolute left-1/2 transform -translate-x-1/2 md:relative md:left-32 md:transform-none">
            <div
              className="flex items-center cursor-pointer group"
              onClick={scrollToBanner}
            >
              <img
                src={ElectroBat}
                alt="ElectroBat"
                  className="max-w-[90vw] h-14 w-auto sm:h-12 md:h-14 lg:h-16 object-contain"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="cursor-pointer hidden md:flex items-center space-x-2 lg:space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base font-medium ${
                  activeSection === section.id
                    ? "bg-[#e7d21e] text-gray-900 shadow-md"
                    : "hover:bg-white/10 hover:text-[#e7d21e] text-white/90 hover:scale-105"
                }`}
              >
                {section.label}
              </button>
            ))}
            <Link
              to="/ElectroBat/volquetes"
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm lg:text-base font-medium shadow-md hover:bg-yellow-300 transition-all duration-200"
            >
              Volquetes
            </Link>
          </div>

          {/* Mobile Menu Button - Solo visible cuando se scrollea hacia arriba */}
          <div
            className={`cursor-pointer md:hidden z-10 transition-all duration-300 ${
              lastScrollY <= 10 || (lastScrollY > 10 && visible)
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer p-2 rounded-lg transition-all duration-200 ${
                isOpen
                  ? "bg-[#e7d21e] text-gray-900"
                  : "text-white hover:text-[#e7d21e] hover:bg-white/10"
              }`}
              aria-label="Abrir menú"
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible transform translate-y-0"
            : "opacity-0 invisible transform -translate-y-4"
        }`}
      >
        <div className="bg-gray-900/98 backdrop-blur-md shadow-2xl border-t border-white/10">
          <div className="px-4 py-4 space-y-2 max-w-7xl mx-auto">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`pointer block w-full text-left px-4 py-4 rounded-lg transition-all duration-200 font-medium text-base ${
                  activeSection === section.id
                    ? "bg-[#e7d21e] text-gray-900 shadow-md"
                    : "hover:bg-white/10 hover:text-[#e7d21e] text-white/90 hover:translate-x-2"
                }`}
                style={{
                  animationDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {section.label}
              </button>
            ))}
            <Link
              to="/ElectroBat/volquetes"
              className="bg-[#e7d21e] text-gray-900 px-4 py-2 rounded-lg text-sm lg:text-base font-medium shadow-md hover:bg-yellow-300 transition-all duration-200"
              replace
              onClick={() => {
                setTimeout(() => window.scrollTo(0, 0), 0);
                setIsOpen(false);
              }}
            >
              Volquetes
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;