import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Industries from "./sections/Industries";
import WhyChooseUs from "./sections/WhyChooseUs";
import Testimonials from "./sections/Testimonials";
import Quote from "./sections/Quote";
import Tracking from "./sections/Tracking";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <Quote />
      <Tracking />
      <Contact />
      <Footer />
    </main>
  );
}