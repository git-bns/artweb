# Elena Rodriguez - Contemporary Artist Website

A modern, responsive artist portfolio website showcasing contemporary artworks with category filtering and integrated ordering system.

## Features

### 🎨 **Art Gallery**
- Responsive grid layout displaying artworks
- Category-based filtering (All, Paintings, Mixed Media, Abstract, Portraits)
- Smooth hover animations and visual effects
- High-quality placeholder images from Unsplash

### 📱 **Responsive Design**
- Mobile-first approach with breakpoints for tablets and desktop
- Hamburger menu for mobile navigation
- Optimized layouts for all screen sizes
- Touch-friendly interface elements

### 🖼️ **Artwork Details**
- Modal popup with detailed artwork information
- High-resolution image display
- Comprehensive artwork details including:
  - Dimensions
  - Medium used
  - Year created
  - Artist description
  - Pricing information

### 🛒 **Integrated Ordering System**
- Seamless order flow from artwork viewing to purchase
- Customer information form with validation
- Order summary and confirmation
- Professional order confirmation messaging

### ✨ **Modern UI/UX**
- Clean, contemporary design aesthetic
- Smooth animations and transitions
- Accessibility considerations (keyboard navigation, focus states)
- Professional color scheme and typography

## Technical Implementation

### **Frontend Technologies**
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: Interactive functionality without dependencies

### **Key Features**
- CSS Custom Properties for consistent theming
- Intersection Observer API for scroll animations
- Modal system for artwork details and ordering
- Form validation and submission handling
- Image lazy loading and error handling
- Smooth scrolling navigation

### **Responsive Breakpoints**
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md          # This documentation
```

## Getting Started

1. **Clone or download** the project files
2. **Open** `index.html` in a web browser
3. **No build process required** - pure HTML/CSS/JavaScript

## Customization

### **Adding New Artworks**
Edit the `artworks` array in `script.js`:

```javascript
const artworks = [
    {
        id: 10,
        title: "Your Artwork Title",
        category: "paintings", // or "abstract", "mixed-media", "portraits"
        image: "path/to/image.jpg",
        price: "$X,XXX",
        dimensions: "XX\" x XX\"",
        medium: "Medium Description",
        year: "YYYY",
        description: "Artwork description..."
    }
];
```

### **Updating Artist Information**
- Edit HTML content in the "About" section
- Update contact information in the "Contact" section
- Replace artist photo and hero image URLs

### **Styling Changes**
Modify CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #e74c3c;
    --accent-color: #f39c12;
    /* ... other variables */
}
```

## Browser Compatibility

- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Features used**: CSS Grid, Flexbox, ES6+ JavaScript

## Performance Features

- **Image optimization**: Lazy loading and error handling
- **Minimal dependencies**: No external frameworks
- **Efficient animations**: CSS transforms and opacity
- **Responsive images**: Optimized for different screen sizes

## Future Enhancements

Potential additions for further development:
- Backend integration for order processing
- Payment gateway integration
- Admin panel for artwork management
- Blog/news section
- Social media integration
- SEO optimization
- Performance monitoring

---

**Created for artists who want a professional, modern web presence to showcase and sell their artwork online.**
