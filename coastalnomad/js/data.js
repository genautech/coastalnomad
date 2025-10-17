// Sample property data for CoastalNomad
const propertiesData = [
    {
        id: 1,
        title: "Beachfront Apartment with Ocean Views",
        location: "Florianópolis, Santa Catarina",
        locationSlug: "florianopolis",
        type: "apartment",
        price: 180000,
        priceBRL: 900000,
        bedrooms: 2,
        bathrooms: 2,
        area: 85,
        description: "Stunning beachfront apartment with panoramic ocean views. Perfect for digital nomads seeking inspiration and tranquility. High-speed fiber internet, modern finishes, and walking distance to coworking spaces.",
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop&q=80"
        ],
        amenities: [
            { icon: "🚀", text: "Fiber Internet 1Gbps" },
            { icon: "🏊", text: "Swimming Pool" },
            { icon: "💪", text: "Fitness Center" },
            { icon: "🏖️", text: "Beach Access 200m" },
            { icon: "☕", text: "Coworking 500m" },
            { icon: "🅿️", text: "Parking Included" },
            { icon: "🔒", text: "24/7 Security" },
            { icon: "🌊", text: "Ocean View" }
        ],
        qol: {
            overall: 9.2,
            safety: 8.5,
            cost: 9.0,
            internet: 10.0,
            community: 9.0,
            climate: 9.5
        },
        nearby: [
            { icon: "☕", name: "Impact Hub Coworking", distance: "500m" },
            { icon: "🏖️", name: "Praia Mole Beach", distance: "200m" },
            { icon: "🍽️", name: "Beach Restaurants", distance: "300m" },
            { icon: "🏥", name: "Hospital Unimed", distance: "2km" },
            { icon: "✈️", name: "Florianópolis Airport", distance: "18km" },
            { icon: "🛒", name: "Supermarket", distance: "400m" }
        ],
        lifestyle: ["beach", "wellness"],
        featured: true,
        nearbyEvents: [
            { name: "TechCrunch Disrupt Brazil", date: "Dec 5-7, 2024", distance: "5km", url: "events-travel.html#events" },
            { name: "AI & Blockchain Summit", date: "Mar 10-12, 2025", distance: "5km", url: "events-travel.html#events" }
        ],
        travelInfo: {
            nearestAirport: "Florianópolis International (FLN)",
            airportDistance: "18km",
            flightPriceFrom: "$450-750",
            transferCost: "$30-45"
        }
    },
    {
        id: 2,
        title: "Modern Loft in Curitiba City Center",
        location: "Curitiba, Paraná",
        locationSlug: "curitiba",
        type: "apartment",
        price: 145000,
        priceBRL: 725000,
        bedrooms: 1,
        bathrooms: 1,
        area: 65,
        description: "Contemporary loft in Curitiba's vibrant downtown. Perfect urban base for digital nomads who want city amenities with coastal access. Walk to restaurants, cafes, and cultural venues.",
        images: [
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&h=800&fit=crop&q=80"
        ],
        amenities: [
            { icon: "🚀", text: "Fiber Internet 500Mbps" },
            { icon: "☕", text: "Coworking in Building" },
            { icon: "🚶", text: "Walkable Neighborhood" },
            { icon: "🍽️", text: "Restaurants Nearby" },
            { icon: "🚇", text: "Public Transport" },
            { icon: "🎨", text: "Art District" },
            { icon: "🔒", text: "Secure Building" },
            { icon: "🌳", text: "Parks Nearby" }
        ],
        qol: {
            overall: 8.7,
            safety: 8.8,
            cost: 9.5,
            internet: 9.5,
            community: 8.5,
            climate: 8.0
        },
        nearby: [
            { icon: "☕", name: "Coworking Space", distance: "In Building" },
            { icon: "🍽️", name: "Restaurants & Cafes", distance: "100m" },
            { icon: "🎨", name: "Cultural Center", distance: "300m" },
            { icon: "🏥", name: "Hospital", distance: "1.5km" },
            { icon: "🏖️", name: "Coast/Beach", distance: "70km" },
            { icon: "✈️", name: "Airport", distance: "22km" }
        ],
        lifestyle: ["urban", "creative"],
        featured: true,
        nearbyEvents: [
            { name: "Campus Party Brasil", date: "Jan 15-17, 2025", distance: "3km", url: "events-travel.html#events" },
            { name: "Design & Innovation Week", date: "Apr 5-7, 2025", distance: "2km", url: "events-travel.html#events" }
        ],
        travelInfo: {
            nearestAirport: "Afonso Pena International (CWB)",
            airportDistance: "22km",
            flightPriceFrom: "$500-800",
            transferCost: "$25-40"
        }
    },
    {
        id: 3,
        title: "Luxury Condo in Balneário Camboriú",
        location: "Balneário Camboriú, Santa Catarina",
        locationSlug: "balneario",
        type: "condo",
        price: 265000,
        priceBRL: 1325000,
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        description: "Premium high-rise condo in Brazil's Miami. Stunning ocean views, world-class amenities, and perfect infrastructure for remote work. Investment opportunity in South America's fastest-growing beach city.",
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop&q=80"
        ],
        amenities: [
            { icon: "🚀", text: "Fiber Internet 1Gbps" },
            { icon: "🏊", text: "Infinity Pool" },
            { icon: "💪", text: "Premium Gym" },
            { icon: "🧖", text: "Spa & Sauna" },
            { icon: "🏖️", text: "Beach Front" },
            { icon: "🅿️", text: "2 Parking Spaces" },
            { icon: "🔒", text: "Concierge Service" },
            { icon: "🌊", text: "Ocean View Balcony" }
        ],
        qol: {
            overall: 9.0,
            safety: 8.0,
            cost: 7.5,
            internet: 9.5,
            community: 8.5,
            climate: 9.5
        },
        nearby: [
            { icon: "🏖️", name: "Central Beach", distance: "50m" },
            { icon: "☕", name: "Multiple Coworkings", distance: "300m" },
            { icon: "🛒", name: "Shopping Mall", distance: "500m" },
            { icon: "🏥", name: "Private Hospital", distance: "1km" },
            { icon: "✈️", name: "Navegantes Airport", distance: "12km" },
            { icon: "🎢", name: "Cable Car", distance: "800m" }
        ],
        lifestyle: ["beach", "urban"],
        featured: true
    },
    {
        id: 4,
        title: "Cozy Beach House in Guaratuba",
        location: "Guaratuba, Paraná",
        locationSlug: "guaratuba",
        type: "house",
        price: 125000,
        priceBRL: 625000,
        bedrooms: 3,
        bathrooms: 2,
        area: 110,
        description: "Charming beach house in peaceful coastal town. Perfect for digital nomads seeking tranquility and authentic Brazilian beach culture. Large garden, home office space, and incredible value.",
        images: [
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop&q=80"
        ],
        amenities: [
            { icon: "🚀", text: "Fiber Internet 300Mbps" },
            { icon: "🌳", text: "Private Garden" },
            { icon: "🏡", text: "Separate Office Room" },
            { icon: "🏖️", text: "Beach 800m" },
            { icon: "🅿️", text: "Garage" },
            { icon: "🌴", text: "Outdoor Space" },
            { icon: "🔒", text: "Gated Community" },
            { icon: "🐕", text: "Pet Friendly" }
        ],
        qol: {
            overall: 8.5,
            safety: 8.2,
            cost: 9.8,
            internet: 8.5,
            community: 8.0,
            climate: 9.0
        },
        nearby: [
            { icon: "🏖️", name: "Beach", distance: "800m" },
            { icon: "☕", name: "Local Cafe", distance: "400m" },
            { icon: "🛒", name: "Supermarket", distance: "1km" },
            { icon: "🏥", name: "Health Center", distance: "2km" },
            { icon: "✈️", name: "Curitiba Airport", distance: "85km" },
            { icon: "🚢", name: "Ferry to Ilha do Mel", distance: "20km" }
        ],
        lifestyle: ["beach", "wellness"],
        featured: true
    },
    {
        id: 5,
        title: "Eco-House Near Ilha do Mel",
        location: "Pontal do Paraná, Paraná",
        locationSlug: "ilha-mel",
        type: "house",
        price: 98000,
        priceBRL: 490000,
        bedrooms: 2,
        bathrooms: 1,
        area: 75,
        description: "Sustainable eco-house close to the paradise island of Ilha do Mel. For nature-loving nomads seeking peace, authentic culture, and incredibly low cost of living. Solar panels and rainwater collection included.",
        images: [
            "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop&q=80"
        ],
        amenities: [
            { icon: "🚀", text: "Fiber Internet 100Mbps" },
            { icon: "☀️", text: "Solar Panels" },
            { icon: "💧", text: "Rainwater System" },
            { icon: "🌿", text: "Organic Garden" },
            { icon: "🏖️", text: "Beach 1.5km" },
            { icon: "🚢", text: "Ferry to Island" },
            { icon: "🌳", text: "Nature Reserve" },
            { icon: "🎣", text: "Fishing Village" }
        ],
        qol: {
            overall: 8.3,
            safety: 8.5,
            cost: 10.0,
            internet: 7.5,
            community: 7.8,
            climate: 9.0
        },
        nearby: [
            { icon: "🏖️", name: "Beach", distance: "1.5km" },
            { icon: "🚢", name: "Ferry Terminal", distance: "5km" },
            { icon: "🌳", name: "National Park", distance: "3km" },
            { icon: "🛒", name: "Village Market", distance: "2km" },
            { icon: "✈️", name: "Curitiba Airport", distance: "95km" },
            { icon: "☕", name: "Cafe", distance: "2km" }
        ],
        lifestyle: ["wellness", "beach"],
        featured: false
    },
    {
        id: 6,
        title: "Penthouse in Floripa Tech Hub",
        location: "Florianópolis, Santa Catarina",
        locationSlug: "florianopolis",
        type: "apartment",
        price: 320000,
        priceBRL: 1600000,
        bedrooms: 3,
        bathrooms: 3,
        area: 150,
        description: "Luxury penthouse in Florianópolis' innovation district. Rooftop terrace, smart home features, and surrounded by tech startups and coworking spaces. Perfect for high-earning digital professionals.",
        images: [
            "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600566753051-f0fcb1bb6be5?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=800&fit=crop&q=80"
        ],
        amenities: [
            { icon: "🚀", text: "Fiber Internet 1Gbps" },
            { icon: "🤖", text: "Smart Home System" },
            { icon: "🌅", text: "Rooftop Terrace" },
            { icon: "💪", text: "Private Gym" },
            { icon: "☕", text: "Coworking in Building" },
            { icon: "🅿️", text: "3 Parking Spaces" },
            { icon: "🔒", text: "High Security" },
            { icon: "🎮", text: "Entertainment Room" }
        ],
        qol: {
            overall: 9.3,
            safety: 8.8,
            cost: 8.0,
            internet: 10.0,
            community: 9.5,
            climate: 9.5
        },
        nearby: [
            { icon: "☕", name: "Tech Coworking", distance: "In Building" },
            { icon: "🍽️", name: "Gourmet Restaurants", distance: "200m" },
            { icon: "🏖️", name: "Beach", distance: "3km" },
            { icon: "🏥", name: "Hospital", distance: "1km" },
            { icon: "✈️", name: "Airport", distance: "15km" },
            { icon: "🎭", name: "Cultural Center", distance: "500m" }
        ],
        lifestyle: ["urban", "creative"],
        featured: false
    },
    {
        id: 7,
        title: "Studio Apartment Near Beach",
        location: "Balneário Camboriú, Santa Catarina",
        locationSlug: "balneario",
        type: "apartment",
        price: 95000,
        priceBRL: 475000,
        bedrooms: 1,
        bathrooms: 1,
        area: 42,
        description: "Affordable studio perfect for solo digital nomads. Walking distance to beach, cafes, and coworking spaces. Great investment opportunity with strong rental potential for when you're traveling.",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop&q=80"
        ],
        amenities: [
            { icon: "🚀", text: "Fiber Internet 500Mbps" },
            { icon: "🏊", text: "Pool Access" },
            { icon: "🏖️", text: "Beach 300m" },
            { icon: "☕", text: "Coworking 200m" },
            { icon: "🅿️", text: "Parking" },
            { icon: "🔒", text: "24/7 Security" },
            { icon: "🛒", text: "Shops Nearby" },
            { icon: "🌊", text: "Partial Ocean View" }
        ],
        qol: {
            overall: 8.6,
            safety: 8.0,
            cost: 9.0,
            internet: 9.5,
            community: 8.5,
            climate: 9.5
        },
        nearby: [
            { icon: "🏖️", name: "Beach", distance: "300m" },
            { icon: "☕", name: "Coworking", distance: "200m" },
            { icon: "🛒", name: "Supermarket", distance: "150m" },
            { icon: "🍽️", name: "Restaurants", distance: "100m" },
            { icon: "✈️", name: "Airport", distance: "12km" },
            { icon: "🏥", name: "Hospital", distance: "2km" }
        ],
        lifestyle: ["beach", "urban"],
        featured: false
    },
    {
        id: 8,
        title: "Mountain View Villa in Curitiba",
        location: "Curitiba, Paraná",
        locationSlug: "curitiba",
        type: "house",
        price: 210000,
        priceBRL: 1050000,
        bedrooms: 4,
        bathrooms: 3,
        area: 200,
        description: "Spacious villa with mountain views in Curitiba's premium neighborhood. Perfect for digital nomad families or those running online businesses. Multiple workspaces, beautiful garden, and top-tier infrastructure.",
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=80"
        ],
        amenities: [
            { icon: "🚀", text: "Fiber Internet 1Gbps" },
            { icon: "🏡", text: "Multiple Offices" },
            { icon: "🌳", text: "Large Garden" },
            { icon: "🚗", text: "2 Garages" },
            { icon: "🔥", text: "Fireplace" },
            { icon: "🍳", text: "Gourmet Kitchen" },
            { icon: "🔒", text: "Gated Community" },
            { icon: "⛰️", text: "Mountain Views" }
        ],
        qol: {
            overall: 9.0,
            safety: 9.2,
            cost: 8.5,
            internet: 9.5,
            community: 8.8,
            climate: 8.0
        },
        nearby: [
            { icon: "☕", name: "Cafe & Coworking", distance: "1km" },
            { icon: "🛒", name: "Shopping Center", distance: "2km" },
            { icon: "🏥", name: "Hospital", distance: "3km" },
            { icon: "🌳", name: "Parks", distance: "500m" },
            { icon: "✈️", name: "Airport", distance: "25km" },
            { icon: "🏖️", name: "Coast", distance: "65km" }
        ],
        lifestyle: ["mountain", "wellness"],
        featured: false
    }
];

