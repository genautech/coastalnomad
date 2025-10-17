// Property Detail Page JavaScript

let currentProperty = null;

document.addEventListener('DOMContentLoaded', () => {
    const propertyId = parseInt(getUrlParameter('id'));
    
    if (!propertyId) {
        window.location.href = 'properties.html';
        return;
    }
    
    currentProperty = propertiesData.find(p => p.id === propertyId);
    
    if (!currentProperty) {
        alert('Property not found');
        window.location.href = 'properties.html';
        return;
    }
    
    loadPropertyDetails();
    setupGallery();
    setupFAQ();
    setupCalculator();
    setupShareModal();
    loadSimilarProperties();
    
    // Update WhatsApp links
    updateWhatsAppLinks();
});

// Load property details
function loadPropertyDetails() {
    // Set title and location
    document.getElementById('propertyTitle').textContent = currentProperty.title;
    document.getElementById('propertyLocation').querySelector('span').textContent = currentProperty.location;
    
    // Set overview
    document.getElementById('propBedrooms').textContent = currentProperty.bedrooms;
    document.getElementById('propBathrooms').textContent = currentProperty.bathrooms;
    document.getElementById('propArea').textContent = currentProperty.area;
    document.getElementById('propType').textContent = currentProperty.type.charAt(0).toUpperCase() + currentProperty.type.slice(1);
    
    // Set description
    document.getElementById('propertyDescription').textContent = currentProperty.description;
    
    // Set price
    document.getElementById('propertyPrice').textContent = `$${currentProperty.price.toLocaleString()}`;
    document.getElementById('propertyPriceBRL').textContent = `R$ ${currentProperty.priceBRL.toLocaleString()}`;
    
    // Set QOL scores
    document.getElementById('qolOverall').textContent = currentProperty.qol.overall.toFixed(1);
    document.getElementById('qolSafety').textContent = currentProperty.qol.safety.toFixed(1);
    document.getElementById('qolCost').textContent = currentProperty.qol.cost.toFixed(1);
    document.getElementById('qolInternet').textContent = currentProperty.qol.internet.toFixed(1);
    document.getElementById('qolCommunity').textContent = currentProperty.qol.community.toFixed(1);
    document.getElementById('qolClimate').textContent = currentProperty.qol.climate.toFixed(1);
    
    // Update QOL bars
    document.querySelectorAll('.qol-metric').forEach((metric, index) => {
        const scores = [
            currentProperty.qol.safety,
            currentProperty.qol.cost,
            currentProperty.qol.internet,
            currentProperty.qol.community,
            currentProperty.qol.climate
        ];
        const fill = metric.querySelector('.qol-metric-fill');
        setTimeout(() => {
            fill.style.width = `${scores[index] * 10}%`;
        }, 300 + (index * 100));
    });
    
    // Load amenities
    const amenitiesGrid = document.getElementById('amenitiesGrid');
    amenitiesGrid.innerHTML = currentProperty.amenities.map(amenity => `
        <div class="amenity-item">
            <span style="font-size: 1.5rem;">${amenity.icon}</span>
            <span>${amenity.text}</span>
        </div>
    `).join('');
    
    // Load nearby places
    const nearbyGrid = document.getElementById('nearbyGrid');
    nearbyGrid.innerHTML = currentProperty.nearby.map(place => `
        <div class="nearby-item">
            <div class="nearby-icon">${place.icon}</div>
            <div class="nearby-info">
                <strong>${place.name}</strong>
                <span>${place.distance}</span>
            </div>
        </div>
    `).join('');
    
    // Update page title
    document.title = `${currentProperty.title} - CoastalNomad`;
}

// Setup Gallery
function setupGallery() {
    const galleryMain = document.getElementById('galleryMain');
    const galleryThumbs = document.getElementById('galleryThumbs');
    
    // Set main image
    galleryMain.innerHTML = `<img src="${currentProperty.images[0]}" alt="${currentProperty.title}">`;
    
    // Set thumbnails
    galleryThumbs.innerHTML = currentProperty.images.map((img, index) => `
        <div class="gallery-thumb ${index === 0 ? 'active' : ''}" onclick="changeMainImage(${index})">
            <img src="${img}" alt="Property image ${index + 1}">
        </div>
    `).join('');
}

