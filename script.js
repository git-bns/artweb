// Prativa On Canvas artwork data with GitHub repository images
const artworks = [
    {
        id: 1,
        title: "Divine Ganesha",
        category: "spiritual",
        image: "https://prativaoncanvas.github.io/en/arts/art-1.jpg",
        price: "₹15,000",
        dimensions: "18\" x 24\"",
        medium: "Acrylic on Canvas",
        year: "2024",
        description: "A contemporary representation of Lord Ganesha with vibrant colors and intricate patterns. This piece combines traditional iconography with modern artistic expression, celebrating the remover of obstacles."
    },
    {
        id: 2,
        title: "Rajasthani Folk Dance",
        category: "traditional",
        image: "https://prativaoncanvas.github.io/en/arts/art-2.jpg",
        price: "₹22,000",
        dimensions: "24\" x 36\"",
        medium: "Oil on Canvas",
        year: "2024",
        description: "A vibrant depiction of traditional Rajasthani dancers in their colorful attire. The swirling skirts and graceful movements capture the essence of Indian cultural heritage and celebration."
    },
    {
        id: 3,
        title: "Lotus Meditation",
        category: "spiritual",
        image: "https://prativaoncanvas.github.io/en/arts/art-3.jpg",
        price: "₹18,500",
        dimensions: "20\" x 30\"",
        medium: "Watercolor on Paper",
        year: "2023",
        description: "A serene composition featuring the sacred lotus flower, symbolizing purity and enlightenment. Soft watercolor washes create a meditative atmosphere perfect for contemplation."
    },
    {
        id: 4,
        title: "Modern Mandala",
        category: "contemporary",
        image: "https://prativaoncanvas.github.io/en/arts/art-4.jpg",
        price: "₹12,000",
        dimensions: "16\" x 16\"",
        medium: "Mixed Media on Canvas",
        year: "2024",
        description: "A contemporary interpretation of traditional mandala art forms. Geometric patterns and modern color palettes create a harmonious blend of ancient wisdom and current artistic trends."
    },
    {
        id: 5,
        title: "Kerala Backwaters",
        category: "nature",
        image: "https://prativaoncanvas.github.io/en/arts/art-5.jpg",
        price: "₹25,000",
        dimensions: "30\" x 40\"",
        medium: "Oil on Canvas",
        year: "2024",
        description: "A peaceful landscape depicting the famous backwaters of Kerala. Coconut palms reflect in calm waters while traditional houseboats glide through this tropical paradise."
    },
    {
        id: 6,
        title: "Abstract Raga",
        category: "abstract",
        image: "https://prativaoncanvas.github.io/en/arts/art-6.jpg",
        price: "₹16,500",
        dimensions: "24\" x 32\"",
        medium: "Acrylic on Canvas",
        year: "2023",
        description: "An abstract interpretation of Indian classical music. Flowing forms and vibrant colors represent the emotional journey of a raga, translating sound into visual poetry."
    },
    {
        id: 7,
        title: "Madhubani Dreams",
        category: "traditional",
        image: "https://prativaoncanvas.github.io/en/arts/art-7.jpg",
        price: "₹20,000",
        dimensions: "22\" x 28\"",
        medium: "Natural Pigments on Handmade Paper",
        year: "2024",
        description: "A modern take on traditional Madhubani art from Bihar. Intricate patterns and nature motifs tell stories of rural life and spiritual beliefs passed down through generations."
    },
    {
        id: 8,
        title: "Mumbai Monsoon",
        category: "contemporary",
        image: "https://prativaoncanvas.github.io/en/arts/art-8.jpg",
        price: "₹28,000",
        dimensions: "36\" x 48\"",
        medium: "Oil on Canvas",
        year: "2024",
        description: "A contemporary urban landscape capturing the beauty and chaos of Mumbai during monsoon season. Rain-soaked streets reflect the vibrant life of India's commercial capital."
    },
    {
        id: 9,
        title: "Himalayan Sunrise",
        category: "nature",
        image: "https://prativaoncanvas.github.io/en/arts/art-9.jpg",
        price: "₹30,000",
        dimensions: "32\" x 48\"",
        medium: "Watercolor on Canvas",
        year: "2023",
        description: "A breathtaking view of the Himalayan peaks at sunrise. Golden light illuminates snow-capped mountains, creating a spiritual atmosphere that speaks to the soul."
    },
    {
        id: 10,
        title: "Cosmic Dance",
        category: "spiritual",
        image: "https://prativaoncanvas.github.io/en/arts/art-10.jpg",
        price: "₹35,000",
        dimensions: "36\" x 36\"",
        medium: "Acrylic on Canvas",
        year: "2024",
        description: "A powerful representation of Nataraja, the cosmic dancer. Dynamic brushstrokes and cosmic colors capture the eternal dance of creation and destruction."
    },
    {
        id: 11,
        title: "Village Life",
        category: "traditional",
        image: "https://prativaoncanvas.github.io/en/arts/art-11.jpg",
        price: "₹19,000",
        dimensions: "24\" x 30\"",
        medium: "Oil on Canvas",
        year: "2023",
        description: "A heartwarming scene of rural Indian life. Women drawing water from wells, children playing, and elders sharing stories under banyan trees capture the essence of traditional village culture."
    },
    {
        id: 12,
        title: "Peacock Garden",
        category: "nature",
        image: "https://prativaoncanvas.github.io/en/arts/art-12.jpg",
        price: "₹24,000",
        dimensions: "28\" x 36\"",
        medium: "Acrylic on Canvas",
        year: "2024",
        description: "India's national bird depicted in its full glory among lush garden foliage. Vibrant blues and greens create a celebration of natural beauty and grace."
    },
    {
        id: 13,
        title: "Temple Bells",
        category: "spiritual",
        image: "https://prativaoncanvas.github.io/en/arts/art-13.jpg",
        price: "₹21,000",
        dimensions: "20\" x 30\"",
        medium: "Oil on Canvas",
        year: "2024",
        description: "The melodious sound of temple bells captured in visual form. Golden hues and spiritual energy flow through this devotional composition."
    },
    {
        id: 14,
        title: "Kathak Dancer",
        category: "traditional",
        image: "https://prativaoncanvas.github.io/en/arts/art-14.jpg",
        price: "₹26,000",
        dimensions: "24\" x 36\"",
        medium: "Acrylic on Canvas",
        year: "2023",
        description: "A graceful Kathak dancer frozen in motion, embodying centuries of classical Indian dance tradition with flowing costumes and expressive gestures."
    },
    {
        id: 15,
        title: "Urban Rhythms",
        category: "contemporary",
        image: "https://prativaoncanvas.github.io/en/arts/art-15.jpg",
        price: "₹32,000",
        dimensions: "36\" x 48\"",
        medium: "Mixed Media on Canvas",
        year: "2024",
        description: "The pulse of modern Indian cities captured through bold strokes and vibrant colors, representing the harmony between tradition and progress."
    },
    {
        id: 16,
        title: "Sacred Ganges",
        category: "nature",
        image: "https://prativaoncanvas.github.io/en/arts/art-16.jpg",
        price: "₹28,000",
        dimensions: "30\" x 40\"",
        medium: "Watercolor on Canvas",
        year: "2023",
        description: "The holy river Ganges at dawn, with pilgrims and boats creating a spiritual atmosphere along the sacred ghats of Varanasi."
    },
    {
        id: 17,
        title: "Color Explosion",
        category: "abstract",
        image: "https://prativaoncanvas.github.io/en/arts/art-17.jpg",
        price: "₹18,000",
        dimensions: "24\" x 32\"",
        medium: "Acrylic on Canvas",
        year: "2024",
        description: "An explosion of vibrant colors representing the joy and energy of Indian festivals, particularly the celebration of Holi."
    },
    {
        id: 18,
        title: "Warli Art Modern",
        category: "traditional",
        image: "https://prativaoncanvas.github.io/en/arts/art-18.jpg",
        price: "₹16,000",
        dimensions: "18\" x 24\"",
        medium: "Natural Pigments on Canvas",
        year: "2024",
        description: "Contemporary interpretation of ancient Warli tribal art, featuring stick figures and geometric patterns that tell stories of daily life."
    },
    {
        id: 19,
        title: "Digital Dreams",
        category: "contemporary",
        image: "https://prativaoncanvas.github.io/en/arts/art-19.jpg",
        price: "₹25,000",
        dimensions: "28\" x 36\"",
        medium: "Digital Art Print on Canvas",
        year: "2024",
        description: "A fusion of digital technology and traditional Indian motifs, representing India's journey into the digital age while preserving cultural heritage."
    },
    {
        id: 20,
        title: "Desert Sunset",
        category: "nature",
        image: "https://prativaoncanvas.github.io/en/arts/art-20.jpg",
        price: "₹22,000",
        dimensions: "26\" x 34\"",
        medium: "Oil on Canvas",
        year: "2023",
        description: "The magnificent Rajasthani desert landscape at sunset, with golden dunes and camel silhouettes creating a timeless scene."
    },
    {
        id: 21,
        title: "Meditation Circle",
        category: "spiritual",
        image: "https://prativaoncanvas.github.io/en/arts/art-21.jpg",
        price: "₹19,500",
        dimensions: "20\" x 20\"",
        medium: "Watercolor on Paper",
        year: "2024",
        description: "A circular composition representing the cyclical nature of existence and the path to inner peace through meditation."
    },
    {
        id: 22,
        title: "Puppet Show",
        category: "traditional",
        image: "https://prativaoncanvas.github.io/en/arts/art-22.jpg",
        price: "₹17,500",
        dimensions: "22\" x 28\"",
        medium: "Acrylic on Canvas",
        year: "2023",
        description: "Colorful Rajasthani puppets in performance, capturing the whimsical and theatrical tradition of kathputli dance."
    },
    {
        id: 23,
        title: "Geometric Harmony",
        category: "contemporary",
        image: "https://prativaoncanvas.github.io/en/arts/art-23.jpg",
        price: "₹23,000",
        dimensions: "24\" x 32\"",
        medium: "Mixed Media on Canvas",
        year: "2024",
        description: "Modern geometric patterns inspired by Indian architectural motifs, creating harmony between mathematical precision and artistic expression."
    },
    {
        id: 24,
        title: "Monsoon Magic",
        category: "nature",
        image: "https://prativaoncanvas.github.io/en/arts/art-24.jpg",
        price: "₹27,000",
        dimensions: "32\" x 40\"",
        medium: "Watercolor on Canvas",
        year: "2024",
        description: "The beauty and power of monsoon rains bringing life to the Indian landscape, with dramatic clouds and rain-soaked earth."
    },
    {
        id: 25,
        title: "Energy Flow",
        category: "abstract",
        image: "https://prativaoncanvas.github.io/en/arts/art-25.jpg",
        price: "₹20,500",
        dimensions: "26\" x 32\"",
        medium: "Acrylic on Canvas",
        year: "2023",
        description: "Abstract representation of chakras and energy flow, using warm colors and flowing forms to depict spiritual energy movement."
    },
    {
        id: 26,
        title: "Folk Musicians",
        category: "traditional",
        image: "https://prativaoncanvas.github.io/en/arts/art-26.jpg",
        price: "₹24,500",
        dimensions: "28\" x 36\"",
        medium: "Oil on Canvas",
        year: "2024",
        description: "Traditional Indian folk musicians with tabla, sitar, and flute, capturing the soul of classical Indian music and cultural heritage."
    },
    {
        id: 27,
        title: "City Lights",
        category: "contemporary",
        image: "https://prativaoncanvas.github.io/en/arts/art-27.jpg",
        price: "₹29,000",
        dimensions: "30\" x 42\"",
        medium: "Mixed Media on Canvas",
        year: "2024",
        description: "The vibrant nightlife of modern Indian cities, with neon lights and bustling streets creating an energetic urban landscape."
    },
    {
        id: 28,
        title: "Banyan Wisdom",
        category: "nature",
        image: "https://prativaoncanvas.github.io/en/arts/art-28.jpg",
        price: "₹26,500",
        dimensions: "32\" x 44\"",
        medium: "Oil on Canvas",
        year: "2023",
        description: "An ancient banyan tree with its spreading branches and aerial roots, symbolizing wisdom, longevity, and the interconnectedness of life."
    },
    {
        id: 29,
        title: "Divine Light",
        category: "spiritual",
        image: "https://prativaoncanvas.github.io/en/arts/art-29.jpg",
        price: "₹31,000",
        dimensions: "30\" x 40\"",
        medium: "Acrylic on Canvas",
        year: "2024",
        description: "Rays of divine light breaking through clouds, representing spiritual awakening and the presence of the divine in everyday life."
    },
    {
        id: 30,
        title: "Textile Patterns",
        category: "traditional",
        image: "https://prativaoncanvas.github.io/en/arts/art-30.jpg",
        price: "₹18,500",
        dimensions: "24\" x 30\"",
        medium: "Natural Dyes on Canvas",
        year: "2024",
        description: "Intricate patterns inspired by traditional Indian textiles, featuring paisley, floral motifs, and geometric designs in rich colors."
    },
    {
        id: 31,
        title: "Abstract Emotion",
        category: "abstract",
        image: "https://prativaoncanvas.github.io/en/arts/art-31.jpg",
        price: "₹22,500",
        dimensions: "28\" x 34\"",
        medium: "Mixed Media on Canvas",
        year: "2023",
        description: "Raw emotions translated into abstract forms and colors, exploring the depths of human feelings through non-representational art."
    },
    {
        id: 32,
        title: "Modern Temple",
        category: "contemporary",
        image: "https://prativaoncanvas.github.io/en/arts/art-32.jpg",
        price: "₹33,000",
        dimensions: "36\" x 48\"",
        medium: "Acrylic on Canvas",
        year: "2024",
        description: "A contemporary interpretation of temple architecture, blending traditional spiritual elements with modern artistic vision."
    },
    {
        id: 33,
        title: "Tiger's Grace",
        category: "nature",
        image: "https://prativaoncanvas.github.io/en/arts/art-33.jpg",
        price: "₹35,000",
        dimensions: "32\" x 48\"",
        medium: "Oil on Canvas",
        year: "2024",
        description: "The majestic Bengal tiger in its natural habitat, representing India's wildlife heritage and the power of nature conservation."
    },
    {
        id: 34,
        title: "Prayer Flags",
        category: "spiritual",
        image: "https://prativaoncanvas.github.io/en/arts/art-34.jpg",
        price: "₹16,500",
        dimensions: "20\" x 28\"",
        medium: "Watercolor on Paper",
        year: "2023",
        description: "Colorful prayer flags fluttering in the Himalayan breeze, carrying hopes and prayers across the sacred mountain landscape."
    },
    {
        id: 35,
        title: "Wedding Celebration",
        category: "traditional",
        image: "https://prativaoncanvas.github.io/en/arts/art-35.jpg",
        price: "₹28,500",
        dimensions: "30\" x 40\"",
        medium: "Acrylic on Canvas",
        year: "2024",
        description: "A joyous Indian wedding scene with colorful decorations, traditional attire, and celebratory atmosphere capturing cultural festivities."
    },
    {
        id: 36,
        title: "Future Vision",
        category: "contemporary",
        image: "https://prativaoncanvas.github.io/en/arts/art-36.jpg",
        price: "₹30,000",
        dimensions: "32\" x 42\"",
        medium: "Digital Art on Canvas",
        year: "2024",
        description: "A futuristic vision of India blending technology with tradition, representing the country's journey toward innovation and progress."
    },
    {
        id: 37,
        title: "Ocean Waves",
        category: "nature",
        image: "https://prativaoncanvas.github.io/en/arts/art-37.jpg",
        price: "₹25,500",
        dimensions: "28\" x 38\"",
        medium: "Watercolor on Canvas",
        year: "2023",
        description: "The rhythm and power of ocean waves along India's extensive coastline, capturing the eternal dance between land and sea."
    },
    {
        id: 38,
        title: "Cosmic Mandala",
        category: "abstract",
        image: "https://prativaoncanvas.github.io/en/arts/art-38.jpg",
        price: "₹27,500",
        dimensions: "30\" x 30\"",
        medium: "Mixed Media on Canvas",
        year: "2024",
        description: "A complex mandala representing the cosmos and universal connection, with intricate patterns radiating from a central point."
    },
    {
        id: 39,
        title: "Heritage Street",
        category: "traditional",
        image: "https://prativaoncanvas.github.io/en/arts/art-39.jpg",
        price: "₹21,500",
        dimensions: "26\" x 34\"",
        medium: "Oil on Canvas",
        year: "2024",
        description: "A bustling traditional street scene with vendors, colorful buildings, and the authentic atmosphere of old Indian marketplaces."
    },
    {
        id: 40,
        title: "New Horizons",
        category: "contemporary",
        image: "https://prativaoncanvas.github.io/en/arts/art-40.jpg",
        price: "₹34,000",
        dimensions: "36\" x 50\"",
        medium: "Acrylic on Canvas",
        year: "2024",
        description: "A contemporary masterpiece representing hope and new beginnings, with dynamic forms and colors pointing toward a bright future."
    }
];

