const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const htmlPath = 'c:/Users/user/Desktop/antra/index.html';
const componentsDir = 'c:/Users/user/Desktop/antra/antra-next/components';

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const html = fs.readFileSync(htmlPath, 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

function writeComponent(name, htmlContent, addId = null) {
  if (!htmlContent) {
    console.error(`Warning: No content found for component ${name}`);
    return;
  }
  
  if (addId) {
    // Inject the ID into the first opening tag
    htmlContent = htmlContent.replace(/^<([a-zA-Z0-9]+)/, `<$1 id="${addId}"`);
  }

  // Escape backticks and dollar signs
  const escapedContent = htmlContent.replace(/`/g, '\\`').replace(/\\$/g, '\\\\$');
  
  const content = `export default function ${name}() {
  return (
    <div dangerouslySetInnerHTML={{ __html: \`${escapedContent}\` }} />
  );
}
`;
  fs.writeFileSync(path.join(componentsDir, `${name}.js`), content);
  console.log(`Created ${name}.js`);
}

function writeJsxComponent(name, htmlContent) {
  if (!htmlContent) return;
  // Basic JSX conversions
  let jsx = htmlContent
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/tabindex=/gi, 'tabIndex=')
    .replace(/<img([^>]*)>/g, (match, p1) => {
        if (p1.endsWith('/')) return match;
        return `<img${p1} />`;
    })
    .replace(/<input([^>]*)>/g, (match, p1) => {
        if (p1.endsWith('/')) return match;
        return `<input${p1} />`;
    })
    .replace(/<br([^>]*)>/g, '<br />')
    .replace(/<hr([^>]*)>/g, '<hr />')
    .replace(/style="([^"]*)"/g, (match, p1) => {
        // Just remove inline styles for this specific component to avoid parser errors
        // (Header doesn't have crucial inline styles except maybe some viewBox stuff, wait, viewBox isn't style)
        // Actually, let's just strip them for Header if any
        return '';
    })
    .replace(/xml:space="preserve"/g, 'xmlSpace="preserve"')
    .replace(/enable-background/g, 'enableBackground')
    .replace(/<!--[\s\S]*?-->/g, ''); // Remove HTML comments

  const content = `import Link from 'next/link';

export default function ${name}() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;
  fs.writeFileSync(path.join(componentsDir, `${name}.js`), content);
  console.log(`Created ${name}.js (JSX)`);
}

// 1. Preloader
writeComponent('Preloader', $.html('.preloader'));

// 2. Header elements
const headerParts = [
  $.html('header.header'),
  $.html('#popup-search-box'),
  $.html('#sidebar-area'),
  $.html('#sidebar-overlay'),
  $.html('.mobile-side-menu'),
  $.html('.mobile-side-menu-overlay')
].join('\\n');
writeJsxComponent('Header', headerParts);

// The rest of the sections
writeComponent('HeroSlider', $.html('.slider-section'), 'home');
writeComponent('Services', $.html('.service-section'), 'services');
writeComponent('About', $.html('.about-section'), 'about');
writeComponent('Features', $.html('.feature-section'));
writeComponent('Counter', $.html('.counter-section'));
writeComponent('Process', $.html('.process-section'));
writeComponent('Projects', $.html('.project-section'), 'portfolio');
writeComponent('Testimonial', $.html('.testimonial-section'));
writeComponent('Sponsor', $.html('.sponsor-section'));
writeComponent('Panorama', $.html('.antra-panoroma-area'));
writeComponent('Team', $.html('.team-section'));
writeComponent('Video', $.html('.video-section'));
writeComponent('Blog', $.html('.blog-section'), 'blog');
writeComponent('Gallery', $.html('.gallary-section'));
writeComponent('Newsletter', $.html('.newsletter-section'));
writeComponent('Footer', $.html('footer.footer-section'), 'contact');

console.log('Component extraction complete.');
