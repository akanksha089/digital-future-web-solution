import Header from "../Component/Header";
import Sidebar from '../Component/Sidebar';
import HeroSection from "../Component/HeroSection";
import ProcessSection from "../Component/ProcessSection";
import Service from "../Component/Service";
import AboutSection from "../Component/AboutSection";
import FAQSection from "../Component/Faq";
import TestimonialSection from "../Component/Testimonial";
import ProjectSection from "../Component/Project";
import BlogSection from "../Component/Blog";
import FooterSection from "../Component/Footer";
export default function Home() {
    return (
    <>

    <div className="body">
    <Header/>
    <Sidebar/>
    {/* <div id="preloader">
            <div className="loading" data-loading-text="Runok"></div>
        </div> */}
    <div id="smooth-wrapper">
    <div id="smooth-content">
    <HeroSection/>  
    <ProcessSection/>
    <AboutSection/>
    <Service/>
    <FAQSection/>
    <TestimonialSection/>
    <ProjectSection/>
    <BlogSection/>
    <FooterSection/>
</div>
    </div>
    <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>
    </div>

      
    </>
        
   
    );
  }
  
  