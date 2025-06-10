// import React from 'react';
import { Navbar } from './assets/NavBar'; 
import { AboutSection } from './assets/AboutSection'; 
import './index.css'; 
import { Banner } from './assets/Banner'; 
import { ContactSection } from './assets/ContactSection'; 
// import { VolquetesSection } from './assets/Volquetes'; 
import { BatteriesSection } from './assets/BatteriesSection'; 
import { TestimonialsSection } from './assets/TestimonialsSection'; 
// import { FeaturesSection } from './assets/FeaturesSection'; 
import { Footer } from './assets/Footer';  
import WhatsAppButton from './Components/whappbutton';
import DomicilioSections from './assets/cambio';
import CTAInmediataSection from './assets/ctainmediato';


function App() {   
  return (     
    <div className="app overflow-hidden">
      <Navbar />
      
      <main>
        <section id="features">
          <Banner />
          {/* <FeaturesSection /> */}
          <DomicilioSections />
          <CTAInmediataSection/>
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        {/* <section id="trucks">
          <VolquetesSection />
        </section> */}
        
        <section id="batteries">
          <BatteriesSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      <WhatsAppButton></WhatsAppButton>
      <Footer />
    </div>
  ); 
}

export default App;