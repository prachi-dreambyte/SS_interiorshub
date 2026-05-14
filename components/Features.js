export default function Features() {
  return (
    <section className="feature-section pt-150 pb-110 overflow-hidden tl-bg-color fade-wrapper">
      <div className="container container-2">
        <div className="row section-heading-wrap fade-top feature-top">
          <div className="shape">
            <img src="assets/img/shapes/section-heading.png" alt="shape" />
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="section-heading mb-0">
              <h4
                className="sub-heading"
                data-text-animation="fade-in-right"
                data-split="char"
                data-duration="0.9"
                data-stagger="0.03"
              >
                WHO We Are
              </h4>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="section-heading section-heading-2 mb-0">
              <h2 className="section-title cursor-effect title-2">
                Explore our <span>comprehensive <br /> interior design</span> services
              </h2>
              <p className="mb-0">
                We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
              </p>
            </div>
          </div>
        </div>

        <div className="row fade-top">
          <div className="col-lg-6">
            <div className="feature-item-imgs">
              <div className="feature-img">
                <img src="assets/img/service/feature-img-1.png" alt="feature" />
                <div className="img-content">
                  <p>
                    Tailored design services for private homes, including room makeovers and complete home transformations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-item-list feature-item-list-1">
              <div
                className="feature-item"
                data-img="assets/img/service/feature-img-1.png"
                data-text="Tailored design services for private homes, including room makeovers and complete home transformations."
              >
                <span className="number">01</span>
                <h3 className="title">
                  <p>Curtains & Blinds</p>
                </h3>
                {/* <a href="service-details.html" className="arrow">
                  <i className="fa-regular fa-arrow-right"></i>
                </a> */}
              </div>

              <div
                className="feature-item"
                data-img="assets/img/service/feature-img-1.png"
                data-text="Extending design services to outdoor spaces such as gardens, patios, and decks."
              >
                <span className="number">02</span>
                <h3 className="title">
                  <p>PVC Panels</p>
                </h3>
                {/* <a href="service-details.html" className="arrow">
                  <i className="fa-regular fa-arrow-right"></i>
                </a> */}
              </div>

              <div
                className="feature-item"
                data-img="assets/img/service/feature-img-1.png"
                data-text="Providing professional advice on concepts, color schemes &amp; material selection."
              >
                <span className="number">03</span>
                <h3 className="title">
                  <p>UPVC Panels</p>
                </h3>
                {/* <a href="service-details.html" className="arrow">
                  <i className="fa-regular fa-arrow-right"></i>
                </a> */}
              </div>

              <div
                className="feature-item"
                data-img="assets/img/service/feature-img-1.png"
                data-text="Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues."
              >
                <span className="number">04</span>
                <h3 className="title">
                  <p>Sofa Repair</p>
                </h3>
                {/* <a href="service-details.html" className="arrow">
                  <i className="fa-regular fa-arrow-right"></i>
                </a> */}
              </div>

              <div
                className="feature-item"
                data-img="assets/img/service/feature-img-1.png"
                data-text="Overhauling existing spaces to modernize and improve functionality and aesthetics."
              >
                <span className="number">05</span>
                <h3 className="title">
                  <p>Flooring</p>
                </h3>
                {/* <a href="service-details.html" className="arrow">
                  <i className="fa-regular fa-arrow-right"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
