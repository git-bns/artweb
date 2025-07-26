# Prativa On Canvas - Contemporary Indian Artist Website

A modern, responsive artist portfolio website showcasing contemporary Indian artworks with category filtering and integrated Google Forms ordering system.

## Features

### 🎨 **Art Gallery**
- Responsive grid layout displaying Indian artworks
- Category-based filtering (All, Traditional, Contemporary, Spiritual, Nature, Abstract)
- Smooth hover animations and visual effects
- High-quality placeholder images from Unsplash
- 12 sample artworks with Indian themes and pricing in INR

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

### 🛒 **Integrated Google Forms Ordering System**
- Seamless order flow from artwork viewing to purchase
- Customer information form with validation
- Direct submission to Google Forms for order management
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

## Google Forms Setup

To enable order submissions, you need to set up a Google Form:

1. **Create a Google Form** at [forms.google.com](https://forms.google.com)
2. **Add the following fields:**
   - Customer Name (Short answer)
   - Email Address (Short answer)
   - Phone Number (Short answer)
   - Artwork Title (Short answer)
   - Artwork Price (Short answer)
   - Shipping Address (Paragraph)
   - Special Requests (Paragraph)

3. **Get the form URL:**
   - Click "Send" → "Link" → Copy the link
   - Replace `viewform` with `formResponse` in the URL

4. **Get field IDs:**
   - Right-click on each field and inspect element
   - Find the `name` attribute (e.g., `entry.123456789`)

5. **Update the JavaScript:**
   - Open `script.js`
   - Replace `GOOGLE_FORMS_URL` with your form URL
   - Replace the field IDs in the `formFields` object

Example field ID extraction:
```html
<input name="entry.123456789" ... >
```
Use `entry.123456789` as the field ID.

## Customization

### **Adding New Artworks**
Edit the `artworks` array in `script.js`:

```javascript
const artworks = [
    {
        id: 13,
        title: "Your Artwork Title",
        category: "traditional", // or "contemporary", "spiritual", "nature", "abstract"
        image: "path/to/image.jpg",
        price: "₹XX,XXX",
        dimensions: "XX\" x XX\"",
        medium: "Medium Description",
        year: "YYYY",
        description: "Artwork description..."
    }
];
```

### **Updating Artist Information**
- Edit HTML content in the "About" section
- Update contact information in the "Contact" section (currently set for Indian contact details)
- Replace artist photo and hero image URLs
- Update Google Forms integration with your own form

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

## Sample Artworks Included

The website comes with 12 sample Indian artworks across different categories:

### 🕉️ **Spiritual** (3 artworks)
- Divine Ganesha - ₹15,000
- Lotus Meditation - ₹18,500  
- Cosmic Dance - ₹35,000

### 🎨 **Traditional** (3 artworks)
- Rajasthani Folk Dance - ₹22,000
- Madhubani Dreams - ₹20,000
- Village Life - ₹19,000

### 🏙️ **Contemporary** (2 artworks)
- Modern Mandala - ₹12,000
- Mumbai Monsoon - ₹28,000

### 🌿 **Nature** (3 artworks)
- Kerala Backwaters - ₹25,000
- Himalayan Sunrise - ₹30,000
- Peacock Garden - ₹24,000

### 🎭 **Abstract** (1 artwork)
- Abstract Raga - ₹16,500

---

**Created for Indian artists who want a professional, modern web presence to showcase and sell their artwork online with integrated Google Forms order management.**
