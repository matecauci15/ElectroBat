
// import Navbar from '../assets/Navbar';
import { Footer } from '../assets/Footer';
// Podés importar componentes existentes o nuevos personalizados
// import { ContactSection } from '../assets/Contactsection';
// import CTAInmediataSection from '../assets/volquetesctainmediato';
import { TestimonialsSection } from '../assets/TestimonialsSection';
import Whatsappbutton from '../Components/whappbutton';
import { Navbarvolquetes } from '../Volquetes/Navbarvolquetes';
import { Comofunciona } from '../Volquetes/comofunciona';
import CTAInmediataSectionvolquetes from '../Volquetes/ctainmediatovolquetes';
// import VolquetesCTASection from '../Volquetes/volquetesctainmediato';
import { AboutSectionvolquetes } from '../Volquetes/Aboutsectionvolquetes';
import { Cuandonecesitas } from '../Volquetes/cuandonecesitas';
// import { CTAFinalSimplevolquetes } from '../Volquetes/CTAfinalvolquetes';
import { VolquetesSection } from '../Volquetes/Volquetes';
import { BannerVolquetes } from '../Volquetes/bannervolquetes';

export default function VolquetesLanding() {
  return (
    <>
      <Navbarvolquetes />
      <main>
        {/* <section>
          <VolquetesCTASection/>
        </section> */}
        <section id="features">
          <BannerVolquetes />
        </section>
        <section id="comofunciona">
        <Comofunciona />
        </section>
        <section id='reservar'>
        <CTAInmediataSectionvolquetes />
        </section>
        <section id="cuandonecesitas">
        <Cuandonecesitas />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="about">
          <AboutSectionvolquetes />
        </section>
        <section id="volquetes">
        <VolquetesSection />
        </section>
        {/* <section id="contacto">
          <ContactSection />
        </section> */}
        {/* <section>
          <CTAFinalSimplevolquetes />
        </section> */}
      </main>
      <Whatsappbutton />
      <Footer />
    </>
  );
}
