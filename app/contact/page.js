"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
// import Preloader from "../../components/Preloader";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  useEffect(() => {
    // If there is any logic that needs to run after Next.js hydration finishes
    if (typeof window !== "undefined" && window.jQuery) {
        window.dispatchEvent(new Event('resize'));
    }
  }, []);

  return (
    <>
      {/* <Preloader /> */}
      <Header />
      
      <div id="antra-smooth-wrapper" suppressHydrationWarning>
          <div id="antra-smooth-content" suppressHydrationWarning>
              {/* Contact Page Hero Section */}
              <section className="contact-hero-section pt-100 pb-100 fade-wrapper bg-dark-1">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading text-center white-content">
                        <h1 className="section-title cursor-effect">Contact <span>SS Interiorshub</span></h1>
                        <p className="mb-0">Reach out to our team of experts to start planning your dream space. We're here to help you create the perfect interior design solution.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Info Section */}
              <section className="contact-info-section pt-50 pb-50 fade-wrapper">
                <div className="container">
                  <div className="row gy-5">
                    <div className="col-lg-4 col-md-6 slide-anim" data-offset="100" data-direction="left" suppressHydrationWarning>
                      <div className="contact-info-card">
                        <div className="contact-icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <h3 className="contact-info-title">Our Location</h3>
                        <p className="contact-info-text">
                          LGF-25 Ajnara Arcade<br />
                          Crossings Republik<br />
                          Ghaziabad, Delhi NCR
                        </p>
                        <a href="https://maps.google.com/?q=LGF-25+Ajnara+Arcade+Crossings+Republik+Ghaziabad" target="_blank" rel="noopener noreferrer" className="contact-info-link">
                          View on Map <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 slide-anim" data-offset="100" data-direction="up" suppressHydrationWarning>
                      <div className="contact-info-card">
                        <div className="contact-icon">
                          <i className="fa-solid fa-phone"></i>
                        </div>
                        <h3 className="contact-info-title">Phone & WhatsApp</h3>
                        <p className="contact-info-text">
                          Available Monday to Saturday<br />
                          9:00 AM to 7:00 PM
                        </p>
                        <a href="tel:+919990447773" className="contact-info-link">
                          +91 9990447773 <i className="fa-solid fa-phone"></i>
                        </a>
                        {/* <div className="mt-3">
                          <a href="https://wa.me/919990447773" target="_blank" rel="noopener noreferrer" className="contact-info-link" style={{ background: '#25D366', color: 'white', padding: '8px 15px', borderRadius: '5px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fa-brands fa-whatsapp"></i> Message on WhatsApp
                          </a>
                        </div> */}
                      </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 slide-anim" data-offset="100" data-direction="right" suppressHydrationWarning>
                      <div className="contact-info-card">
                        <div className="contact-icon">
                          <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h3 className="contact-info-title">Email Address</h3>
                        <p className="contact-info-text">
                          For inquiries, quotes, or consultations<br />
                          We respond within 24 hours
                        </p>
                        <a href="mailto:Sethiinteriors1@gmail.com" className="contact-info-link">
                          Sethiinteriors1@gmail.com <i className="fa-solid fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Main Contact Form Section */}
              <Contact />
                            
              {/* FAQ Section */}
              {/* <section className="faq-section pt-110 pb-150 fade-wrapper bg-dark-1">
                <div className="container">
                  <div className="row section-heading-wrap">
                    <div className="shape">
                      <img src="assets/img/shapes/section-heading.png" alt="shape" />
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="section-heading mb-0 white-content">
                        <h4 className="sub-heading">FAQ</h4>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="section-heading section-heading-2 mb-0 white-content">
                        <h2 className="section-title cursor-effect">Frequently Asked <span>Questions</span></h2>
                        <p className="mb-0">Find answers to common questions about our interior design services.</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="faq-accordion">
                        <div className={`accordion-item ${activeAccordion === 0 ? 'active' : ''}`}>
                          <button className="accordion-button" onClick={() => toggleAccordion(0)}>
                            <span>What services does SS Interiorshub offer?</span>
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <div className="accordion-content">
                            <p>We offer comprehensive interior design services including residential interiors, commercial spaces, modular kitchens, wardrobes, false ceilings, flooring solutions, wall paneling, and complete home renovation projects.</p>
                          </div>
                        </div>
                        
                        <div className={`accordion-item ${activeAccordion === 1 ? 'active' : ''}`}>
                          <button className="accordion-button" onClick={() => toggleAccordion(1)}>
                            <span>How long does a typical interior design project take?</span>
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <div className="accordion-content">
                            <p>The timeline varies based on project scope. Small projects (single room) take 2-4 weeks, medium projects (apartment) take 4-8 weeks, and large projects (villa/commercial) take 8-16 weeks. We provide detailed timelines during consultation.</p>
                          </div>
                        </div>
                        
                        <div className={`accordion-item ${activeAccordion === 2 ? 'active' : ''}`}>
                          <button className="accordion-button" onClick={() => toggleAccordion(2)}>
                            <span>Do you provide free consultations?</span>
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <div className="accordion-content">
                            <p>Yes, we offer free initial consultations to understand your requirements, discuss ideas, and provide preliminary suggestions. This helps us create a tailored proposal for your project.</p>
                          </div>
                        </div>
                        
                        <div className={`accordion-item ${activeAccordion === 3 ? 'active' : ''}`}>
                          <button className="accordion-button" onClick={() => toggleAccordion(3)}>
                            <span>What areas do you serve?</span>
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <div className="accordion-content">
                            <p>We primarily serve Ghaziabad and Delhi NCR region, including Noida, Greater Noida, Indirapuram, Vaishali, and surrounding areas. We also undertake projects in other parts of Delhi NCR based on project requirements.</p>
                          </div>
                        </div>
                        
                        <div className={`accordion-item ${activeAccordion === 4 ? 'active' : ''}`}>
                          <button className="accordion-button" onClick={() => toggleAccordion(4)}>
                            <span>Do you handle the entire project from design to execution?</span>
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <div className="accordion-content">
                            <p>Yes, we provide end-to-end services including design conceptualization, 3D visualization, material selection, procurement, project management, and execution with our skilled team of carpenters, painters, and electricians.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
              
              <Footer />
          </div>
      </div>
    </>
  );
}