// Add event and travel info to properties that don't have it yet
propertiesData.forEach((property, index) => {
    if (!property.nearbyEvents) {
        // Assign events based on location
        if (property.locationSlug === 'florianopolis') {
            property.nearbyEvents = [
                { name: "TechCrunch Disrupt Brazil", date: "Dec 5-7, 2024", distance: "5km", url: "events-travel.html#events" },
                { name: "AI & Blockchain Summit", date: "Mar 10-12, 2025", distance: "5km", url: "events-travel.html#events" }
            ];
            property.travelInfo = {
                nearestAirport: "Florianópolis International (FLN)",
                airportDistance: "18km",
                flightPriceFrom: "$450-750",
                transferCost: "$30-45"
            };
        } else if (property.locationSlug === 'curitiba') {
            property.nearbyEvents = [
                { name: "Campus Party Brasil", date: "Jan 15-17, 2025", distance: "3km", url: "events-travel.html#events" },
                { name: "Design & Innovation Week", date: "Apr 5-7, 2025", distance: "2km", url: "events-travel.html#events" }
            ];
            property.travelInfo = {
                nearestAirport: "Afonso Pena International (CWB)",
                airportDistance: "22-25km",
                flightPriceFrom: "$500-800",
                transferCost: "$25-40"
            };
        } else if (property.locationSlug === 'balneario') {
            property.nearbyEvents = [
                { name: "Web Summit Rio", date: "Feb 20-23, 2025", distance: "2km", url: "events-travel.html#events" }
            ];
            property.travelInfo = {
                nearestAirport: "Navegantes Airport (NVT)",
                airportDistance: "12km",
                flightPriceFrom: "$450-750",
                transferCost: "$20-35"
            };
        } else if (property.locationSlug === 'ilhadomel' || property.locationSlug === 'guaratuba') {
            property.nearbyEvents = [
                { name: "Remote Work Summit", date: "May 18-20, 2025", distance: "5km", url: "events-travel.html#events" }
            ];
            property.travelInfo = {
                nearestAirport: "Afonso Pena International (CWB)",
                airportDistance: "90-110km",
                flightPriceFrom: "$500-800",
                transferCost: "$60-90"
            };
        }
    }
});

// Cost of living comparison data
const costOfLivingData = {
    'new-york': { monthly: 5000, savings: 70 },
    'london': { monthly: 4500, savings: 68 },
    'singapore': { monthly: 4200, savings: 65 },
    'sydney': { monthly: 4000, savings: 63 },
    'toronto': { monthly: 3500, savings: 60 },
    'berlin': { monthly: 3200, savings: 55 }
};

const brazilCost = 1500; // Average monthly cost in coastal Brazil