  // import { useState, useEffect, useRef } from "react";
  // import { Phone, Clock, CheckCircle, AlertTriangle, Car, ArrowRight } from "lucide-react";

  // interface VisibleElements {
  //   header?: boolean;
  //   step1?: boolean;
  //   step2?: boolean;
  //   step3?: boolean;
  //   cta?: boolean;
  // }

  // const DomicilioSection = () => {
  //   const [visibleElements, setVisibleElements] = useState<VisibleElements>({});
  //   const sectionRef = useRef<HTMLElement>(null);
  //   const elementsRef = useRef<Record<string, HTMLElement | null>>({});

  //   const handlePhoneClick = () => {
  //     window.location.href = 'tel:+5493416868049';
  //   };

  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //             const target = entry.target as HTMLElement;
  //             const animateKey = target.dataset.animate;
  //             if (animateKey) {
  //               setVisibleElements(prev => ({
  //                 ...prev,
  //                 [animateKey]: true
  //               }));
  //             }
  //           }
  //         });
  //       },
  //       {
  //         threshold: 0.1,
  //         rootMargin: '-50px'
  //       }
  //     );

  //     // Observar todos los elementos con data-animate
  //     Object.values(elementsRef.current).forEach(element => {
  //       if (element) observer.observe(element);
  //     });

  //     return () => observer.disconnect();
  //   }, []);

  //   const setElementRef = (key: string) => (el: HTMLElement | null) => {
  //     elementsRef.current[key] = el;
  //   };

  //   return (
  //     <div className="min-h-screen relative overflow-hidden">
  //       {/* Fondo animado con patrón de puntos flotantes */}
  //       <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
  //         <div 
  //           className="absolute inset-0 opacity-20"
  //           style={{
  //             backgroundImage: `radial-gradient(circle at 25% 25%, #e7d21e 2px, transparent 2px)`,
  //             backgroundSize: '50px 50px',
  //             animation: 'float 20s ease-in-out infinite'
  //           }}
  //         ></div>
  //         <div 
  //           className="absolute inset-0 opacity-10"
  //           style={{
  //             backgroundImage: `radial-gradient(circle at 75% 75%, #04348c 1px, transparent 1px)`,
  //             backgroundSize: '30px 30px',
  //             animation: 'float 15s ease-in-out infinite reverse'
  //           }}
  //         ></div>
  //       </div>

  //       {/* Efecto de elevación flotante */}
  //       <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none"></div>
        
  //       <section ref={sectionRef} className="py-12 relative z-10">
  //         <div className="container mx-auto px-4 max-w-6xl">
  //           {/* Header */}
  //           <div 
  //             ref={setElementRef('header')}
  //             data-animate="header"
  //             className={`text-center mb-10 transition-all duration-1000 ${
  //               visibleElements.header 
  //                 ? 'opacity-100 transform translate-y-0' 
  //                 : 'opacity-0 transform translate-y-10'
  //             }`}
  //           >
  //             <h2 className="text-3xl uppercase md:text-4xl font-bold text-[#04348c] mb-4">
  //               Cambios a Domicilio
  //               <div className="h-1 w-45 md:w-87 rounded-xl bg-[#e7d21e] mx-auto mt-4"></div>
  //             </h2>
              
  //             <div className="max-w-2xl mx-auto">
  //               <p className="text-lg md:text-xl text-[#04348c]/80 mb-3 font-semibold">
  //                 ¿Tu batería falló o no te arranca el auto en Rosario?
  //               </p>
  //               <p className="text-lg text-gray-600 mb-4">
  //                 Lo resolvemos en 3 pasos simples.
  //               </p>
  //               <div className="inline-flex items-center bg-[#e7d21e] text-[#04348c] px-6 py-2.5 rounded-full font-bold text-sm shadow-md">
  //                 <AlertTriangle className="w-4 h-4 mr-2" />
  //                 Vamos a donde estás
  //               </div>
  //             </div>
  //           </div>

  //           {/* Flow de pasos */}
  //           <div className="relative">
  //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
  //               {/* Paso 1 */}
  //               <div 
  //                 ref={setElementRef('step1')}
  //                 data-animate="step1"
  //                 className={`relative flex flex-col h-full transition-all duration-1000 delay-200 ${
  //                   visibleElements.step1 
  //                     ? 'opacity-100 transform translate-y-0' 
  //                     : 'opacity-0 transform translate-y-16'
  //                 }`}
  //               >
  //                 <div className="text-center flex-1 flex flex-col">
  //                   <div className="text-[120px] md:text-[150px] font-black text-[#e7d21e]/30 leading-none mb-4 select-none">
  //                     1
  //                   </div>
  //                   <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] -mt-16 relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
  //                     <Phone className="w-10 h-10 text-[#e7d21e] mx-auto mb-4" />
  //                     <h3 className="text-xl font-bold text-[#04348c] mb-3">
  //                       Nos llamás
  //                     </h3>
  //                     <p className="text-gray-600 mb-6 text-md flex-1">
  //                       Este servicio se coordina por teléfono
  //                     </p>
  //                     <button
  //                       id="cta-domicilio-phone-flow"
  //                       onClick={handlePhoneClick}
  //                       className="cursor-pointer w-full flex items-center justify-center px-4 py-2.5 bg-[#04348c] text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md text-sm mt-auto"
  //                     >
  //                       <Phone className="mr-2 w-4 h-4" />
  //                       LLAMAR
  //                     </button>
  //                   </div>
  //                 </div>
  //                 {/* Flecha conectora */}
  //                 <div className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
  //                   <ArrowRight className="w-12 h-12 text-[#04348c] drop-shadow-lg" />
  //                 </div>
  //               </div>

  //               {/* Paso 2 */}
  //               <div 
  //                 ref={setElementRef('step2')}
  //                 data-animate="step2"
  //                 className={`relative flex flex-col h-full transition-all duration-1000 delay-400 ${
  //                   visibleElements.step2 
  //                     ? 'opacity-100 transform translate-y-0' 
  //                     : 'opacity-0 transform translate-y-16'
  //                 }`}
  //               >
  //                 <div className="text-center flex-1 flex flex-col">
  //                   <div className="text-[120px] md:text-[150px] font-black text-[#e7d21e]/30 leading-none mb-4 select-none">
  //                     2
  //                   </div>
  //                   <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] -mt-16 relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
  //                     <Car className="w-10 h-10 text-[#e7d21e] mx-auto mb-4" />
  //                     <h3 className="text-xl font-bold text-[#04348c] mb-3">
  //                       Vamos hasta vos
  //                     </h3>
  //                     <div className="space-y-2 text-gray-600 text-md flex-1 flex flex-col justify-center">
  //                       <div className="flex items-center justify-center">
  //                         <CheckCircle className="w-4 h-4 mr-2 text-[#e7d21e]" />
  //                         <span>Servicio rápido, seguro y con garantía</span>
  //                       </div>
  //                       <div className="flex items-center justify-center">
  //                         <CheckCircle className="w-4 h-4 mr-2 text-[#e7d21e]" />
  //                         <span><strong>Sin Cargo</strong> entregando tu vieja batería</span>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* Flecha conectora */}
  //                 <div className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
  //                   <ArrowRight className="w-12 h-12 text-[#04348c] drop-shadow-lg" />
  //                 </div>
  //               </div>

  //               {/* Paso 3 */}
  //               <div 
  //                 ref={setElementRef('step3')}
  //                 data-animate="step3"
  //                 className={`relative flex flex-col h-full transition-all duration-1000 delay-600 ${
  //                   visibleElements.step3 
  //                     ? 'opacity-100 transform translate-y-0' 
  //                     : 'opacity-0 transform translate-y-16'
  //                 }`}
  //               >
  //                 <div className="text-center flex-1 flex flex-col">
  //                   <div className="text-[120px] md:text-[150px] font-black text-[#e7d21e]/30 leading-none mb-4 select-none">
  //                     3
  //                   </div>
  //                   <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] -mt-16 relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
  //                     <Clock className="w-10 h-10 text-[#e7d21e] mx-auto mb-4" />
  //                     <h3 className="text-xl font-bold text-[#04348c] mb-3">
  //                       Control gratuito
  //                     </h3>
  //                     <p className="text-gray-600 text-md flex-1">
  //                       Revisamos si tu vehículo sigue cargando bien, <span className="font-bold">sin costo al año</span> 
  //                     </p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           {/* CTA Final */}
  //           <div 
  //             ref={setElementRef('cta')}
  //             data-animate="cta"
  //             className={`text-center mt-12 transition-all duration-1000 delay-800 ${
  //               visibleElements.cta 
  //                 ? 'opacity-100 transform translate-y-0' 
  //                 : 'opacity-0 transform translate-y-10'
  //             }`}
  //           >
  //             <button
  //               id="cta-domicilio-phone-final-flow"
  //               onClick={handlePhoneClick}
  //               className="cursor-pointer inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#04348c] to-blue-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-xl text-base"
  //             >
  //               <Phone className="mr-3 w-5 h-5" />
  //               COORDINAR CAMBIO A DOMICILIO
  //             </button>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   );
  // };

  // export default DomicilioSection;
  
