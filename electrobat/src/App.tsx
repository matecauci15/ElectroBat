import './index.css';
import { Routes, Route } from 'react-router-dom';
import Whatsappbutton  from './Components/Whatsappbutton';
import DomicilioSections from './assets/Cambioadomicilio';

import { TestimonialsSection } from './assets/TestimonialsSection';
import { Footer } from './assets/Footer';
import TagManager from 'react-gtm-module';
import VolquetesLanding from './pages/volqueteslanding'; 
import Navbar from './assets/Navbar';
// import { AboutSection } from './assets/Aboutsection';
import { Banner } from './assets/Banner';

import { BatteryReplacementSection } from './Components/Cambiobateria';
import CTAInmediataSection from './assets/CTAInmediato';
import { AboutSection } from './assets/AboutSection';
import { BatteriesSection } from './assets/BatteriesSection';



const tagManagerArgs = {
  gtmId: 'GTM-5B8CQNP'
};

TagManager.initialize(tagManagerArgs);

function LandingPrincipal() {
  return (
    <>
      <Navbar />
      <main>
        <section id="features">
          <Banner />
          <CTAInmediataSection />
          <DomicilioSections />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="about">
          <AboutSection/>
        </section>
        <section id="cambiobateria">
          <BatteryReplacementSection />
        </section>
        <section id="batteries">
          <BatteriesSection/>
        </section>
      </main>
      <Whatsappbutton />
      <Footer />
    </>
  );
}

function App() {
  return (
<Routes>
  <Route path="/" element={<LandingPrincipal />} />
  <Route path="/volquetes" element={<VolquetesLanding />} />
  <Route path="*" element={<LandingPrincipal />} /> 
</Routes>

  );
}

export default App;
