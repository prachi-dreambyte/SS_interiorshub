export default function Panorama() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `<div class="antra-panoroma-area fade-wrapper">
            <div class="bg-shape"><img src="assets/img/shapes/panoroma-shape-1.png" alt="shape"></div>
            <div class="container">
                <div class="section-heading text-center align-items-center fade-top">
                    <h4 class="sub-heading" data-text-animation="fade-in-right" data-split="char" data-duration="0.9" data-stagger="0.03">360-degree panoramas</h4>
                    <h2 class="section-title cursor-effect title-2">Create an even <span>greater <br>experience</span></h2>
                </div>
            </div>
            <div class="antra-panoroma-container container fade-top">
                <div class="antra-panoroma-img" data-img="assets/img/bg-img/virtual-tours.jpg"></div>
            </div>
        </div>` }} />
  );
}