// import { useState, useEffect, useRef } from "react";
// import { Phone, Clock, CheckCircle, AlertTriangle, Car, ArrowRight } from "lucide-react";

// interface VisibleElements {
//   header?: boolean;
//   step1?: boolean;
//   step2?: boolean;
//   step3?: boolean;
//   cta?: boolean;
// }

// const DomicilioSection = () => {
//   const [visibleElements, setVisibleElements] = useState<VisibleElements>({});
//   const sectionRef = useRef<HTMLElement>(null);
//   const elementsRef = useRef<Record<string, HTMLElement | null>>({});

//   const handlePhoneClick = () => {
//     window.location.href = 'tel:+5493416868049';
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const target = entry.target as HTMLElement;
//             const animateKey = target.dataset.animate;
//             if (animateKey) {
//               setVisibleElements(prev => ({
//                 ...prev,
//                 [animateKey]: true
//               }));
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//         rootMargin: '-50px'
//       }
//     );

//     // Observar todos los elementos con data-animate
//     Object.values(elementsRef.current).forEach(element => {
//       if (element) observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const setElementRef = (key: string) => (el: HTMLElement | null) => {
//     elementsRef.current[key] = el;
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Fondo animado con patrón de puntos flotantes */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
//         <div 
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage: `radial-gradient(circle at 25% 25%, #e7d21e 2px, transparent 2px)`,
//             backgroundSize: '50px 50px',
//             animation: 'float 20s ease-in-out infinite'
//           }}
//         ></div>
//         <div 
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `radial-gradient(circle at 75% 75%, #04348c 1px, transparent 1px)`,
//             backgroundSize: '30px 30px',
//             animation: 'float 15s ease-in-out infinite reverse'
//           }}
//         ></div>
//       </div>

