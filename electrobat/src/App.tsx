import './index.css';
import { Routes, Route } from 'react-router-dom';
import Whatsappbutton  from './Components/Whatsappbutton';
import DomicilioSections from './assets/cambioadomicilio';
import CTAInmediataSection from './assets/ctainmediato';
import { BatteryReplacementSection } from './Components/cambiobateria';
import { TestimonialsSection } from './assets/TestimonialsSection';
import { Footer } from './assets/Footer';
import TagManager from 'react-gtm-module';
import VolquetesLanding from './pages/volqueteslanding'; 
import Navbar from './assets/Navbar';
import { AboutSection } from './assets/Aboutsection';
import { Banner } from './assets/banner';
import { BatteriesSection } from './assets/Batteriessection';

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
          <AboutSection />
        </section>
        <section id="cambiobateria">
          <BatteryReplacementSection />
        </section>
        <section id="batteries">
          <BatteriesSection />
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
  <Route path="*" element={<LandingPrincipal />} /> {/* Redirige todo lo demás a landing */}
</Routes>

  );
}

export default App;