// Change main gallery image
function changeMainImage(index) {
    const galleryMain = document.getElementById('galleryMain');
    const thumbs = document.querySelectorAll('.gallery-thumb');
    
    galleryMain.innerHTML = `<img src="${currentProperty.images[index]}" alt="${currentProperty.title}">`;
    
    thumbs.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Setup FAQ
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Setup Calculator
function setupCalculator() {
    const calculateBtn = document.getElementById('calculateBtn');
    const currentCitySelect = document.getElementById('currentCity');
    const calculatorResult = document.getElementById('calculatorResult');
    
    calculateBtn.addEventListener('click', () => {
        const selectedCity = currentCitySelect.value;
        
        if (!selectedCity) {
            alert('Please select your current city');
            return;
        }
        
        const cityData = costOfLivingData[selectedCity];
        const savings = cityData.monthly - brazilCost;
        const savingsPercent = cityData.savings;
        
        calculatorResult.style.display = 'block';
        calculatorResult.innerHTML = `
            <h4 style="margin-bottom: 20px; color: var(--primary-blue);">
                <i class="fas fa-chart-line"></i> Cost Comparison Results
            </h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <div style="text-align: center; padding: 20px; background: var(--off-white); border-radius: var(--radius-md);">
                    <div style="font-size: 0.875rem; color: var(--gray); margin-bottom: 8px;">Your Current City</div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--charcoal);">$${cityData.monthly.toLocaleString()}</div>
                    <div style="font-size: 0.875rem; color: var(--dark-gray);">per month</div>
                </div>
                <div style="text-align: center; padding: 20px; background: var(--off-white); border-radius: var(--radius-md);">
                    <div style="font-size: 0.875rem; color: var(--gray); margin-bottom: 8px;">Living Here</div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--secondary-teal);">$${brazilCost.toLocaleString()}</div>
                    <div style="font-size: 0.875rem; color: var(--dark-gray);">per month</div>
                </div>
            </div>
            <div style="text-align: center; padding: 24px; background: linear-gradient(135deg, #00A6A6 0%, #0077CC 100%); border-radius: var(--radius-md); color: white;">
                <div style="font-size: 1rem; margin-bottom: 8px; opacity: 0.95;">You'll Save</div>
                <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 8px;">$${savings.toLocaleString()}/month</div>
                <div style="font-size: 1.125rem; opacity: 0.95;">That's ${savingsPercent}% less than you're spending now!</div>
            </div>
            <p style="margin-top: 20px; color: var(--dark-gray); font-size: 0.9375rem; text-align: center;">
                Annual savings: <strong style="color: var(--primary-blue);">$${(savings * 12).toLocaleString()}</strong>
            </p>
        `;
        
        // Smooth scroll to result
        calculatorResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// Setup Share Modal
function setupShareModal() {
    const shareBtn = document.getElementById('shareBtn');
    const shareModal = document.getElementById('shareModal');
    const closeShareModal = document.getElementById('closeShareModal');
    const shareButtons = document.querySelectorAll('.share-btn');
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const propertyLink = document.getElementById('propertyLink');
    
    const currentUrl = window.location.href;
    propertyLink.value = currentUrl;
    
    shareBtn.addEventListener('click', () => {
        shareModal.classList.add('active');
    });
    
    closeShareModal.addEventListener('click', () => {
        shareModal.classList.remove('active');
    });
    
    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) {
            shareModal.classList.remove('active');
        }
    });
    
    shareButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.dataset.share;
            const text = `Check out this amazing property: ${currentProperty.title}`;
            const url = encodeURIComponent(currentUrl);
            
            let shareUrl = '';
            switch(platform) {
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + currentUrl)}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
            }
            
            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });
    
    copyLinkBtn.addEventListener('click', () => {
        propertyLink.select();
        document.execCommand('copy');
        
        copyLinkBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            copyLinkBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
        }, 2000);
    });
}

// Load Similar Properties
function loadSimilarProperties() {
    const similarPropertiesContainer = document.getElementById('similarProperties');
    
    // Find similar properties (same location or price range)
    const similar = propertiesData
        .filter(p => p.id !== currentProperty.id)
        .filter(p => 
            p.locationSlug === currentProperty.locationSlug ||
            Math.abs(p.price - currentProperty.price) < 50000
        )
        .slice(0, 3);
    
    if (similar.length === 0) {
        similarPropertiesContainer.innerHTML = '<p style="color: var(--gray); text-align: center;">No similar properties at the moment</p>';
        return;
    }
    
    similarPropertiesContainer.innerHTML = similar.map(property => `
        <div class="similar-property" onclick="window.location.href='property.html?id=${property.id}'">
            <div class="similar-thumb">
                <img src="${property.images[0]}" alt="${property.title}">
            </div>
            <div class="similar-info">
                <h5>${property.title}</h5>
                <p class="similar-location">
                    <i class="fas fa-map-marker-alt"></i> ${property.location}
                </p>
                <p class="similar-price">$${property.price.toLocaleString()}</p>
            </div>
        </div>
    `).join('');
}

// Update WhatsApp Links
function updateWhatsAppLinks() {
    const message = `Hi! I'm interested in the property: ${currentProperty.title} (${window.location.href})`;
    const encodedMessage = encodeURIComponent(message);
    
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href.includes('property.html')) {
            link.setAttribute('href', `https://wa.me/5541999999999?text=${encodedMessage}`);
        }
    });
}

// Save Button
document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const icon = saveBtn.querySelector('i');
            const isSaved = icon.classList.contains('fas');
            
            if (isSaved) {
                icon.classList.remove('fas');
                icon.classList.add('far');
                alert('Property removed from saved list');
            } else {
                icon.classList.remove('far');
                icon.classList.add('fas');
                alert('Property saved!');
            }
        });
    }
    
    // Schedule Tour Button
    const scheduleTourBtn = document.getElementById('scheduleTourBtn');
    if (scheduleTourBtn) {
        scheduleTourBtn.addEventListener('click', () => {
            alert('Video tour scheduling feature coming soon! For now, please contact us via WhatsApp.');
        });
    }
    
    // Download Guide Button
    const downloadGuideBtn = document.getElementById('downloadGuideBtn');
    if (downloadGuideBtn) {
        downloadGuideBtn.addEventListener('click', () => {
            alert('Property guide download coming soon! For now, please contact us for detailed information.');
        });
    }
});