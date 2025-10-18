// CoastalNomad - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('.nav-link');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
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
    
    // Chat Demo Modal
    const openChatDemoBtn = document.getElementById('openChatDemoBtn');
    const closeChatDemoBtn = document.getElementById('closeChatDemoBtn');
    const chatDemoModal = document.getElementById('chatDemoModal');
    const restartChatDemoBtn = document.getElementById('restartChatDemoBtn');
    
    if (openChatDemoBtn) {
        openChatDemoBtn.addEventListener('click', () => {
            chatDemoModal.classList.add('active');
            setTimeout(() => {
                startModalChatDemo();
            }, 500);
        });
    }
    
    if (closeChatDemoBtn) {
        closeChatDemoBtn.addEventListener('click', () => {
            chatDemoModal.classList.remove('active');
            resetModalChatDemo();
        });
    }
    
    if (restartChatDemoBtn) {
        restartChatDemoBtn.addEventListener('click', () => {
            resetModalChatDemo();
            setTimeout(() => {
                startModalChatDemo();
            }, 500);
        });
    }
    
    // Close modal when clicking outside
    if (chatDemoModal) {
        chatDemoModal.addEventListener('click', (e) => {
            if (e.target === chatDemoModal) {
                chatDemoModal.classList.remove('active');
                resetModalChatDemo();
            }
        });
    }
    
    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chatDemoModal && chatDemoModal.classList.contains('active')) {
            chatDemoModal.classList.remove('active');
            resetModalChatDemo();
        }
    });

    // Hero Slideshow
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroIndicators = document.querySelectorAll('.hero-indicator');
    const heroPrevBtn = document.getElementById('heroPrev');
    const heroNextBtn = document.getElementById('heroNext');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Remove active class from all slides and indicators
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroIndicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        if (heroSlides[index]) {
            heroSlides[index].classList.add('active');
        }
        if (heroIndicators[index]) {
            heroIndicators[index].classList.add('active');
        }
        
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % heroSlides.length;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
        showSlide(prev);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    // Initialize slideshow
    if (heroSlides.length > 0) {
        startSlideshow();

        // Navigation buttons
        if (heroPrevBtn) {
            heroPrevBtn.addEventListener('click', () => {
                stopSlideshow();
                prevSlide();
                startSlideshow();
            });
        }

        if (heroNextBtn) {
            heroNextBtn.addEventListener('click', () => {
                stopSlideshow();
                nextSlide();
                startSlideshow();
            });
        }

        // Indicators
        heroIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                stopSlideshow();
                showSlide(index);
                startSlideshow();
            });
        });

        // Pause on hover
        const heroSection = document.getElementById('heroSection');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopSlideshow);
            heroSection.addEventListener('mouseleave', startSlideshow);
        }
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

// Chat Demo Animation (Modal)
let modalChatDemoStep = 0;
let modalChatDemoTimeout = null;

const chatDemoMessages = [
    {
        sender: 'client',
        text: "Hi Rodrigo! I'm a software engineer looking to buy a property in Florianópolis. Can you help me?"
    },
    {
        sender: 'rodrigo',
        text: "Absolutely! Florianópolis is perfect for tech professionals - great internet, coworking spaces, and an amazing digital nomad community. What's your budget range?"
    },
    {
        sender: 'client',
        text: "Around $150,000 to $250,000. I'd like something near the beach with good internet for remote work."
    },
    {
        sender: 'rodrigo',
        text: "Perfect! I have 3 properties that match your criteria. Let me send you details and we can schedule video tours. When would be good for you?"
    },
    {
        sender: 'client',
        text: "This week would be great! Can we do a video tour on Wednesday?"
    },
    {
        sender: 'rodrigo',
        text: "Wednesday at 3 PM works perfectly. I'll send you calendar invite and property details via email. Also, I'm organizing a property visit trip next month coinciding with TechCrunch Disrupt - would you be interested?"
    },
    {
        sender: 'client',
        text: "That sounds amazing! Count me in. This is exactly the experience I was looking for."
    },
    {
        sender: 'rodrigo',
        text: "Excellent! I'll add you to the group. You'll meet other buyers and get to experience the lifestyle firsthand. I'll follow up with all details on WhatsApp. Looking forward to helping you find your coastal paradise! 🏖️"
    }
];

function startModalChatDemo() {
    const chatWindow = document.getElementById('modalChatWindow');
    if (!chatWindow) return;
    
    modalChatDemoStep = 0;
    addModalChatDemoMessage(0);
}

function addModalChatDemoMessage(step) {
    const chatWindow = document.getElementById('modalChatWindow');
    const chatScreen = document.getElementById('modalChatScreen');
    
    if (!chatWindow || !chatScreen) return;
    
    if (step >= chatDemoMessages.length) {
        return; // Stop at the end
    }
    
    const message = chatDemoMessages[step];
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-demo-message ${message.sender}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'chat-demo-avatar';
    avatar.textContent = message.sender === 'rodrigo' ? '👨‍💼' : '👤';
    
    const bubble = document.createElement('div');
    bubble.className = 'chat-demo-bubble';
    
    const name = document.createElement('div');
    name.className = 'chat-demo-name';
    name.textContent = message.sender === 'rodrigo' ? 'Rodrigo' : 'You';
    
    const text = document.createElement('div');
    text.className = 'chat-demo-text';
    text.textContent = message.text;
    
    bubble.appendChild(name);
    bubble.appendChild(text);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    chatWindow.appendChild(messageDiv);
    
    // Scroll to bottom smoothly
    setTimeout(() => {
        chatScreen.scrollTop = chatScreen.scrollHeight;
    }, 100);
    
    modalChatDemoStep = step;
    
    // Continue to next message
    if (step < chatDemoMessages.length - 1) {
        modalChatDemoTimeout = setTimeout(() => {
            addModalChatDemoMessage(step + 1);
        }, 2500);
    }
}

function resetModalChatDemo() {
    const chatWindow = document.getElementById('modalChatWindow');
    if (!chatWindow) return;
    
    // Clear any pending timeouts
    if (modalChatDemoTimeout) {
        clearTimeout(modalChatDemoTimeout);
        modalChatDemoTimeout = null;
    }
    
    chatWindow.innerHTML = `
        <div class="chat-demo-message rodrigo">
            <div class="chat-demo-avatar">👨‍💼</div>
            <div class="chat-demo-bubble">
                <div class="chat-demo-name">Rodrigo</div>
                <div class="chat-demo-text">Hi! I'm Rodrigo. I'll help you find your perfect coastal property in Brazil! 🏖️</div>
            </div>
        </div>
    `;
    
    modalChatDemoStep = 0;
}