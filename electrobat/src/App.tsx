
// import './index.css'; 
// // import { VolquetesSection } from './assets/Volquetes'; 
// // import { FeaturesSection } from './assets/FeaturesSection'; 
// import { Whatsappbutton } from './Components/whappbutton';
// import DomicilioSections from './assets/cambioadomicilio';
// import CTAInmediataSection from './assets/ctainmediato';
// import { BatteryReplacementSection } from './Components/cambiobateria';
// import CTAFinalSimple from './Components/CTAfinal';
// import Navbar from './assets/Navbar';
// import { AboutSection } from './assets/Aboutsection';
// import { Banner } from './assets/banner';
// import { ContactSection } from './assets/Contactsection';
// import { BatteriesSection } from './assets/Batteriessection';
// import { TestimonialsSection } from './assets/TestimonialsSection';
// import { Footer } from './assets/Footer';
// import TagManager from 'react-gtm-module';

// const tagManagerArgs = {
//   gtmId: 'GTM-ND3HX2DW'
// };



// function App() {   
//   return (     
//     <div className="app overflow-hidden">
//       <Navbar />
      
//       <main>
//         <section id="features">
//           <Banner />
//           <DomicilioSections />
//           <CTAInmediataSection/>
//         </section>
        
//         <section id="about">
//           <AboutSection />
//         </section>
        
//         <section id='cambiobateria'>
//         <BatteryReplacementSection />
//         </section>
//         <section id="batteries">
//           <BatteriesSection />
//         </section>
        
//         <section id="testimonials">
//           <TestimonialsSection />
//         </section>
        
//         <section id="contacto">
//           <ContactSection />
//         </section>
//         <section>
//         <CTAFinalSimple />
//         </section>
//       </main>
//       <Whatsappbutton />
//       <Footer />
//     </div>
//   ); 
// }

// export default App;
// TagManager.initialize(tagManagerArgs);

import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Whatsappbutton } from './Components/whappbutton';
import DomicilioSections from './assets/cambioadomicilio';
import CTAInmediataSection from './assets/ctainmediato';
import { BatteryReplacementSection } from './Components/cambiobateria';
// import CTAFinalSimple from './Components/CTAfinal';
import Navbar from './assets/Navbar';
import { AboutSection } from './assets/Aboutsection';
import { Banner } from './assets/banner';
// import { ContactSection } from './assets/Contactsection';
import { BatteriesSection } from './assets/Batteriessection';
import { TestimonialsSection } from './assets/TestimonialsSection';
import { Footer } from './assets/Footer';
import TagManager from 'react-gtm-module';
import VolquetesLanding from './pages/volqueteslanding'; 
// import { ServiceBanner } from './assets/serviceBanner';

const tagManagerArgs = {
  gtmId: 'GTM-ND3HX2DW'
};

TagManager.initialize(tagManagerArgs);

function LandingPrincipal() {
  return (
    <>
      <Navbar />
      <main>
        {/* <section>
          <ServiceBanner />
        </section> */}
        <section id="features">
          <Banner />
          <CTAInmediataSection />
          <DomicilioSections />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="cambiobateria">
          <BatteryReplacementSection />
        </section>
        <section id="batteries">
          <BatteriesSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        {/* <section id="contacto">
          <ContactSection />
        </section> */}
        {/* <section>
          <CTAFinalSimple />
        </section> */}
      </main>
      <Whatsappbutton />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes> 
      <Route path="/electrobat" element={<LandingPrincipal />} />
      <Route path="/electrobat/volquetes" element={<VolquetesLanding />} />
    </Routes>
  );
}

export default App;
