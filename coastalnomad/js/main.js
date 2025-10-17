// CoastalNomad - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }

        lastScroll = currentScroll;
    });

    // Newsletter Form Handler
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            newsletterForm.reset();
        });
    }

    // Blog Newsletter Form
    const blogNewsletterForm = document.getElementById('blogNewsletterForm');
    if (blogNewsletterForm) {
        blogNewsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = blogNewsletterForm.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            blogNewsletterForm.reset();
        });
    }

    // Hero Search Form
    const heroSearchForm = document.getElementById('heroSearchForm');
    if (heroSearchForm) {
        heroSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const location = document.getElementById('heroLocation').value;
            const type = document.getElementById('heroType').value;
            const price = document.getElementById('heroPrice').value;
            
            let url = 'properties.html?';
            if (location) url += `location=${location}&`;
            if (type) url += `type=${type}&`;
            if (price) url += `price=${price}&`;
            
            window.location.href = url;
        });
    }

    // Load Featured Properties on Homepage
    const featuredPropertiesGrid = document.getElementById('featuredPropertiesGrid');
    if (featuredPropertiesGrid) {
        loadFeaturedProperties();
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Load Featured Properties
function loadFeaturedProperties() {
    const featuredPropertiesGrid = document.getElementById('featuredPropertiesGrid');
    if (!featuredPropertiesGrid) return;

    const featured = propertiesData.filter(p => p.featured).slice(0, 4);
    
    featuredPropertiesGrid.innerHTML = featured.map(property => createPropertyCard(property)).join('');
}

// Create Property Card HTML
function createPropertyCard(property) {
    return `
        <div class="property-card" onclick="window.location.href='property.html?id=${property.id}'">
            <div class="property-image">
                <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
                <span class="property-badge">Featured</span>
                <div class="property-actions">
                    <button class="btn-icon" onclick="event.stopPropagation(); toggleSave(${property.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="property-info">
                <p class="property-location">
                    <i class="fas fa-map-marker-alt"></i> ${property.location}
                </p>
                <h3 class="property-title">${property.title}</h3>
                <p class="property-description">${property.description}</p>
                <div class="property-features">
                    <span class="feature">
                        <i class="fas fa-bed"></i> ${property.bedrooms} Bed
                    </span>
                    <span class="feature">
                        <i class="fas fa-bath"></i> ${property.bathrooms} Bath
                    </span>
                    <span class="feature">
                        <i class="fas fa-ruler-combined"></i> ${property.area}m²
                    </span>
                </div>
                <div class="property-amenities">
                    ${property.amenities.slice(0, 3).map(a => 
                        `<span class="amenity-badge">${a.icon} ${a.text}</span>`
                    ).join('')}
                </div>
                <div class="property-footer">
                    <div class="property-price">
                        $${property.price.toLocaleString()}
                        <span class="property-price-brl">R$ ${property.priceBRL.toLocaleString()}</span>
                    </div>
                    <div class="property-qol">
                        <i class="fas fa-star"></i>
                        <span>${property.qol.overall}/10</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Toggle Save Property
function toggleSave(propertyId) {
    const saved = localStorage.getItem('savedProperties') || '[]';
    let savedArray = JSON.parse(saved);
    
    if (savedArray.includes(propertyId)) {
        savedArray = savedArray.filter(id => id !== propertyId);
        alert('Property removed from saved list');
    } else {
        savedArray.push(propertyId);
        alert('Property saved! View your saved properties anytime.');
    }
    
    localStorage.setItem('savedProperties', JSON.stringify(savedArray));
}

// Format Currency
function formatCurrency(amount, currency = 'USD') {
    if (currency === 'USD') {
        return `$${amount.toLocaleString()}`;
    } else if (currency === 'BRL') {
        return `R$ ${amount.toLocaleString()}`;
    }
}

// Get URL Parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.property-card, .quality-card, .story-card, .blog-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});