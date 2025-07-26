// Sample artwork data
const artworks = [
    {
        id: 1,
        title: "Urban Reflections",
        category: "paintings",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400",
        price: "$2,500",
        dimensions: "24\" x 36\"",
        medium: "Oil on Canvas",
        year: "2024",
        description: "A vibrant exploration of city life through bold colors and dynamic brushstrokes. This piece captures the energy and movement of urban environments, reflecting the constant change and evolution of modern cityscapes."
    },
    {
        id: 2,
        title: "Serenity in Blue",
        category: "abstract",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
        price: "$1,800",
        dimensions: "20\" x 24\"",
        medium: "Acrylic on Canvas",
        year: "2024",
        description: "An abstract composition that evokes feelings of calm and tranquility through flowing forms and soothing blue tones. The piece invites contemplation and inner peace."
    },
    {
        id: 3,
        title: "Portrait of Grace",
        category: "portraits",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400",
        price: "$3,200",
        dimensions: "18\" x 24\"",
        medium: "Oil on Canvas",
        year: "2023",
        description: "A contemporary portrait that captures the essence of human emotion and dignity. The subject's expression tells a story of resilience and hope, painted with masterful attention to detail."
    },
    {
        id: 4,
        title: "Mixed Elements",
        category: "mixed-media",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
        price: "$2,100",
        dimensions: "30\" x 40\"",
        medium: "Mixed Media on Canvas",
        year: "2024",
        description: "An innovative piece combining traditional painting techniques with modern materials. Textural elements create depth and visual interest, challenging conventional artistic boundaries."
    },
    {
        id: 5,
        title: "Golden Horizon",
        category: "paintings",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
        price: "$2,800",
        dimensions: "36\" x 48\"",
        medium: "Oil on Canvas",
        year: "2024",
        description: "A luminous landscape that captures the magical moment of sunrise. Warm golden tones blend seamlessly with cool shadows, creating a sense of hope and new beginnings."
    },
    {
        id: 6,
        title: "Abstract Dreams",
        category: "abstract",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
        price: "$1,950",
        dimensions: "22\" x 28\"",
        medium: "Acrylic on Canvas",
        year: "2023",
        description: "A dreamlike composition that explores the subconscious mind through fluid forms and ethereal colors. The piece invites viewers to interpret their own meanings and emotions."
    },
    {
        id: 7,
        title: "Industrial Poetry",
        category: "mixed-media",
        image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400",
        price: "$2,650",
        dimensions: "28\" x 35\"",
        medium: "Mixed Media",
        year: "2024",
        description: "A powerful commentary on modern industrialization, combining found objects with traditional painting. The piece transforms industrial materials into something beautiful and meaningful."
    },
    {
        id: 8,
        title: "Soul Portrait",
        category: "portraits",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400",
        price: "$3,500",
        dimensions: "16\" x 20\"",
        medium: "Oil on Canvas",
        year: "2024",
        description: "An intimate portrait that goes beyond physical appearance to capture the inner essence of the subject. Each brushstroke reveals layers of personality and character."
    },
    {
        id: 9,
        title: "Nature's Symphony",
        category: "paintings",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
        price: "$2,300",
        dimensions: "24\" x 30\"",
        medium: "Watercolor on Paper",
        year: "2023",
        description: "A delicate watercolor that celebrates the harmony found in nature. Soft washes of color create a sense of movement and life, capturing the essence of natural beauty."
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
        heroImg.src = 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=800&fit=crop';
        heroImg.alt = 'Featured Contemporary Artwork';
    }
    
    if (artistImg) {
        artistImg.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=400&h=400&fit=crop';
        artistImg.alt = 'Elena Rodriguez - Artist Portrait';
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

// Handle order form submission
function handleOrderSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(orderForm);
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
    
    // Simulate order processing
    showOrderConfirmation(orderData);
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
                Elena will contact you within 24 hours to arrange payment and shipping details.
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