//       {/* Efecto de elevación flotante */}
//       <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none"></div>
      
//       <section ref={sectionRef} className="py-12 relative z-10">
//         <div className="container mx-auto px-4 max-w-6xl">
//           {/* Header */}
//           <div 
//             ref={setElementRef('header')}
//             data-animate="header"
//             className={`text-center mb-10 transition-all duration-1000 ${
//               visibleElements.header 
//                 ? 'opacity-100 transform translate-y-0' 
//                 : 'opacity-0 transform translate-y-10'
//             }`}
//           >
//             <h2 className="text-3xl uppercase md:text-4xl font-bold text-[#04348c] mb-4">
//               Cambios a Domicilio
//               <div className="h-1 w-45 md:w-87 rounded-xl bg-[#e7d21e] mx-auto mt-4"></div>
//             </h2>
            
//             <div className="max-w-2xl mx-auto">
//               <p className="text-lg md:text-xl text-[#04348c]/80 mb-3 font-semibold">
//                 ¿Tu batería falló o no te arranca el auto en Rosario?
//               </p>
//               <p className="text-lg text-gray-600 mb-4">
//                 Lo resolvemos en 3 pasos simples.
//               </p>
//               <div className="inline-flex items-center bg-[#e7d21e] text-[#04348c] px-6 py-2.5 rounded-full font-bold text-sm shadow-md">
//                 <AlertTriangle className="w-4 h-4 mr-2" />
//                 Vamos a donde estás
//               </div>
//             </div>
//           </div>

