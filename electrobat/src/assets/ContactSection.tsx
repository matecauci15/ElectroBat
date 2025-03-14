// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';


// export const ContactSection: React.FC = () => {
//     return (
//       <section id="contact" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Contáctanos
//             </h2>
//             <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
//             <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
//               Estamos listos para atender tus necesidades
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="bg-gray-50 rounded-lg shadow-md p-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
//                 <form>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                         Nombre
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                         Teléfono
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                         Asunto
//                       </label>
//                       <select
//                         id="subject"
//                         className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
//                       >
//                         <option>Seleccionar</option>
//                         <option>Consulta sobre baterías</option>
//                         <option>Consulta sobre volquetes</option>
//                         <option>Solicitud de cotización</option>
//                         <option>Servicio técnico</option>
//                         <option>Otro</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="mb-6">
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                       Mensaje
//                     </label>
//                     <textarea
//                       id="message"
//                       rows={4}
//                       className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
//                     ></textarea>
//                   </div>
//                   <div>
//                     <button
//                       type="submit"
//                       className="w-full bg-yellow-400 text-gray-900 font-medium py-3 px-4 rounded-md hover:bg-yellow-500 transition-colors"
//                     >
//                       Enviar Mensaje
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="bg-gray-900 rounded-lg shadow-md p-8 h-full flex flex-col">
//                 <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                
//                 <div className="flex items-start mb-6">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium text-white">Dirección</h4>
//                     <p className="mt-1 text-gray-300">Av. Córdoba 4031, Rosario, Santa Fe, Argentina</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start mb-6">
//                   <div className="flex-shrink-0">
//                     <FaPhoneAlt className="h-6 w-6 text-yellow-400" />
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium text-white">Teléfono</h4>
//                     <p className="mt-1 text-gray-300">(0341) 439 5703</p>
//                     <p className="mt-1 text-gray-300">(0341) 439 6347</p>
//                     <p className="mt-1 text-gray-300">(0341) 686 8049</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start mb-6">
//                   <div className="flex-shrink-0">
//                     <FaEnvelope className="h-6 w-6 text-yellow-400" />
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium text-white">Email</h4>
//                     <p className="mt-1 text-gray-300">electrobat.baterias@gmail.com</p>
//                     {/* <p className="mt-1 text-gray-300">soporte@powerdump.com</p> */}
//                   </div>
//                 </div>
                
//                 <div className="flex items-start mb-8">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium text-white">Horario de Atención</h4>
//                     <p className="mt-1 text-gray-300">Lunes a Viernes: 8:00 a 13:00 hs - y 14:30 a 18:30 hs</p>
//                     <p className="mt-1 text-gray-300">Sábados: 8:30 - 13:00</p>
//                   </div>
//                 </div>
                
//                 <div className="mt-auto">
//                   <div className="bg-gray-800 rounded-lg p-4">
//                     <h4 className="text-lg font-medium text-white mb-2">Síguenos en redes sociales</h4>
//                     <div className="flex space-x-4">
//                       {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
//                         <a
//                           key={social}
//                           href={`#${social}`}
//                           className="text-gray-400 hover:text-yellow-400 transition-colors"
//                         >
//                           <span className="sr-only">{social}</span>
//                           <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                             <path
//                               fillRule="evenodd"
//                               d={
//                                 social === 'facebook'
//                                   ? 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
//                                   : social === 'twitter'
//                                   ? 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
//                                   : social === 'instagram'
//                                   ? 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
//                                   : 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
//                               }
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//          </div>
//         </section>
//         );
//         }     
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';


export const ContactSection: React.FC = () => {
    // Create an object to store social media URLs
    const socialLinks = {
      facebook: 'https://www.facebook.com/electrobatrosarioo/',
      instagram: 'https://www.instagram.com/electrobatrosario'
    };
    
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contáctanos
            </h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Estamos listos para atender tus necesidades
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-10">Envíanos un mensaje</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border-gray-300 py-1 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border-gray-300 shadow-sm py-1 focus:border-yellow-500 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-md border-gray-300 py-1 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto
                      </label>
                      <select
                        id="subject"
                        className="w-full rounded-md border-gray-300 py-1 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                      >
                        <option>Seleccionar</option>
                        <option>Consulta sobre baterías</option>
                        <option>Consulta sobre volquetes</option>
                        <option>Solicitud de cotización</option>
                        <option>Servicio técnico</option>
                        <option>Otro</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-yellow-400 text-gray-900 font-medium py-3 px-4 mb-24 rounded-md hover:bg-yellow-500 transition-colors"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 rounded-lg shadow-md p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Dirección</h4>
                    <p className="mt-1 text-gray-300">Av. Córdoba 4031, Rosario, Santa Fe, Argentina</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <FaPhoneAlt className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Teléfono</h4>
                    <p className="mt-1 text-gray-300">(0341) 439 5703</p>
                    <p className="mt-1 text-gray-300">(0341) 439 6347</p>
                    <p className="mt-1 text-gray-300">(0341) 686 8049</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="mt-1 text-gray-300">electrobat.baterias@gmail.com</p>
                    {/* <p className="mt-1 text-gray-300">soporte@powerdump.com</p> */}
                  </div>
                </div>
                
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Horario de Atención</h4>
                    <p className="mt-1 text-gray-300">Lunes a Viernes: 8:00 a 13:00 hs - y 14:30 a 18:30 hs</p>
                    <p className="mt-1 text-gray-300">Sábados: 8:30 - 13:00</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">Síguenos en redes sociales</h4>
                    <div className="flex space-x-4">
                      {(['facebook', 'instagram'] as Array<keyof typeof socialLinks>).map((social) => (
                        <a
                          key={social}
                          href={socialLinks[social]}
                          className="text-gray-400 hover:text-yellow-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">{social}</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d={
                                social === 'facebook'
                                  ? 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                                  : social === 'instagram'
                                  ? 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                                  : 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                              }
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
         </div>
        </section>
        );
        }