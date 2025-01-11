import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import ContactForm from "../components/ContactForm";
import WeDo from "../components/WeDo";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WeDo/>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
