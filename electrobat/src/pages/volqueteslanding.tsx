
import { Footer } from '../assets/Footer';
import { TestimonialsSection } from '../assets/TestimonialsSection';
import Whatsappbutton from '../Components/Whatsappbutton';
import { Navbarvolquetes } from '../Volquetes/Navbarvolquetes';
import { Comofunciona } from '../Volquetes/comofunciona';
import CTAInmediataSectionvolquetes from '../Volquetes/ctainmediatovolquetes';
import { AboutSectionvolquetes } from '../Volquetes/Aboutsectionvolquetes';
import { Cuandonecesitas } from '../Volquetes/cuandonecesitas';
import { VolquetesSection } from '../Volquetes/Volquetes';
import TagManager from 'react-gtm-module';
import { BannerVolquetes } from '../Volquetes/bannervolquetes';

const tagManagerArgs = {
  gtmId: 'GTM-5B8CQNP'
};

TagManager.initialize(tagManagerArgs);

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
