import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Steps from "@/components/Steps";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Brands from "@/components/Brands";
import Work from "@/components/Work";
import Stats from "@/components/Stats";
import News from "@/components/news";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";


export default function Home() {

  return (
    <main className="bg-gray-100">
      <Header />
      <HeroSection/>
      <Steps/>
      <About/>
      <Testimonial/>
      <Brands/>
      <Work/>
      <Stats/>
      <News/>
      <ContactUs/>
      <Footer/>      
    </main>
  );
}