// DOM elements
const artworkGrid = document.getElementById('artwork-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const artworkModal = document.getElementById('artwork-modal');
const orderModal = document.getElementById('order-modal');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Modal elements
const modalImg = document.getElementById('modal-artwork-img');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDimensions = document.getElementById('modal-dimensions');
const modalMedium = document.getElementById('modal-medium');
const modalYear = document.getElementById('modal-year');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const orderBtn = document.getElementById('order-btn');

// Order form elements
const orderForm = document.getElementById('order-form');
const orderArtworkTitle = document.getElementById('order-artwork-title');
const orderArtworkPrice = document.getElementById('order-artwork-price');

// Current artwork being viewed
let currentArtwork = null;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderArtworks(artworks);
    setupEventListeners();
    createPlaceholderImages();
});

// Create placeholder images function
function createPlaceholderImages() {
    // Set placeholder images for hero and artist photo
    const heroImg = document.getElementById('hero-img');
    const artistImg = document.getElementById('artist-img');
    
    if (heroImg) {
        heroImg.src = 'https://prativaoncanvas.github.io/en/arts/featured-artwork.jpg';
        heroImg.alt = 'Featured Indian Contemporary Artwork';
    }
    
    if (artistImg) {
        artistImg.src = 'https://prativaoncanvas.github.io/en/arts/artist-photo.jpg';
        artistImg.alt = 'Prativa - Artist Portrait';
    }
}

