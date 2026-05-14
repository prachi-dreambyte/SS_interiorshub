export default function ProductCatalog() {
  const products = [
    {
      id: 1,
      name: "Fluted Panels",
      description: "Elegant fluted panels for modern interior designs, adding texture and depth to walls and surfaces.",
      pdfUrl: "/assets/pdf/FLUTED LOUVERS 9 STEP, GL SERIES, GLOSSY 9 STEP.pdf"
    },
    {
      id: 2,
      name: "3D Mirror Panels",
      description: "Mirror finish 3D panels for contemporary interior designs with reflective surfaces.",
      pdfUrl: "/assets/pdf/3D PANEL{MIRROR PANEL}.pdf"
    },
    {
      id: 3,
      name: "PVC Panels",
      description: "Durable and robust PVC panels for structural applications requiring maximum strength.",
      pdfUrl: "/assets/pdf/PVC PANEL.pdf"
    },
    {
      id: 4,
      name: "WPC Holo",
      description: "Wood plastic composite materials with holographic finish for modern durability.",
      pdfUrl: "/assets/pdf/WPC HOLO FEB.pdf"
    },
    {
      id: 5,
      name: "WPC 23mm",
      description: "23mm wood plastic composite materials combining natural aesthetics with modern durability.",
      pdfUrl: "/assets/pdf/Wpc-23mm Oct.pdf"
    },
    {
      id: 6,
      name: "Mosaic Tiles",
      description: "1x1 and 20x20 mosaic tiles for intricate patterns and detailed designs.",
      pdfUrl: "/assets/pdf/2026 Unpriced Mosaic Tiles.pdf"
    }
  ];

  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `<section id="products" class="product-catalog-section pt-150 pb-110 overflow-hidden tl-bg-color fade-wrapper">
            <div class="container">
                <div class="row section-heading-wrap fade-top">  
                    <div class="shape"><img src="assets/img/shapes/section-heading.png" alt="shape"></div>
                    <div class="col-lg-4 col-md-12">
                        <div class="section-heading mb-0">
                            <h4 class="sub-heading" data-text-animation="fade-in-right" data-split="char" data-duration="0.9" data-stagger="0.03">Our Products</h4>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12">
                        <div class="section-heading section-heading-2 mb-0">
                            <h2 class="section-title cursor-effect">Explore Our <span>Premium Collection</span></h2>
                            <p class="mb-0">Discover our carefully curated selection of premium furniture and interior solutions. <br> Each product is designed with quality, comfort, and style in mind.</p>
                        </div>
                    </div>
                </div>
                <div class="row gy-4">
                    ${products.map(product => `
                    <div class="col-xl-4 col-lg-6 col-md-12">
                        <div class="product-card slide-anim" data-delay="0.3" data-offset="100" data-direction="bottom">
                            <div class="product-card-inner">
                                <div class="product-header">
                                    <h3 class="product-title">${product.name}</h3>
                                    <div class="product-icon">
                                        <i class="fas fa-box-open"></i>
                                    </div>
                                </div>
                                <div class="product-body">
                                    <p class="product-description">${product.description}</p>
                                </div>
                                <div class="product-footer">
                                    <a href="${product.pdfUrl}" class="tl-primary-btn download-btn" target="_blank">
                                        <span>Download Catalog</span>
                                        <div class="icon">
                                            <i class="fas fa-download"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
        </section>` }} />
  );
}