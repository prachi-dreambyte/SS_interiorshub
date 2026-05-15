import Link from 'next/link';

export default function Header() {
  const handleNavClick = (e, target) => {
    e.preventDefault();
    if (window.ScrollSmoother && window.ScrollSmoother.get()) {
      window.ScrollSmoother.get().scrollTo(target, true, 'top top');
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="header sticky-active" suppressHydrationWarning>
            <div className="primary-header" suppressHydrationWarning>
                <div className="container">
                    <div className="primary-header-inner">
                        <div className="header-left-wrap">
                            <div className="header-logo d-lg-block">
                                <a href="index-2.html">
                                    {/* <h5 className="text-white">SS Interiorshub</h5> */}
                                    <h5 className="text-white">SS Interiorshub</h5>
                                </a>
                            </div>
                            <div className="header-menu-wrap">
                                <div className="mobile-menu-items" suppressHydrationWarning>
                                    <ul suppressHydrationWarning>
                                        <li><Link href="/">Home</Link></li>
                                        <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a></li>
                                        <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Us</a></li>
                                        <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Products</a></li>
                                        <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        <div className="header-right-wrap">
                            <a href="tel:+919990447773" className="header-contact">
                                <span className="icon"><i className="fa-regular fa-phone"></i></span>
                                <span className="content">
                                    <span className="call-text">Call Us Phone</span>
                                    <span className="call-number">+91 9990447773</span><br/>
                                     <span className="call-number">+91 7827097773</span>


                                </span>
                            </a>
                            <div className="header-btn-wrap">
                                <Link href="/contact" className="tl-primary-btn header-btn">Get in Touch</Link>
                            </div>
                            {/* <div className="search-icon dl-search-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div> */}
                            <div className="sidebar-icon">
                                <button className="sidebar-trigger open">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 2C11 0.89543 11.8954 0 13 0H14C15.1046 0 16 0.895431 16 2V3C16 4.10457 15.1046 5 14 5H13C11.8954 5 11 4.10457 11 3V2Z" fill="white"></path>
                                        <path d="M0 2C0 0.89543 0.895431 0 2 0H3C4.10457 0 5 0.895431 5 2V3C5 4.10457 4.10457 5 3 5H2C0.89543 5 0 4.10457 0 3V2Z" fill="white"></path>
                                        <path d="M0 13C0 11.8954 0.895431 11 2 11H3C4.10457 11 5 11.8954 5 13V14C5 15.1046 4.10457 16 3 16H2C0.89543 16 0 15.1046 0 14V13Z" fill="white"></path>
                                        <path d="M11 13C11 11.8954 11.8954 11 13 11H14C15.1046 11 16 11.8954 16 13V14C16 15.1046 15.1046 16 14 16H13C11.8954 16 11 15.1046 11 14V13Z" fill="white"></path>
                                    </svg>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </header><div id="popup-search-box">
            <div className="box-inner-wrap d-flex align-items-center">
                <form id="form" action="#" method="get" role="search">
                    <input id="popup-search" type="text" name="s" placeholder="Type keywords here..." />
                </form>
                <div className="search-close"><i className="fa-sharp fa-regular fa-xmark"></i></div>
            </div>
        </div><div id="sidebar-area" className="sidebar-area" suppressHydrationWarning>
            <button className="sidebar-trigger close">
                <svg className="sidebar-close" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="12.7px" viewBox="0 0 16 12.7"  xmlSpace="preserve">
                    <g>
                        <rect x="0" y="5.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)" width="16" height="2"></rect>
                        <rect x="0" y="5.4" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)" width="16" height="2"></rect>
                    </g>
                </svg>
            </button>
            <div className="side-menu-content">
                <div className="side-menu-logo">
                    <a className="dark-img" href="#home"><h5 className="text-white text-center">SS Interiorshub</h5></a>
                    <a className="light-img" href="#home"><h5 className="text-black text-center">SS Interiorshub</h5></a>
                </div>
                <div className="side-menu-wrap"></div>
                <div className="side-menu-about">
                    <h4 className="title">We Shape Interior Designs, Crafting Timeless and Inspiring Spaces</h4>
                </div>
                <div className="side-menu-gallary">
                    <div className="side-menu-gallary-item">
                        <a suppressHydrationWarning href="assets/img/project/sidebar-gallary-1.png" className="venobox" data-gall="gallary1"><img src="assets/img/project/sidebar-gallary-1.png" alt="img" /></a>
                    </div>
                    <div className="side-menu-gallary-item">
                        <a suppressHydrationWarning href="assets/img/project/sidebar-gallary-2.png" className="venobox" data-gall="gallary1"><img src="assets/img/project/sidebar-gallary-2.png" alt="img" /></a>
                    </div>
                    <div className="side-menu-gallary-item">
                        <a suppressHydrationWarning href="assets/img/project/sidebar-gallary-3.png" className="venobox" data-gall="gallary1"><img src="assets/img/project/sidebar-gallary-3.png" alt="img" /></a>
                    </div>
                    <div className="side-menu-gallary-item">
                        <a suppressHydrationWarning href="assets/img/project/sidebar-gallary-4.png" className="venobox" data-gall="gallary1"><img src="assets/img/project/sidebar-gallary-4.png" alt="img" /></a>
                    </div>
                    <div className="side-menu-gallary-item">
                        <a suppressHydrationWarning href="assets/img/project/sidebar-gallary-5.png" className="venobox" data-gall="gallary1"><img src="assets/img/project/sidebar-gallary-5.png" alt="img" /></a>
                    </div>
                    <div className="side-menu-gallary-item">
                        <a suppressHydrationWarning href="assets/img/project/sidebar-gallary-6.png" className="venobox" data-gall="gallary1"><img src="assets/img/project/sidebar-gallary-6.png" alt="img" /></a>
                    </div>
                </div>
                <div className="side-menu-contact">
                    <ul className="side-menu-list">
                        <li>
                            <i className="fa-solid fa-map-marker-alt" style={{ color: '#1a1a1a' }}></i>
                            LGF-25 ajnara arcade crossing republic
                        </li>
                        <li>
                            <i className="fa-solid fa-phone" style={{ color: '#1a1a1a' }}></i>
                            <a href="tel:+919990447773">+91 9990447773</a><br/>
                            <a href="tel:+917827097773">+91 7827097773</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope" style={{ color: '#1a1a1a' }}></i>
                            <a className="mail" href="mailto:Sethiinteriors1@gmail.com">Sethiinteriors1@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-get-in-touch" style={{marginTop: '30px', marginBottom: '30px', textAlign: 'center'}}>
                    <Link href="/contact" className="tl-primary-btn white-btn" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px 30px',
                        backgroundColor: '#caa05c',
                        color: '#fff',
                        borderRadius: '100px',
                        fontWeight: '400',
                        fontSize: '16px',
                        textDecoration: 'none',
                        border: '1px solid var(--tl-color-common-white)',
                        transition: 'all 0.3s ease-in-out',
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: '1'
                    }}>
                        Get in Touch
                        <span className="icon" style={{
                            backgroundColor: 'var(--tl-color-theme-primary)',
                            color: 'var(--tl-color-common-white)',
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '10px',
                            transition: 'all 0.3s ease-in-out'
                        }}>
                            <i className="fa-solid fa-arrow-right" style={{
                                fontSize: '16px',
                                transform: 'rotate(-45deg)',
                                transition: 'all 0.3s ease-in-out'
                            }}></i>
                        </span>
                    </Link>
                </div>
                <ul className="side-menu-social">
                    <li className="facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="instagram"><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li className="twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className="g-plus"><a href="#"><i className="fab fa-fab fa-google-plus"></i></a></li>
                </ul>
            </div>
        </div><div id="sidebar-overlay"></div><div className="mobile-side-menu">
            <div className="side-menu-content">
                <div className="side-menu-head">
                    <a href="index-2.html"><h5 className="text-white">SS Interiorshub</h5></a>
                    <button className="mobile-side-menu-close"><i className="fa-regular fa-xmark"></i></button>
                </div>
                <div className="side-menu-wrap"></div>
                <div className="side-menu-contact">
                    <div className="side-menu-header">
                        <h3>Contact Us</h3>
                    </div>
                    <ul className="side-menu-list">
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <p>LGF-25 Ajnara Arcade, Crossings Republik, Ghaziabad</p>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <a href="tel:+919990447773">+91 9990447773</a><br/>
                            <a href="tel:+917827097773">+91 7827097773</a>
                        </li>
                        <li>
                            <i className="fas fa-envelope-open-text"></i>
                            <a href="mailto:Sethiinteriors1@gmail.com">Sethiinteriors1@gmail.com</a>
                        </li>
                        <li>
                            <i className="fas fa-external-link-alt"></i>
                            <a href="/contact" className="contact-page-link">Visit Contact Page</a>
                        </li>
                    </ul>
                    <div className="mobile-get-in-touch-btn" style={{marginTop: '25px', textAlign: 'center'}}>
                        <Link href="/contact" className="tl-primary-btn white-btn" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px 30px',
                            backgroundColor: 'transparent',
                            color: 'var(--tl-color-common-white)',
                            borderRadius: '100px',
                            fontWeight: '400',
                            fontSize: '16px',
                            textDecoration: 'none',
                            border: '1px solid var(--tl-color-common-white)',
                            transition: 'all 0.3s ease-in-out',
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: '1'
                        }}>
                            Get in Touch
                            <span className="icon" style={{
                                backgroundColor: 'var(--tl-color-theme-primary)',
                                color: 'var(--tl-color-common-white)',
                                height: '40px',
                                width: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: '10px',
                                transition: 'all 0.3s ease-in-out'
                            }}>
                                <i className="fa-solid fa-arrow-right" style={{
                                    fontSize: '16px',
                                    transform: 'rotate(-45deg)',
                                    transition: 'all 0.3s ease-in-out'
                                }}></i>
                            </span>
                        </Link>
                    </div>
                </div>
                <ul className="side-menu-social">
                    <li className="facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="instagram"><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li className="twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className="g-plus"><a href="#"><i className="fab fa-fab fa-google-plus"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="mobile-side-menu-overlay"></div>
    </>
  );
}
