// Properties Page JavaScript

let allProperties = [...propertiesData];
let filteredProperties = [...propertiesData];

// Get URL parameter helper function
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', () => {
    // Load URL parameters and apply filters
    loadFiltersFromURL();
    
    // Render properties
    renderProperties();
    
    // Setup filter event listeners
    setupFilters();
    
    // Setup view toggle
    setupViewToggle();
});

// Load filters from URL parameters
function loadFiltersFromURL() {
    const location = getUrlParameter('location');
    const type = getUrlParameter('type');
    const price = getUrlParameter('price');
    const lifestyle = getUrlParameter('lifestyle');
    
    if (location) document.getElementById('filterLocation').value = location;
    if (type) document.getElementById('filterType').value = type;
    if (price) document.getElementById('filterPrice').value = price;
    if (lifestyle) document.getElementById('filterLifestyle').value = lifestyle;
    
    applyFilters();
}

// Setup filter event listeners
function setupFilters() {
    const filterLocation = document.getElementById('filterLocation');
    const filterType = document.getElementById('filterType');
    const filterPrice = document.getElementById('filterPrice');
    const filterLifestyle = document.getElementById('filterLifestyle');
    const amenityCheckboxes = document.querySelectorAll('.amenity-checkbox');
    const clearFilters = document.getElementById('clearFilters');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    
    filterLocation.addEventListener('change', applyFilters);
    filterType.addEventListener('change', applyFilters);
    filterPrice.addEventListener('change', applyFilters);
    filterLifestyle.addEventListener('change', applyFilters);
    
    amenityCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    clearFilters.addEventListener('click', () => {
        filterLocation.value = '';
        filterType.value = '';
        filterPrice.value = '';
        filterLifestyle.value = '';
        amenityCheckboxes.forEach(cb => cb.checked = false);
        applyFilters();
    });
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            clearFilters.click();
        });
    }
}

// Apply filters
function applyFilters() {
    const location = document.getElementById('filterLocation').value;
    const type = document.getElementById('filterType').value;
    const priceRange = document.getElementById('filterPrice').value;
    const lifestyle = document.getElementById('filterLifestyle').value;
    const selectedAmenities = Array.from(document.querySelectorAll('.amenity-checkbox:checked'))
        .map(cb => cb.value);
    
    filteredProperties = allProperties.filter(property => {
        // Location filter
        if (location && property.locationSlug !== location) return false;
        
        // Type filter
        if (type && property.type !== type) return false;
        
        // Price filter
        if (priceRange) {
            if (priceRange === '500000+') {
                if (property.price < 500000) return false;
            } else {
                const [min, max] = priceRange.split('-').map(Number);
                if (property.price < min || property.price > max) return false;
            }
        }
        
        // Lifestyle filter
        if (lifestyle && !property.lifestyle.includes(lifestyle)) return false;
        
        // Amenities filter
        if (selectedAmenities.length > 0) {
            const propertyAmenityTexts = property.amenities.map(a => a.text.toLowerCase());
            const hasAllAmenities = selectedAmenities.every(amenity => {
                if (amenity === 'fiber') return propertyAmenityTexts.some(text => text.includes('fiber') || text.includes('internet'));
                if (amenity === 'coworking') return propertyAmenityTexts.some(text => text.includes('coworking'));
                if (amenity === 'beach') return propertyAmenityTexts.some(text => text.includes('beach'));
                if (amenity === 'pool') return propertyAmenityTexts.some(text => text.includes('pool'));
                if (amenity === 'gym') return propertyAmenityTexts.some(text => text.includes('gym') || text.includes('fitness'));
                return false;
            });
            if (!hasAllAmenities) return false;
        }
        
        return true;
    });
    
    renderProperties();
}

// Render properties
function renderProperties() {
    const propertiesGrid = document.getElementById('propertiesGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    
    if (filteredProperties.length === 0) {
        propertiesGrid.style.display = 'none';
        noResults.style.display = 'block';
        resultsCount.innerHTML = 'Showing <strong>0</strong> properties';
        return;
    }
    
    propertiesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    resultsCount.innerHTML = `Showing <strong>${filteredProperties.length}</strong> ${filteredProperties.length === 1 ? 'property' : 'properties'}`;
    
    propertiesGrid.innerHTML = filteredProperties.map(property => createPropertyCard(property)).join('');
}

// Setup view toggle
function setupViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const propertiesGrid = document.getElementById('propertiesGrid');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const view = btn.dataset.view;
            if (view === 'list') {
                propertiesGrid.style.gridTemplateColumns = '1fr';
            } else {
                propertiesGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 1fr))';
            }
        });
    });
}

// Create Property Card (reuse from main.js but extended)
function createPropertyCard(property) {
    return `
        <div class="property-card" onclick="window.location.href='property.html?id=${property.id}'">
            <div class="property-image">
                <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
                ${property.featured ? '<span class="property-badge">Featured</span>' : ''}
                <div class="property-actions">
                    <button class="btn-icon" onclick="event.stopPropagation(); toggleSave(${property.id})">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="btn-icon" onclick="event.stopPropagation(); shareProperty(${property.id})">
                        <i class="fas fa-share-alt"></i>
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
                    ${property.amenities.slice(0, 4).map(a => 
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

// Toggle Save Property (favorites)
function toggleSave(propertyId) {
    const savedProperties = JSON.parse(localStorage.getItem('saved_properties') || '[]');
    const index = savedProperties.indexOf(propertyId);
    
    if (index > -1) {
        savedProperties.splice(index, 1);
        alert('Property removed from favorites!');
    } else {
        savedProperties.push(propertyId);
        alert('Property saved to favorites!');
    }
    
    localStorage.setItem('saved_properties', JSON.stringify(savedProperties));
}

// Share Property
function shareProperty(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    const url = `${window.location.origin}/property.html?id=${propertyId}`;
    
    if (navigator.share) {
        navigator.share({
            title: property.title,
            text: `Check out this property: ${property.title}`,
            url: url
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(url);
        alert('Property link copied to clipboard!');
    }
}