export default function Footer() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `<footer id="footer" class="footer-section overflow-hidden">
            <div class="footer-bg" data-background="assets/img/bg-img/footer-bg.png"></div>
            <div class="footer-shade"></div>
            <div class="container container-2">
                <div class="row footer-wrap">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <div class="widget-header">
                                <div class="footer-logo">
                                    <a href="/">
                                    <h5 class="Logo">SS Interiorshub</h5>
                                    </a>
                                </div>
                            </div>
                            <p class="mb-10">We provide premium interior and home decor solutions including curtains, panels, flooring and custom designs across Ajnara Arcade, Crossings Republik.</p>
                            <p class="mb-0">LGF-25 ajnara arcade crossing republic</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget footer-col-2">
                            <ul class="footer-list">
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#products">Products</a></li>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget footer-col-2 pl-0">
                            <ul class="footer-list">
                                <li><a href="#portfolio">Our Projects</a></li>
                                <li><a href="/contact">Partners</a></li>
                                <li><a href="/contact">Partners Program</a></li>
                                <li><a href="/contact">Affiliate Program</a></li>
                                <li><a href="/contact">Terms &amp; Conditions</a></li>
                                <li><a href="/contact">Support Center</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <div class="footer-address">
                                <a class="number" href="tel:+919990447773">+91 9990447773</a>
                                <a class="mail" href="mailto:Sethiinteriors1@gmail.com">Sethiinteriors1@gmail.com</a>
                                <ul class="social-list">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">YouTube</a></li>
                                    <li><a href="#">Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="copyright-content">
                        <p>© 2026 SS Interiorshub. All Rights Reserved.Crafted with ❤️ by VD Infotech – Web Development | Digital Marketing | App & Software | Branding</p>
                    </div>
                </div>
            </div>
            <div class="footer-text"><span>SS Interiorshub</span></div>
        </footer>` }} />
  );
}