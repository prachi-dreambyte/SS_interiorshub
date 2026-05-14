# Component CSS Structure

This folder contains individual CSS files for each component in the Antra Next project. The CSS has been modularized to make it easier to maintain and update.

## Structure

### Main Files
- `index.css` - Main CSS file that imports all component CSS files
- `README.md` - This documentation file

### Component CSS Files Created

1. **Header.css** - Styles for the Header component
   - Header navigation
   - Sidebar menu
   - Mobile menu
   - Search popup
   - Sticky header

2. **Footer.css** - Styles for the Footer component
   - Footer layout
   - Widget sections
   - Social links
   - Copyright area
   - Background effects

3. **About.css** - Styles for the About component
   - About section layout
   - Content and image styling
   - List items with icons
   - Animation effects

4. **Services.css** - Styles for the Services component
   - Service cards grid
   - Icon styling
   - Hover effects
   - Animation sequences

5. **Blog.css** - Styles for the Blog component
   - Blog cards layout
   - Image styling
   - Meta information
   - Pagination
   - Read more links

6. **Contact.css** - Styles for the Contact component
   - Contact information cards
   - Contact form
   - Map integration
   - Success messages

7. **HeroSlider.css** - Styles for the HeroSlider component
   - Hero section layout
   - Slider controls
   - Content animations
   - Parallax effects
   - Video backgrounds

8. **Preloader.css** - Styles for the Preloader component
   - Loading animations
   - Progress bars
   - Percentage counters
   - Skip button
   - Multiple style variations

9. **Counter.css** - Styles for the Counter component
   - Counter cards
   - Number animations
   - Icon styling
   - Progress indicators
   - Light/dark variations

10. **Features.css** - Styles for the Features component
    - Feature cards grid
    - Icon animations
    - Hover effects
    - Number indicators

11. **Team.css** - Styles for the Team component
    - Team member cards
    - Image overlays
    - Social links
    - Position styling
    - Dark/light variations

## Usage

### Importing Styles

To use the component styles, import the main `index.css` file in your application:

```css
@import './styles/index.css';
```

Or import individual component CSS files as needed:

```css
@import './styles/Header.css';
@import './styles/Footer.css';
/* etc. */
```

### CSS Variables

All components use CSS custom properties (variables) defined in `index.css`:

```css
:root {
    --tl-ff-body: 'Golos Text', sans-serif;
    --tl-ff-heading: 'Cal Sans', serif;
    --tl-color-theme-primary: #CAA05C;
    --tl-color-bg-1: #1C1C1D;
    /* ... and more */
}
```

### Responsive Design

All component CSS files include responsive styles using media queries:

```css
@media only screen and (max-width: 992px) {
    /* Tablet styles */
}

@media only screen and (max-width: 767px) {
    /* Mobile styles */
}
```

### Animation Classes

Common animation classes are available:

- `.slide-anim` - Slide animations with direction support
- `.fade-in` - Fade in animations
- `.cursor-effect` - Cursor hover effects
- `.animated` - Class added when element is in view

## Best Practices

1. **Component Isolation** - Each component CSS file contains only styles for that specific component
2. **Consistent Naming** - Using BEM-like naming convention for classes
3. **Responsive First** - Mobile-first responsive design approach
4. **Animation Performance** - Using CSS transforms and opacity for smooth animations
5. **Accessibility** - Proper color contrast and focus states

## Adding New Component CSS

To add CSS for a new component:

1. Create a new CSS file in the `styles` folder: `ComponentName.css`
2. Add the import to `index.css`
3. Follow the existing pattern for structure and naming
4. Include responsive styles
5. Add appropriate animations and transitions

## Notes

- The CSS has been extracted from the original `main.css` file
- Some styles may need adjustment when integrating with the actual components
- All hover states and transitions are preserved
- Dark/light theme variations are included where applicable