// Render artworks in the grid
function renderArtworks(artworksToRender) {
    artworkGrid.innerHTML = '';
    
    artworksToRender.forEach(artwork => {
        const artworkElement = createArtworkElement(artwork);
        artworkGrid.appendChild(artworkElement);
    });
}

// Create individual artwork element
function createArtworkElement(artwork) {
    const artworkDiv = document.createElement('div');
    artworkDiv.className = 'artwork-item fade-in';
    artworkDiv.setAttribute('data-category', artwork.category);
    
    artworkDiv.innerHTML = `
        <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
        <div class="artwork-info">
            <h3>${artwork.title}</h3>
            <p class="artwork-category">${formatCategory(artwork.category)}</p>
            <p class="artwork-price">${artwork.price}</p>
        </div>
    `;
    
    artworkDiv.addEventListener('click', () => openArtworkModal(artwork));
    
    return artworkDiv;
}

// Format category for display
function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
    
    // Close modals
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModals);
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === artworkModal || e.target === orderModal) {
            closeModals();
        }
    });
    
    // Hamburger menu
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Order button
    orderBtn.addEventListener('click', openOrderModal);
    
    // Order form
    orderForm.addEventListener('submit', handleOrderSubmit);
    
    // Smooth scrolling for CTA button
    document.querySelector('.cta-button').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
    });
}

