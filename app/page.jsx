import 'boxicons/css/boxicons.min.css';
import Navbar from '@/app/(Sections)/Nav Bar/NavBar.jsx';
import HeroSection from './(Sections)/HeroSection/HeroSection.jsx'
import HowItWorks from './(Sections)/How it works/Howitworks.jsx';
import Benefits from './(Sections)/Benefits/Benefits.jsx';
import Features from './(Sections)/Features/Features.jsx';
import Pricing from './(Sections)/Pricing/Pricing.jsx';
import Faq from './(Sections)/FAQ/Faq.jsx';
import Cta from './(Sections)/CTA/Cta.jsx';
import Footer from '@/app/(Sections)/Footer/Footer.jsx';


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Features />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}