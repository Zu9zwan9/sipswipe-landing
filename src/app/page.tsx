import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Integrations from '../components/Integrations';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Animated background */}
      <div className="bg-animation" />
      {/* Navigation bar */}
      <Navbar />
      <main>
        {/* Hero section */}
        <Hero />
        {/* About section */}
        <About />
        {/* Features section */}
        <Features />
        {/* Integrations section */}
        <Integrations />
        {/* Testimonials section */}
        <Testimonials />
        {/* Contact section */}
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