// Handle filter button clicks
function handleFilterClick(e) {
    const filter = e.target.getAttribute('data-filter');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter artworks
    if (filter === 'all') {
        renderArtworks(artworks);
    } else {
        const filteredArtworks = artworks.filter(artwork => artwork.category === filter);
        renderArtworks(filteredArtworks);
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        bar.style.transform = navMenu.classList.contains('active') 
            ? `rotate(${index === 1 ? '0' : index === 0 ? '45' : '-45'}deg) translate(${index === 1 ? '0' : index === 0 ? '8px, 8px' : '-8px, 8px'})`
            : 'none';
    });
}

// Open artwork modal
function openArtworkModal(artwork) {
    currentArtwork = artwork;
    
    modalImg.src = artwork.image;
    modalImg.alt = artwork.title;
    modalTitle.textContent = artwork.title;
    modalCategory.textContent = formatCategory(artwork.category);
    modalDimensions.textContent = artwork.dimensions;
    modalMedium.textContent = artwork.medium;
    modalYear.textContent = artwork.year;
    modalDescription.textContent = artwork.description;
    modalPrice.textContent = artwork.price;
    
    artworkModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open order modal
function openOrderModal() {
    if (!currentArtwork) return;
    
    orderArtworkTitle.textContent = currentArtwork.title;
    orderArtworkPrice.textContent = currentArtwork.price;
    
    artworkModal.style.display = 'none';
    orderModal.style.display = 'block';
}

// Close all modals
function closeModals() {
    artworkModal.style.display = 'none';
    orderModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentArtwork = null;
}

// Handle order form submission with Google Forms integration
function handleOrderSubmit(e) {
    e.preventDefault();
    
    const orderData = {
        artwork: currentArtwork,
        customer: {
            name: document.getElementById('customer-name').value,
            email: document.getElementById('customer-email').value,
            phone: document.getElementById('customer-phone').value,
            address: document.getElementById('shipping-address').value,
            requests: document.getElementById('special-requests').value
        }
    };
    
    // Submit to Google Forms
    submitToGoogleForms(orderData);
}

// Submit order data to Google Forms
function submitToGoogleForms(orderData) {
    // Google Forms URL - Replace with your actual Google Form ID
    const GOOGLE_FORMS_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc_YOUR_FORM_ID_HERE/formResponse';
    
    // Google Forms field IDs - Replace with your actual field IDs
    const formFields = {
        name: 'entry.123456789',           // Replace with actual field ID for name
        email: 'entry.987654321',         // Replace with actual field ID for email
        phone: 'entry.456789123',         // Replace with actual field ID for phone
        artwork: 'entry.789123456',       // Replace with actual field ID for artwork
        price: 'entry.321654987',         // Replace with actual field ID for price
        address: 'entry.654987321',       // Replace with actual field ID for address
        requests: 'entry.147258369'       // Replace with actual field ID for special requests
    };
    
    // Create form data for Google Forms
    const formData = new FormData();
    formData.append(formFields.name, orderData.customer.name);
    formData.append(formFields.email, orderData.customer.email);
    formData.append(formFields.phone, orderData.customer.phone || '');
    formData.append(formFields.artwork, orderData.artwork.title);
    formData.append(formFields.price, orderData.artwork.price);
    formData.append(formFields.address, orderData.customer.address);
    formData.append(formFields.requests, orderData.customer.requests || '');
    
    // Submit to Google Forms
    fetch(GOOGLE_FORMS_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(() => {
        // Show confirmation message
        showOrderConfirmation(orderData);
        console.log('Order submitted to Google Forms successfully');
    }).catch((error) => {
        console.error('Error submitting to Google Forms:', error);
        // Still show confirmation to user as form was filled correctly
        showOrderConfirmation(orderData);
    });
}

// Show order confirmation
function showOrderConfirmation(orderData) {
    // Create confirmation message
    const confirmationHTML = `
        <div class="order-confirmation">
            <div class="confirmation-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Order Confirmed!</h3>
            <p>Thank you for your order, ${orderData.customer.name}!</p>
            <div class="confirmation-details">
                <p><strong>Artwork:</strong> ${orderData.artwork.title}</p>
                <p><strong>Price:</strong> ${orderData.artwork.price}</p>
                <p><strong>Email:</strong> ${orderData.customer.email}</p>
            </div>
            <p class="confirmation-note">
                Prativa will contact you within 24 hours to arrange payment and shipping details.
            </p>
            <button class="confirmation-btn" onclick="closeModals()">Close</button>
        </div>
    `;
    
    // Update order modal content
    document.querySelector('.order-modal-body').innerHTML = confirmationHTML;
    
    // Reset form for next use
    orderForm.reset();
    
    console.log('Order submitted:', orderData);
}

// Smooth scrolling for navigation
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about, .gallery, .contact');
    animatedElements.forEach(el => observer.observe(el));
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModals();
    }
});

