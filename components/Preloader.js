export default function Preloader() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `<div class="preloader overflow-hidden">
            <div class="site-name"><span>SS Interiorshub</span></div>
            <div class="preloader-gutters">
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
            </div>
            <div class="preloader-text">
                <div class="percent">0</div>
                <span>%</span>
            </div>
        </div>` }} />
  );
}