//           {/* Flow de pasos */}
//           <div className="relative">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
//               {/* Paso 1 */}
//               <div 
//                 ref={setElementRef('step1')}
//                 data-animate="step1"
//                 className={`relative flex flex-col h-full transition-all duration-1000 delay-200 ${
//                   visibleElements.step1 
//                     ? 'opacity-100 transform translate-y-0' 
//                     : 'opacity-0 transform translate-y-16'
//                 }`}
//               >
//                 <div className="text-center flex-1 flex flex-col">
//                   <div className="text-[120px] md:text-[120px] font-black text-[#e7d21e] leading-none mb-8 select-none relative z-20">
//                     1
//                   </div>
//                   <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] -mt-16 relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
//                     <Phone className="w-10 h-10 text-[#e7d21e] mx-auto mb-4" />
//                     <h3 className="text-xl font-bold text-[#04348c] mb-3">
//                       Nos llamás
//                     </h3>
//                     <p className="text-gray-600 mb-6 text-md flex-1">
//                       Este servicio se coordina por teléfono
//                     </p>
//                     <button
//                       id="cta-domicilio-phone-flow"
//                       onClick={handlePhoneClick}
//                       className="cursor-pointer w-full flex items-center justify-center px-4 py-2.5 bg-[#04348c] text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md text-sm mt-auto"
//                     >
//                       <Phone className="mr-2 w-4 h-4" />
//                       LLAMAR
//                     </button>
//                   </div>
//                 </div>
//                 {/* Flecha conectora */}
//                 <div className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2 z-30">
//                   <ArrowRight className="w-12 h-12 text-[#04348c] drop-shadow-lg" />
//                 </div>
//               </div>

//               {/* Paso 2 */}
//               <div 
//                 ref={setElementRef('step2')}
//                 data-animate="step2"
//                 className={`relative flex flex-col h-full transition-all duration-1000 delay-400 ${
//                   visibleElements.step2 
//                     ? 'opacity-100 transform translate-y-0' 
//                     : 'opacity-0 transform translate-y-16'
//                 }`}
//               >
//                 <div className="text-center flex-1 flex flex-col">
//                   <div className="text-[120px] md:text-[120px] font-black text-[#e7d21e] leading-none mb-8 select-none relative z-20">
//                     2
//                   </div>
//                   <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] -mt-16 relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
//                     <Car className="w-10 h-10 text-[#e7d21e] mx-auto mb-4" />
//                     <h3 className="text-xl font-bold text-[#04348c] mb-3">
//                       Vamos hasta vos
//                     </h3>
//                     <div className="space-y-2 text-gray-600 text-md flex-1 flex flex-col justify-center">
//                       <div className="flex items-center justify-center">
//                         <CheckCircle className="w-4 h-4 mr-2 text-[#e7d21e]" />
//                         <span>Servicio rápido, seguro y con garantía</span>
//                       </div>
//                       <div className="flex items-center justify-center">
//                         <CheckCircle className="w-4 h-4 mr-2 text-[#e7d21e]" />
//                         <span><strong>Sin Cargo</strong> entregando tu vieja batería</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Flecha conectora */}
//                 <div className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2 z-30">
//                   <ArrowRight className="w-12 h-12 text-[#04348c] drop-shadow-lg" />
//                 </div>
//               </div>

