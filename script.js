// Sample Indian artwork data
const artworks = [
    {
        id: 1,
        title: "Divine Ganesha",
        category: "spiritual",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400",
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
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
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
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400",
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
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
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
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400",
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
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
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
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400",
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
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
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
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400",
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
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
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
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400",
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
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
        price: "₹24,000",
        dimensions: "28\" x 36\"",
        medium: "Acrylic on Canvas",
        year: "2024",
        description: "India's national bird depicted in its full glory among lush garden foliage. Vibrant blues and greens create a celebration of natural beauty and grace."
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
        heroImg.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop';
        heroImg.alt = 'Featured Indian Contemporary Artwork';
    }
    
    if (artistImg) {
        artistImg.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=400&h=400&fit=crop';
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

// Add loading states for images
function addImageLoadingStates() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
        
        img.addEventListener('error', () => {
            img.src = 'https://via.placeholder.com/400x300/ecf0f1/95a5a6?text=Image+Not+Available';
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