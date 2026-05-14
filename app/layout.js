import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "SS Interiorshub – Luxury Home Interiors & Modular Kitchen Designers in Ghaziabad, Delhi NCR",
  description: "SS Interiorshub – Luxury Home Interiors & Modular Kitchen Designers in Ghaziabad, Delhi NCR",
  // icons: {
  //   icon: '/assets/img/favicon.png',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/venobox.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/carouselTicker.css" />
        <link rel="stylesheet" href="/assets/css/animation.css" />
        <link rel="stylesheet" href="/assets/css/twentytwenty.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body suppressHydrationWarning>
        {children}
        
        {/* Contact Icons HTML */}
        <div className="contact-icons-container">
          {/* WhatsApp Icon for 9990447773 */}
          <a 
            href="https://wa.me/919990447773" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-icon whatsapp"
            aria-label="Contact via WhatsApp - 9990447773"
          >
            <i className="fab fa-whatsapp"></i>
            <span className="contact-tooltip">WhatsApp: 9990447773</span>
          </a>
          
          {/* Call Icon for 7827097773 */}
          <a 
            href="tel:+917827097773" 
            className="contact-icon call"
            aria-label="Call us - 7827097773"
          >
            <i className="fas fa-phone"></i>
            <span className="contact-tooltip">Call: 7827097773</span>
          </a>
        </div>
        
        <style>{`
          .contact-icons-container {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          .contact-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            color: white;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .contact-icon:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
          }
          
          .contact-icon.whatsapp {
            background-color: #25D366;
          }
          
          .contact-icon.call {
            background-color: #34B7F1;
          }
          
          .contact-icon i {
            font-size: 24px;
          }
          
          .contact-tooltip {
            position: absolute;
            left: 60px;
            background: white;
            color: #333;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            pointer-events: none;
          }
          
          .contact-tooltip::before {
            content: '';
            position: absolute;
            left: -6px;
            top: 50%;
            transform: translateY(-50%);
            border-width: 6px;
            border-style: solid;
            border-color: transparent white transparent transparent;
          }
          
          .contact-icon:hover .contact-tooltip {
            opacity: 1;
            visibility: visible;
          }
          
          @media (max-width: 768px) {
            .contact-icons-container {
              bottom: 15px;
              left: 15px;
            }
            
            .contact-icon {
              width: 45px;
              height: 45px;
            }
            
            .contact-icon i {
              font-size: 22px;
            }
          }
        `}</style>
        
        <Script src="/assets/js/vendor/jquary-3.7.1.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/bootstrap-bundle.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/imagesloaded-pkgd.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/venobox.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/meanmenu.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/jquery.isotope.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/split-type.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/scroll-trigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/scroll-smoother.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/jquery.carouselTicker.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/nice-select.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/three.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/panolens.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/jquery.event.move.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/jquery.twentytwenty.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/slider.js" strategy="afterInteractive" />
        <Script src="/assets/js/banner-process.js" strategy="afterInteractive" />
        <Script src="/assets/js/contact.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        
        <Script id="smooth-scroll-handler" strategy="afterInteractive">
          {`
            // Global smooth scrolling handler for all hash links
            document.addEventListener('DOMContentLoaded', function() {
              function handleHashClick(e) {
                const link = e.target.closest('a[href^="#"]');
                if (!link) return;
                
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                // Don't intercept if it's a different page
                if (link.getAttribute('target') === '_blank') return;
                if (link.hasAttribute('download')) return;
                
                e.preventDefault();
                
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                  if (window.ScrollSmoother && window.ScrollSmoother.get()) {
                    window.ScrollSmoother.get().scrollTo(targetId, true, 'top top');
                  } else {
                    targetElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }
              }
              
              // Add click listener to document
              document.addEventListener('click', handleHashClick);
            });
          `}
        </Script>
      </body>
    </html>
  );
}