//               {/* Paso 3 */}
//               <div 
//                 ref={setElementRef('step3')}
//                 data-animate="step3"
//                 className={`relative flex flex-col h-full transition-all duration-1000 delay-600 ${
//                   visibleElements.step3 
//                     ? 'opacity-100 transform translate-y-0' 
//                     : 'opacity-0 transform translate-y-16'
//                 }`}
//               >
//                 <div className="text-center flex-1 flex flex-col">
//                   <div className="text-[120px] md:text-[120px] font-black text-[#e7d21e] leading-none mb-8 select-none relative z-20">
//                     3
//                   </div>
//                   <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] -mt-16 relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
//                     <Clock className="w-10 h-10 text-[#e7d21e] mx-auto mb-4" />
//                     <h3 className="text-xl font-bold text-[#04348c] mb-3">
//                       Control gratuito
//                     </h3>
//                     <p className="text-gray-600 text-md flex-1">
//                       Revisamos si tu vehículo sigue cargando bien, <span className="font-bold">sin costo al año</span> 
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* CTA Final */}
//           <div 
//             ref={setElementRef('cta')}
//             data-animate="cta"
//             className={`text-center mt-12 transition-all duration-1000 delay-800 ${
//               visibleElements.cta 
//                 ? 'opacity-100 transform translate-y-0' 
//                 : 'opacity-0 transform translate-y-10'
//             }`}
//           >
//             <button
//               id="cta-domicilio-phone-final-flow"
//               onClick={handlePhoneClick}
//               className="cursor-pointer inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#04348c] to-blue-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-xl text-base"
//             >
//               <Phone className="mr-3 w-5 h-5" />
//               COORDINAR CAMBIO A DOMICILIO
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
//       `}</style> */}
//     </div>
//   );
// };

// export default DomicilioSection;