// Add loading states for images with fallback for GitHub repository images
function addImageLoadingStates() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
        
        img.addEventListener('error', () => {
            // If GitHub Pages image fails, fallback to high-quality art placeholder
            if (img.src.includes('prativaoncanvas.github.io')) {
                // Art-themed placeholder for failed artwork images
                img.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop';
            } else {
                // Generic placeholder for other images
                img.src = 'https://via.placeholder.com/400x300/ecf0f1/95a5a6?text=Image+Loading...';
            }
        });
    });
}

// Call image loading function
document.addEventListener('DOMContentLoaded', addImageLoadingStates);

// Add CSS for order confirmation
const confirmationStyles = `
    .order-confirmation {
        text-align: center;
        padding: 2rem;
    }
    
    .confirmation-icon {
        font-size: 4rem;
        color: #27ae60;
        margin-bottom: 1rem;
    }
    
    .order-confirmation h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }
    
    .confirmation-details {
        background: var(--light-gray);
        padding: 1rem;
        border-radius: 10px;
        margin: 1.5rem 0;
        text-align: left;
    }
    
    .confirmation-note {
        color: var(--dark-gray);
        font-style: italic;
        margin: 1.5rem 0;
    }
    
    .confirmation-btn {
        background: var(--secondary-color);
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
    }
    
    .confirmation-btn:hover {
        background: #c0392b;
    }
`;

// Add confirmation styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = confirmationStyles;
document.head.appendChild(styleSheet);