import { useState, useEffect, useRef } from "react";
import { Phone, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

interface VisibleElements {
  header?: boolean;
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  cta?: boolean;
}

const DomicilioSection = () => {
  const [visibleElements, setVisibleElements] = useState<VisibleElements>({});
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<Record<string, HTMLElement | null>>({});

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5493416868049';
  };
    const handleWhatsAppClick = () => {
    window.open('https://wa.me/5493416868049', '_blank');
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const animateKey = target.dataset.animate;
            if (animateKey) {
              setVisibleElements(prev => ({
                ...prev,
                [animateKey]: true
              }));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    // Observar todos los elementos con data-animate
    Object.values(elementsRef.current).forEach(element => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const setElementRef = (key: string) => (el: HTMLElement | null) => {
    elementsRef.current[key] = el;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo animado con patrón de puntos flotantes */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #e7d21e 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 75%, #04348c 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            animation: 'float 15s ease-in-out infinite reverse'
          }}
        ></div>
      </div>

      {/* Efecto de elevación flotante */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none"></div>
      
      <section ref={sectionRef} className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div 
            ref={setElementRef('header')}
            data-animate="header"
            className={`text-center mb-10 transition-all duration-1000 ${
              visibleElements.header 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h2 className="text-3xl uppercase md:text-4xl font-bold text-[#04348c] mb-4">
              Cambios a domicilio <br />a autos o camionetas
              <div className="h-1 w-45 md:w-87 rounded-xl bg-[#e7d21e] mx-auto mt-4"></div>
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-md md:text-xl text-[#04348c]/80 mb-3 font-semibold">
                ¿Tu batería falló o no te arranca tu vehículo?
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Lo resolvemos en 3 pasos simples.
              </p>
              <div className="inline-flex items-center bg-[#e7d21e] text-[#04348c] px-6 py-2.5 rounded-full text-md shadow-md uppercase font-extrabold">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Vamos a donde estás
              </div>
            </div>
          </div>

          {/* Flow de pasos */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Paso 1 */}
              <div 
                ref={setElementRef('step1')}
                data-animate="step1"
                className={`relative flex flex-col h-full transition-all duration-1000 delay-200 ${
                  visibleElements.step1 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-16'
                }`}
              >
                <div className="text-center flex-1 flex flex-col">
                  <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                    {/* Número en círculo dorado */}
                    <div className="w-12 h-12 bg-[#e7d21e] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-black text-xl">1</span>
                    </div>
                    {/* <Phone className="w-10 h-10 text-[#e7d21e] mx-auto mb-4" /> */}
                    <h3 className="text-xl font-bold text-[#04348c] mb-3">
                      LLamanos o escribinos
                    </h3>
                    <p className="text-gray-600 mb-6 text-md flex-1">
                      Este servicio se coordina únicamente por teléfono
                    </p>
                  <div className="flex space-x-2 mt-auto">
                      <button
                        id="cta-volquetes-phone-step1"
                        onClick={handlePhoneClick}
                        className="cursor-pointer flex-1 flex items-center justify-center px-2 md:px-3 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-md text-xs md:text-sm"
                      >
                        <Phone className="mr-1 w-3 h-3 md:w-4 md:h-4 text-[#e7d21e]" />
                        LLAMAR
                      </button>
                      <button
                        id="cta-volquetes-whatsapp-step1"
                        onClick={handleWhatsAppClick}
                        className="cursor-pointer flex-1 flex items-center justify-center px-2 md:px-3 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-md text-xs md:text-sm"
                      >
                        <svg
                        className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4 text-[#e7d21e] group-hover:text-[#04348c] transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                      </svg>
                        ESCRIBIR
                      </button>
                    </div>
                  </div>
                </div>
                {/* Flecha conectora */}
                <div className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2 z-30">
                  <ArrowRight className="w-12 h-12 text-[#04348c] drop-shadow-lg" />
                </div>
              </div>

              {/* Paso 2 */}
              <div 
                ref={setElementRef('step2')}
                data-animate="step2"
                className={`relative flex flex-col h-full transition-all duration-1000 delay-400 ${
                  visibleElements.step2 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-16'
                }`}
              >
                <div className="text-center flex-1 flex flex-col">
                  <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                    {/* Número en círculo dorado */}
                    <div className="w-12 h-12 bg-[#e7d21e] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-black text-xl">2</span>
                    </div>
                    {/* <Car className="w-10 h-10 text-[#e7d21e] mx-auto mb-4" /> */}
                    <h3 className="text-xl font-bold text-[#04348c] mb-3">
                      Vamos a donde estas
                    </h3>
                    <p className="text-gray-600 mb-4 text-md">
                      Cambiamos la batería ahí mismo
                    </p>
                    <div className="space-y-2 text-gray-600 text-sm flex-1 flex flex-col justify-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-[#e7d21e]" />
                        <span>Servicio rápido, seguro y con garantía</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-[#e7d21e]" />
                        <span><strong>Sin Cargo</strong> entregando tu batería vieja</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Flecha conectora */}
                <div className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2 z-30">
                  <ArrowRight className="w-12 h-12 text-[#04348c] drop-shadow-lg" />
                </div>
              </div>

              {/* Paso 3 */}
              <div 
                ref={setElementRef('step3')}
                data-animate="step3"
                className={`relative flex flex-col h-full transition-all duration-1000 delay-600 ${
                  visibleElements.step3 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-16'
                }`}
              >
                <div className="text-center flex-1 flex flex-col">
                  <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#e7d21e] relative z-10 transform hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                    {/* Número en círculo dorado */}
                    <div className="w-12 h-12 bg-[#e7d21e] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-black text-xl">3</span>
                    </div>
                    {/* <Clock className="w-10 h-10 text-[#e7d21e] mx-auto mb-4" /> */}
                    <h3 className="text-xl font-bold text-[#04348c] mb-3">
                      Control gratuito al año
                    </h3>
                    <p className="text-gray-600 text-md flex-1">
                      Revisamos la parte electrica de tu vehículo, <span className="font-bold">sin cargo</span> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div 
            ref={setElementRef('cta')}
            data-animate="cta"
            className={`text-center mt-12 transition-all duration-1000 delay-800 ${
              visibleElements.cta 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <button
              id="cta-domicilio-phone-final-flow"
              onClick={handlePhoneClick}
              className="cursor-pointer inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#04348c] to-blue-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-xl text-base"
            >
              <Phone className="mr-3 w-5 h-5" />
              COORDINAR CAMBIO A DOMICILIO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DomicilioSection;