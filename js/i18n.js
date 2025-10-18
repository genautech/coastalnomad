/**
 * Internationalization (i18n) System
 * Supports English (en) and Brazilian Portuguese (pt-BR)
 */

const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_properties: "Properties",
        nav_buying_process: "How to Buy",
        nav_events: "Events & Travel",
        nav_blog: "Blog",
        nav_about: "About",
        
        // Hero Section
        hero_title_1: "Your Coastal Paradise",
        hero_title_2: "Awaits in Brazil",
        hero_tagline: "by Rodrigo Torrezan - Digital Nomad Real Estate Expert",
        hero_subtitle: "Premium properties for digital nomads in Curitiba, Paraná & Santa Catarina coast. Work remotely. Live beautifully. Invest smartly.",
        hero_cta_demo: "See How Rodrigo Helps You",
        hero_search_title: "Find Your Dream Property",
        hero_search_subtitle: "Search from 8+ premium coastal properties",
        hero_search_location: "Location",
        hero_search_location_all: "All Locations",
        hero_search_type: "Property Type",
        hero_search_type_all: "All Types",
        hero_search_price: "Price Range",
        hero_search_price_all: "Any Price",
        hero_search_bedrooms: "Bedrooms",
        bedrooms_any: "Any",
        hero_search_lifestyle: "Lifestyle",
        hero_search_lifestyle_all: "All Lifestyles",
        hero_search_btn: "Search Properties",
        price_100k: "Up to $100k",
        price_100k_250k: "$100k - $250k",
        price_250k_500k: "$250k - $500k",
        price_500k_plus: "$500k+",
        
        // Property Types
        type_apartment: "Apartment",
        type_house: "House",
        type_condo: "Condo",
        type_land: "Land",
        
        // Locations
        location_curitiba: "Curitiba",
        location_florianopolis: "Florianópolis",
        location_balneario: "Balneário Camboriú",
        location_ilhadomel: "Ilha do Mel",
        location_guaratuba: "Guaratuba",
        
        // Lifestyle Tags
        lifestyle_beach: "Beach Life",
        lifestyle_mountain: "Mountain Vibes",
        lifestyle_urban: "Urban Hub",
        lifestyle_wellness: "Wellness",
        lifestyle_creative: "Creative Community",
        lifestyle_beach_emoji: "🏄 Beach Life",
        lifestyle_mountain_emoji: "🌲 Mountain Vibes",
        lifestyle_urban_emoji: "🏙️ Urban Hub",
        lifestyle_wellness_emoji: "🧘 Wellness",
        lifestyle_creative_emoji: "🎨 Creative Community",
        
        // Properties Page
        properties_title: "Find Your Perfect Property",
        properties_subtitle: "Explore our curated selection of coastal properties designed for digital nomads",
        properties_filters: "Filters",
        properties_clear_filters: "Clear All",
        
        // Events & Travel Page
        events_hero_title: "🌴 Events & Travel Guide",
        events_hero_subtitle: "Discover tech events, plan your visit, and explore Brazil's coastal paradise with Rodrigo Torrezan",
        events_btn_view: "View Tech Events",
        events_btn_plan: "Plan Your Trip",
        events_upcoming_title: "🚀 Upcoming Tech Events",
        events_upcoming_subtitle: "Perfect opportunities to combine property visits with professional networking",
        events_btn_register: "Register Now",
        events_btn_view_props: "View Properties",
        events_properties_nearby: "properties nearby",
        events_property_nearby: "property nearby",
        
        // Buying Process Page
        buying_hero_title: "🏡 How to Buy Property in Brazil",
        buying_hero_subtitle: "Your complete step-by-step guide to purchasing coastal real estate as a digital nomad",
        buying_badge_legal: "Legal & Secure",
        buying_badge_experience: "Years Experience",
        buying_badge_rating: "Client Rating",
        buying_process_title: "The Complete Buying Process",
        buying_process_subtitle: "From first contact to keys in hand - every step explained",
        buying_schedule_now: "Schedule Now",
        buying_learn_more: "Learn More",
        buying_step1_title: "Initial Consultation",
        buying_step1_desc: "Let's understand your needs, budget, and lifestyle preferences. We'll discuss your goals and create a personalized property search strategy.",
        buying_step1_duration: "Duration:",
        buying_step1_duration_val: "30-60 minutes",
        buying_step1_format: "Format:",
        buying_step1_format_val: "Video call or in-person",
        buying_step1_cost: "Cost:",
        buying_step1_cost_val: "FREE",
        buying_step2_title: "Property Search & Selection",
        buying_step2_desc: "I'll curate a personalized selection of properties that match your criteria. You'll receive detailed info, photos, videos, and quality of life reports.",
        buying_step2_duration_val: "1-2 weeks",
        buying_step2_properties: "Properties:",
        buying_step2_properties_val: "5-10 curated options",
        buying_step2_updates: "Updates:",
        buying_step2_updates_val: "Daily via WhatsApp",
        buying_browse_properties: "Browse Properties",
        buying_step3_title: "Virtual or In-Person Tours",
        buying_step3_desc: "Choose between high-quality video tours or visit properties in person. I'll personally guide you through each property, highlighting features and answering all questions.",
        buying_step3_video: "Video Tours:",
        buying_step3_video_val: "Live via Zoom/WhatsApp",
        buying_step3_inperson: "In-Person:",
        buying_step3_inperson_val: "2-3 day itinerary",
        buying_step3_properties: "Properties:",
        buying_step3_properties_val: "3-5 per day",
        buying_plan_visit: "Plan Visit",
        buying_video_tour: "Video Tour",
        
        // Steps 4-8 Complete Details
        buying_step4_title: "Due Diligence & Documentation",
        buying_step4_desc: "I coordinate with lawyers to verify property titles, check for liens, review contracts, and ensure everything is legally sound. Your investment is protected.",
        buying_step4_duration_val: "1-2 weeks",
        buying_step4_lawyer: "Lawyer:",
        buying_step4_lawyer_val: "Included (bilingual)",
        buying_step4_reports: "Reports:",
        buying_step4_reports_val: "Full legal analysis",
        
        buying_step5_title: "Offer & Negotiation",
        buying_step5_desc: "I'll help you craft a competitive offer and negotiate the best terms. My local market knowledge ensures you get fair value and favorable conditions.",
        buying_step5_duration_val: "3-7 days",
        buying_step5_communication: "Communication:",
        buying_step5_communication_val: "Real-time updates",
        buying_step5_strategy: "Strategy:",
        buying_step5_strategy_val: "Data-driven approach",
        
        buying_step6_title: "Contract Signing",
        buying_step6_desc: "Once terms are agreed, we proceed to formal contract signing. All documents are reviewed by your lawyer and explained in detail before you sign.",
        buying_step6_duration_val: "1-3 days",
        buying_step6_location: "Location:",
        buying_step6_location_val: "Notary office or remote",
        buying_step6_language: "Language:",
        buying_step6_language_val: "Portuguese + translation",
        
        buying_step7_title: "Payment & Transfer",
        buying_step7_desc: "I'll guide you through international wire transfers, currency exchange, and payment schedules. Multiple payment options available to suit your needs.",
        buying_step7_currency: "Currency:",
        buying_step7_currency_val: "USD, EUR, or BRL",
        buying_step7_methods: "Methods:",
        buying_step7_methods_val: "Wire, Wise, crypto",
        buying_step7_fees: "Fees:",
        buying_step7_fees_val: "Transparent breakdown",
        
        buying_step8_title: "Property Handover",
        buying_step8_desc: "Congratulations! Final inspection, keys handover, and welcome to your new coastal paradise. I'll help with utilities, services setup, and local introductions.",
        buying_step8_celebration: "Celebration:",
        buying_step8_celebration_val: "Welcome package",
        buying_step8_checklist: "Checklist:",
        buying_step8_checklist_val: "Move-in guide",
        buying_step8_support: "Support:",
        buying_step8_support_val: "Ongoing assistance",
        buying_start_journey: "Start Your Journey",
        
        // Buying Process - Additional sections
        buying_how_works_title: "See How It Works",
        buying_how_works_subtitle: "Experience a typical interaction with Rodrigo",
        buying_start_simulation: "Start Simulation",
        buying_reset: "Reset",
        buying_engagement_title: "How Rodrigo Keeps You Engaged",
        buying_engagement_subtitle: "Smart strategies to ensure you stay informed and excited throughout the process",
        buying_whatsapp_updates: "24/7 WhatsApp Updates",
        buying_whatsapp_desc: "Get real-time notifications about new properties, market changes, and process updates directly on WhatsApp.",
        buying_connect_now: "Connect Now",
        buying_video_checkins: "Weekly Video Check-ins",
        buying_video_checkins_desc: "Regular video calls to review progress, answer questions, and adjust your search strategy as needed.",
        buying_schedule_call: "Schedule Call",
        buying_property_previews: "Virtual Property Previews",
        buying_property_previews_desc: "Receive exclusive videos and photos of properties before they hit the market. Early access for serious buyers.",
        buying_view_properties: "View Properties",
        buying_community_intros: "Community Introductions",
        buying_community_desc: "Connect with other digital nomads who've already made the move. Learn from their experiences.",
        buying_read_stories: "Read Stories",
        buying_market_insights: "Market Insights Reports",
        buying_market_desc: "Monthly reports on market trends, price movements, and investment opportunities in coastal Brazil.",
        buying_view_reports: "View Reports",
        buying_education_hub: "Buyer Education Hub",
        buying_education_desc: "Access guides, webinars, and resources to help you understand the Brazilian real estate market.",
        buying_faq_title: "Frequently Asked Questions",
        buying_faq_subtitle: "Everything you need to know about buying property in Brazil",
        buying_faq_q1: "Can foreigners buy property in Brazil?",
        buying_faq_q2: "What are the total costs involved?",
        buying_faq_q3: "How long does the process take?",
        buying_faq_q4: "Can I get financing/mortgage as a foreigner?",
        buying_faq_q5: "Do I need a lawyer?",
        buying_faq_q6: "Do I need to speak Portuguese?",
        buying_faq_q7: "Do I need to visit in person?",
        buying_faq_q8: "What about taxes and residency?",
        buying_faq_q9: "How safe is my investment?",
        buying_faq_q10: "What's the ROI and appreciation potential?",
        buying_faq_q11: "Can I rent out my property?",
        buying_faq_q12: "What happens after the purchase?",
        buying_ready_title: "Ready to Start Your Journey?",
        buying_ready_subtitle: "Let's find your perfect coastal property in Brazil. Schedule a free consultation and let's discuss your goals.",
        buying_start_consultation: "Start Free Consultation",
        
        // Blog Page
        blog_title: "Nomad Life Blog",
        blog_subtitle: "Guides, tips, and stories for digital nomads living on Brazil's coast",
        blog_cat_all: "All Posts",
        blog_cat_guides: "Destination Guides",
        blog_cat_hacks: "Nomad Life Hacks",
        blog_cat_stories: "Success Stories",
        blog_cat_market: "Market Insights",
        blog_cat_cultural: "Cultural Tips",
        blog_featured_title: "The Complete Guide to Living in Florianópolis as a Digital Nomad",
        blog_featured_desc: "Discover why Floripa is becoming the #1 destination for digital nomads in South America. From the best neighborhoods to coworking spaces, internet speeds, and cost breakdowns.",
        blog_read_time: "min read",
        blog_read_article: "Read Article",
        blog_read_more: "Read More",
        
        // About Page
        about_hero_title: "Your Partner in Finding Paradise",
        about_hero_subtitle: "Helping digital nomads discover their perfect coastal home in Brazil since 2010",
        about_mission_title: "Our Mission",
        about_stat_props: "Properties Sold",
        about_stat_countries: "Countries Served",
        about_stat_rating: "★ Average Rating",
        about_stat_years: "Years Experience",
        about_mission_lead: "We believe that where you live should inspire how you live. That's why we're dedicated to connecting digital nomads with exceptional coastal properties in Brazil's most beautiful regions.",
        about_mission_p1: "For over a decade, we've specialized in helping remote workers, entrepreneurs, and location-independent professionals find their perfect balance between work and paradise. We understand the unique needs of digital nomads – reliable internet, inspiring surroundings, vibrant communities, and smart investment opportunities.",
        about_mission_p2: "Our deep local knowledge, combined with our international perspective, allows us to provide unmatched service to clients from around the world.",
        about_expert_title: "Meet Your Expert",
        about_expert_subtitle: "Local knowledge. International perspective. Dedicated service.",
        about_rodrigo_position: "Founder & Coastal Properties Specialist",
        about_story_title: "My Story",
        about_story_p1: "Born and raised in Curitiba, I've spent my entire life exploring the stunning coastal regions of Paraná and Santa Catarina. What started as a passion for real estate evolved into a calling – helping people from around the world discover the exceptional quality of life that Brazil's coast offers.",
        about_story_p2: "After spending several years living abroad as a digital nomad myself, I returned to Brazil with a unique understanding of what remote workers truly need in a home. Fast, reliable internet isn't a luxury – it's essential. A vibrant community matters just as much as a beautiful view. And the right property isn't just a place to live; it's an investment in your lifestyle and future.",
        about_story_p3: "Today, I lead a dedicated team that combines deep local expertise with international standards of service. We're not just selling properties – we're helping you start your next chapter.",
        about_credentials_title: "Credentials & Experience",
        about_chat_rodrigo: "Chat with Rodrigo",
        about_send_email: "Send Email",
        
        // Property Detail Page
        property_back: "Back to Properties",
        property_bedrooms_label: "Bedrooms",
        property_bathrooms_label: "Bathrooms",
        property_area_label: "m²",
        property_type_label: "Type",
        property_about_title: "About This Property",
        property_qol_title: "Quality of Life Score",
        property_qol_excellent: "Excellent Location",
        property_qol_desc: "This area scores highly for digital nomads across all key metrics",
        property_qol_safety: "Safety",
        property_qol_safety_desc: "Low crime rate, well-lit streets, active community watch",
        property_qol_cost_living: "Cost of Living",
        property_qol_cost_desc: "Affordable dining, groceries, and services compared to major cities",
        property_qol_internet_speed: "Internet Speed",
        property_qol_internet_desc: "Fiber optic available, up to 1Gbps, stable connection",
        property_qol_community_label: "Community",
        property_qol_community_desc: "Active expat community, regular meetups, coworking events",
        property_qol_climate_label: "Climate",
        property_qol_climate_desc: "Mild year-round temperatures, sunny days, pleasant seasons",
        property_amenities_title: "Amenities & Features",
        property_location_title: "Location & Nearby",
        property_poi_title: "Points of Interest",
        property_calculator_title: "Cost of Living Calculator",
        property_calculator_desc: "Compare your current city's cost with living here",
        property_calculator_current_city: "Your Current City",
        property_calculator_select: "Select a city",
        property_calculator_btn: "Calculate",
        property_faq_title: "Frequently Asked Questions",
        property_faq_q1: "Can foreigners buy property in Brazil?",
        property_faq_a1: "Yes! Foreigners can purchase property in Brazil with minimal restrictions. You'll need a CPF (tax ID), which we can help you obtain. The process is straightforward and typically takes 30-60 days.",
        property_faq_q2: "What are the ongoing costs?",
        property_faq_a2: "Typical monthly costs include property tax (IPTU), condo fees if applicable, utilities (electricity, water, internet), and maintenance. For this property, expect around $200-400/month in total ongoing costs.",
        property_faq_q3: "Is internet reliable for remote work?",
        property_faq_a3: "Absolutely! This area has fiber optic internet with speeds up to 1Gbps. Most digital nomads report stable connections perfect for video calls, streaming, and large file transfers.",
        property_faq_q4: "Can I rent this property out?",
        property_faq_a4: "Yes, rental income is allowed. Many owners rent their properties on platforms like Airbnb or long-term to other expats. We can connect you with property management services if needed.",
        property_faq_q5: "What about healthcare?",
        property_faq_a5: "Brazil offers excellent private healthcare at affordable rates. Quality hospitals and clinics are nearby, and private health insurance costs around $50-150/month depending on coverage.",
        property_price_label: "Price",
        property_whatsapp_btn: "Chat on WhatsApp",
        property_tour_btn: "Schedule Video Tour",
        property_guide_btn: "Download Property Guide",
        
        // Property Data (Dynamic Content)
        property_1_title: "Beachfront Apartment with Ocean Views",
        property_1_desc: "Stunning beachfront apartment with panoramic ocean views. Perfect for digital nomads seeking inspiration and tranquility. High-speed fiber internet, modern finishes, and walking distance to coworking spaces.",
        property_2_title: "Modern Loft in Curitiba City Center",
        property_2_desc: "Contemporary loft in Curitiba's vibrant downtown. Perfect urban base for digital nomads who want city amenities with coastal access. Walk to restaurants, cafes, and cultural venues.",
        property_3_title: "Luxury Condo in Balneário Camboriú",
        property_3_desc: "High-rise luxury condominium with breathtaking ocean views. Modern amenities, rooftop pool, and prime beachfront location. Investment opportunity in Brazil's fastest-growing coastal city.",
        property_4_title: "Cozy Beach House in Guaratuba",
        property_4_desc: "Charming beach house perfect for those seeking peace and nature. Large garden, outdoor workspace, and steps from pristine beaches. Ideal for creative professionals and families.",
        property_5_title: "Eco Lodge on Ilha do Mel",
        property_5_desc: "Off-grid paradise for digital nomads seeking ultimate tranquility. Solar power, rainwater collection, surrounded by Atlantic rainforest. Limited car access maintains pristine environment.",
        property_6_title: "Penthouse with Panoramic Bay Views",
        property_6_desc: "Spectacular penthouse offering 360-degree views of Florianópolis bay and mountains. Premium finishes, private terrace, and concierge service. Ultimate luxury coastal living.",
        property_7_title: "Modern Studio Near Beach",
        property_7_desc: "Affordable studio apartment perfect for solo digital nomads. Recently renovated, fully furnished, walking distance to beach and coworking spaces. Great ROI potential.",
        property_8_title: "Family Villa with Private Pool",
        property_8_desc: "Spacious villa ideal for families or those wanting extra space. Private pool, home office, guest rooms, and large outdoor entertaining area. Quiet neighborhood, close to international schools.",
        
        // Price Ranges
        price_range_1: "Under $300k",
        price_range_2: "$300k - $500k",
        price_range_3: "$500k - $800k",
        price_range_4: "$800k+",
        
        // QoL Section
        qol_title: "Quality of Life in Brazilian Coast",
        qol_subtitle: "Why digital nomads are choosing Brazil's coastline",
        qol_safety: "Safety",
        qol_safety_desc: "Gated communities and 24/7 security",
        qol_cost: "Affordable Living",
        qol_cost_desc: "30-50% lower than US/Europe",
        qol_internet: "Fiber Internet",
        qol_internet_desc: "100-500 Mbps everywhere",
        qol_community: "Nomad Community",
        qol_community_desc: "Growing international community",
        qol_climate: "Perfect Climate",
        qol_climate_desc: "Year-round sunshine and warmth",
        qol_culture: "Rich Culture",
        qol_culture_desc: "Welcoming locals and vibrant culture",
        
        // Featured Properties Section
        featured_title: "Featured Properties",
        featured_subtitle: "Handpicked coastal paradises perfect for digital nomads",
        btn_view_all: "View All Properties",
        btn_portfolio: "Full Portfolio Showcase",
        
        // Quality of Life Section
        qol_main_title: "Why Brazil's Coast?",
        qol_main_subtitle: "Exceptional quality of life for digital nomads",
        qol_safe_title: "Safe Communities",
        qol_safe_desc: "Low crime rates in coastal neighborhoods with active expat communities",
        qol_affordable_title: "Affordable Living",
        qol_affordable_desc: "30-50% lower cost of living compared to North America or Europe",
        qol_internet_title: "Fast Internet",
        qol_internet_desc: "Fiber optic connections up to 1Gbps available in most areas",
        qol_community_title: "Vibrant Community",
        qol_community_desc: "Growing digital nomad and expat communities with networking events",
        qol_climate_title: "Perfect Climate",
        qol_climate_desc: "Mild temperatures year-round, endless beaches, and outdoor activities",
        qol_relocation_title: "Easy Relocation",
        qol_relocation_desc: "Friendly visa policies and welcoming culture for international buyers",
        featured_subtitle: "Handpicked homes for digital nomads",
        featured_view_all: "View All Properties",
        
        // Property Card
        property_bedrooms: "bedrooms",
        property_bathrooms: "bathrooms",
        property_from: "From",
        property_view_details: "View Details",
        property_save: "Save",
        property_share: "Share",
        
        // Success Stories
        stories_title: "Nomad Success Stories",
        stories_subtitle: "Real people living their dream coastal life",
        
        // Newsletter
        newsletter_title: "Stay Updated on New Properties",
        newsletter_subtitle: "Get exclusive listings and nomad life tips delivered to your inbox",
        newsletter_email_placeholder: "Enter your email",
        newsletter_placeholder: "Enter your email",
        newsletter_btn: "Subscribe",
        
        // CTA Section
        cta_title: "Ready to Find Your Coastal Paradise?",
        cta_subtitle: "Chat with us on WhatsApp and let's find your perfect property today",
        cta_btn_whatsapp: "Chat on WhatsApp",
        cta_btn_browse: "Browse Properties",
        cta_btn_schedule: "Schedule Video Call",
        
        // Footer
        footer_about: "Your trusted partner for coastal real estate in Southern Brazil. Helping digital nomads find their perfect home since 2024.",
        footer_explore: "Explore",
        footer_all_properties: "All Properties",
        footer_events: "Events & Travel",
        footer_how_to_buy: "How to Buy",
        footer_portfolio: "Portfolio",
        footer_resources: "Resources",
        footer_blog: "Blog",
        footer_guides: "Destination Guides",
        footer_hacks: "Nomad Life Hacks",
        footer_about_us: "About Us",
        footer_contact: "Contact",
        footer_copyright: "© 2024 CoastalNomad. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_about_title: "About CoastalNomad",
        footer_about_text: "Connecting digital nomads with their perfect coastal homes in Brazil.",
        footer_quick_links: "Quick Links",
        footer_support: "Support",
        footer_follow: "Follow Us",
        footer_rights: "All rights reserved.",
        
        // Properties Page
        properties_title: "Find Your Perfect Property",
        properties_subtitle: "Browse our curated selection of coastal homes",
        properties_filter_location: "Filter by Location",
        properties_filter_type: "Property Type",
        properties_filter_price: "Price Range",
        properties_filter_lifestyle: "Lifestyle",
        properties_filter_amenities: "Amenities",
        properties_clear_filters: "Clear All Filters",
        properties_results: "properties found",
        properties_showing: "Showing",
        properties_properties: "properties",
        amenities_label: "Amenities",
        amenity_fiber_internet: "Fiber Internet",
        amenity_coworking_nearby: "Coworking Nearby",
        amenity_beach_access: "Beach Access",
        amenity_pool_label: "Pool",
        amenity_gym_label: "Gym",
        properties_sort: "Sort by",
        properties_sort_newest: "Newest First",
        properties_sort_price_low: "Price: Low to High",
        properties_sort_price_high: "Price: High to Low",
        properties_view_grid: "Grid View",
        properties_view_list: "List View",
        properties_no_results: "No properties found",
        properties_no_results_desc: "Try adjusting your filters to see more results",
        properties_reset_filters: "Reset Filters",
        properties_cta_title: "Can't Find What You're Looking For?",
        properties_cta_subtitle: "Let us know your requirements and we'll find the perfect property for you",
        properties_cta_btn: "Tell Us What You Need",
        
        // Amenities
        amenity_fiber: "Fiber Internet",
        amenity_coworking: "Coworking",
        amenity_beach: "Beach Access",
        amenity_pool: "Pool",
        amenity_gym: "Gym",
        amenity_parking: "Parking",
        amenity_security: "24/7 Security",
        
        // Buttons
        btn_learn_more: "Learn More",
        btn_contact: "Contact",
        btn_back: "Back",
        btn_next: "Next",
        btn_close: "Close",
        
        // Common
        common_loading: "Loading...",
        common_error: "An error occurred",
        common_success: "Success!",
    },
    
    'pt-BR': {
        // Navigation
        nav_home: "Início",
        nav_properties: "Propriedades",
        nav_buying_process: "Como Comprar",
        nav_events: "Eventos & Viagens",
        nav_blog: "Blog",
        nav_about: "Sobre",
        
        // Hero Section
        hero_title_1: "Seu Paraíso Costeiro",
        hero_title_2: "Te Espera no Brasil",
        hero_tagline: "por Rodrigo Torrezan - Especialista em Imóveis para Nômades Digitais",
        hero_subtitle: "Propriedades premium para nômades digitais em Curitiba, Paraná e litoral de Santa Catarina. Trabalhe remotamente. Viva bem. Invista com inteligência.",
        hero_cta_demo: "Veja Como Rodrigo Te Ajuda",
        hero_search_title: "Encontre a Propriedade dos Seus Sonhos",
        hero_search_subtitle: "Busque entre 8+ propriedades premium no litoral",
        hero_search_location: "Localização",
        hero_search_location_all: "Todas as Localizações",
        hero_search_type: "Tipo de Imóvel",
        hero_search_type_all: "Todos os Tipos",
        hero_search_price: "Faixa de Preço",
        hero_search_price_all: "Qualquer Preço",
        hero_search_bedrooms: "Quartos",
        bedrooms_any: "Qualquer",
        hero_search_lifestyle: "Estilo de Vida",
        hero_search_lifestyle_all: "Todos os Estilos",
        hero_search_btn: "Buscar Propriedades",
        price_100k: "Até $100k",
        price_100k_250k: "$100k - $250k",
        price_250k_500k: "$250k - $500k",
        price_500k_plus: "$500k+",
        
        // Property Types
        type_apartment: "Apartamento",
        type_house: "Casa",
        type_condo: "Condomínio",
        type_land: "Terreno",
        
        // Locations
        location_curitiba: "Curitiba",
        location_florianopolis: "Florianópolis",
        location_balneario: "Balneário Camboriú",
        location_ilhadomel: "Ilha do Mel",
        location_guaratuba: "Guaratuba",
        
        // Lifestyle Tags
        lifestyle_beach: "Vida na Praia",
        lifestyle_mountain: "Clima de Montanha",
        lifestyle_urban: "Centro Urbano",
        lifestyle_wellness: "Bem-Estar",
        lifestyle_creative: "Comunidade Criativa",
        lifestyle_beach_emoji: "🏄 Vida na Praia",
        lifestyle_mountain_emoji: "🌲 Clima de Montanha",
        lifestyle_urban_emoji: "🏙️ Centro Urbano",
        lifestyle_wellness_emoji: "🧘 Bem-Estar",
        lifestyle_creative_emoji: "🎨 Comunidade Criativa",
        
        // Properties Page
        properties_title: "Encontre Sua Propriedade Perfeita",
        properties_subtitle: "Explore nossa seleção de propriedades costeiras projetadas para nômades digitais",
        properties_filters: "Filtros",
        properties_clear_filters: "Limpar Todos",
        
        // Events & Travel Page
        events_hero_title: "🌴 Guia de Eventos & Viagens",
        events_hero_subtitle: "Descubra eventos de tecnologia, planeje sua visita e explore o paraíso costeiro do Brasil com Rodrigo Torrezan",
        events_btn_view: "Ver Eventos Tech",
        events_btn_plan: "Planejar Sua Viagem",
        events_upcoming_title: "🚀 Próximos Eventos Tech",
        events_upcoming_subtitle: "Oportunidades perfeitas para combinar visitas a propriedades com networking profissional",
        events_btn_register: "Inscrever-se Agora",
        events_btn_view_props: "Ver Propriedades",
        events_properties_nearby: "propriedades próximas",
        events_property_nearby: "propriedade próxima",
        
        // Buying Process Page
        buying_hero_title: "🏡 Como Comprar Imóvel no Brasil",
        buying_hero_subtitle: "Seu guia completo passo a passo para comprar imóveis costeiros como nômade digital",
        buying_badge_legal: "Legal & Seguro",
        buying_badge_experience: "Anos de Experiência",
        buying_badge_rating: "Avaliação dos Clientes",
        buying_process_title: "O Processo Completo de Compra",
        buying_process_subtitle: "Do primeiro contato às chaves na mão - cada etapa explicada",
        buying_schedule_now: "Agendar Agora",
        buying_learn_more: "Saiba Mais",
        buying_step1_title: "Consulta Inicial",
        buying_step1_desc: "Vamos entender suas necessidades, orçamento e preferências de estilo de vida. Discutiremos seus objetivos e criaremos uma estratégia personalizada de busca de propriedades.",
        buying_step1_duration: "Duração:",
        buying_step1_duration_val: "30-60 minutos",
        buying_step1_format: "Formato:",
        buying_step1_format_val: "Videochamada ou presencial",
        buying_step1_cost: "Custo:",
        buying_step1_cost_val: "GRÁTIS",
        buying_step2_title: "Busca & Seleção de Propriedades",
        buying_step2_desc: "Vou curar uma seleção personalizada de propriedades que correspondem aos seus critérios. Você receberá informações detalhadas, fotos, vídeos e relatórios de qualidade de vida.",
        buying_step2_duration_val: "1-2 semanas",
        buying_step2_properties: "Propriedades:",
        buying_step2_properties_val: "5-10 opções curadas",
        buying_step2_updates: "Atualizações:",
        buying_step2_updates_val: "Diárias via WhatsApp",
        buying_browse_properties: "Navegar Propriedades",
        buying_step3_title: "Tours Virtuais ou Presenciais",
        buying_step3_desc: "Escolha entre tours em vídeo de alta qualidade ou visite as propriedades pessoalmente. Vou guiá-lo pessoalmente por cada propriedade, destacando características e respondendo todas as perguntas.",
        buying_step3_video: "Tours em Vídeo:",
        buying_step3_video_val: "Ao vivo via Zoom/WhatsApp",
        buying_step3_inperson: "Presencial:",
        buying_step3_inperson_val: "Roteiro de 2-3 dias",
        buying_step3_properties: "Propriedades:",
        buying_step3_properties_val: "3-5 por dia",
        buying_plan_visit: "Planejar Visita",
        buying_video_tour: "Tour Virtual",
        
        // Steps 4-8 Complete Details
        buying_step4_title: "Due Diligence & Documentação",
        buying_step4_desc: "Coordeno com advogados para verificar títulos de propriedade, verificar ônus, revisar contratos e garantir que tudo esteja legalmente correto. Seu investimento está protegido.",
        buying_step4_duration_val: "1-2 semanas",
        buying_step4_lawyer: "Advogado:",
        buying_step4_lawyer_val: "Incluído (bilíngue)",
        buying_step4_reports: "Relatórios:",
        buying_step4_reports_val: "Análise jurídica completa",
        
        buying_step5_title: "Oferta & Negociação",
        buying_step5_desc: "Vou ajudá-lo a criar uma oferta competitiva e negociar os melhores termos. Meu conhecimento do mercado local garante que você obtenha valor justo e condições favoráveis.",
        buying_step5_duration_val: "3-7 dias",
        buying_step5_communication: "Comunicação:",
        buying_step5_communication_val: "Atualizações em tempo real",
        buying_step5_strategy: "Estratégia:",
        buying_step5_strategy_val: "Abordagem baseada em dados",
        
        buying_step6_title: "Assinatura do Contrato",
        buying_step6_desc: "Uma vez acordados os termos, procedemos à assinatura formal do contrato. Todos os documentos são revisados pelo seu advogado e explicados em detalhes antes de você assinar.",
        buying_step6_duration_val: "1-3 dias",
        buying_step6_location: "Local:",
        buying_step6_location_val: "Cartório ou remoto",
        buying_step6_language: "Idioma:",
        buying_step6_language_val: "Português + tradução",
        
        buying_step7_title: "Pagamento & Transferência",
        buying_step7_desc: "Vou guiá-lo através de transferências internacionais, câmbio de moeda e cronogramas de pagamento. Múltiplas opções de pagamento disponíveis para atender suas necessidades.",
        buying_step7_currency: "Moeda:",
        buying_step7_currency_val: "USD, EUR ou BRL",
        buying_step7_methods: "Métodos:",
        buying_step7_methods_val: "Transferência, Wise, cripto",
        buying_step7_fees: "Taxas:",
        buying_step7_fees_val: "Detalhamento transparente",
        
        buying_step8_title: "Entrega da Propriedade",
        buying_step8_desc: "Parabéns! Inspeção final, entrega de chaves e boas-vindas ao seu novo paraíso costeiro. Vou ajudar com serviços públicos, configuração e apresentações locais.",
        buying_step8_celebration: "Celebração:",
        buying_step8_celebration_val: "Pacote de boas-vindas",
        buying_step8_checklist: "Checklist:",
        buying_step8_checklist_val: "Guia de mudança",
        buying_step8_support: "Suporte:",
        buying_step8_support_val: "Assistência contínua",
        buying_start_journey: "Comece Sua Jornada",
        
        // Buying Process - Additional sections
        buying_how_works_title: "Veja Como Funciona",
        buying_how_works_subtitle: "Experimente uma interação típica com Rodrigo",
        buying_start_simulation: "Iniciar Simulação",
        buying_reset: "Resetar",
        buying_engagement_title: "Como Rodrigo Mantém Você Engajado",
        buying_engagement_subtitle: "Estratégias inteligentes para garantir que você fique informado e animado durante todo o processo",
        buying_whatsapp_updates: "Atualizações 24/7 no WhatsApp",
        buying_whatsapp_desc: "Receba notificações em tempo real sobre novas propriedades, mudanças no mercado e atualizações do processo diretamente no WhatsApp.",
        buying_connect_now: "Conectar Agora",
        buying_video_checkins: "Check-ins em Vídeo Semanais",
        buying_video_checkins_desc: "Videochamadas regulares para revisar progresso, responder perguntas e ajustar sua estratégia de busca conforme necessário.",
        buying_schedule_call: "Agendar Ligação",
        buying_property_previews: "Prévias Virtuais de Propriedades",
        buying_property_previews_desc: "Receba vídeos e fotos exclusivos de propriedades antes de chegarem ao mercado. Acesso antecipado para compradores sérios.",
        buying_view_properties: "Ver Propriedades",
        buying_community_intros: "Apresentações à Comunidade",
        buying_community_desc: "Conecte-se com outros nômades digitais que já fizeram a mudança. Aprenda com suas experiências.",
        buying_read_stories: "Ler Histórias",
        buying_market_insights: "Relatórios de Insights de Mercado",
        buying_market_desc: "Relatórios mensais sobre tendências de mercado, movimentos de preços e oportunidades de investimento no litoral brasileiro.",
        buying_view_reports: "Ver Relatórios",
        buying_education_hub: "Hub de Educação do Comprador",
        buying_education_desc: "Acesse guias, webinars e recursos para ajudá-lo a entender o mercado imobiliário brasileiro.",
        buying_faq_title: "Perguntas Frequentes",
        buying_faq_subtitle: "Tudo que você precisa saber sobre comprar imóveis no Brasil",
        buying_faq_q1: "Estrangeiros podem comprar imóveis no Brasil?",
        buying_faq_q2: "Quais são os custos totais envolvidos?",
        buying_faq_q3: "Quanto tempo leva o processo?",
        buying_faq_q4: "Posso obter financiamento/hipoteca como estrangeiro?",
        buying_faq_q5: "Preciso de um advogado?",
        buying_faq_q6: "Preciso falar português?",
        buying_faq_q7: "Preciso visitar pessoalmente?",
        buying_faq_q8: "E quanto a impostos e residência?",
        buying_faq_q9: "Quão seguro é meu investimento?",
        buying_faq_q10: "Qual é o ROI e potencial de valorização?",
        buying_faq_q11: "Posso alugar meu imóvel?",
        buying_faq_q12: "O que acontece após a compra?",
        buying_ready_title: "Pronto para Começar Sua Jornada?",
        buying_ready_subtitle: "Vamos encontrar sua propriedade costeira perfeita no Brasil. Agende uma consulta gratuita e vamos discutir seus objetivos.",
        buying_start_consultation: "Iniciar Consulta Gratuita",
        
        // Blog Page
        blog_title: "Blog Vida Nômade",
        blog_subtitle: "Guias, dicas e histórias para nômades digitais vivendo no litoral do Brasil",
        blog_cat_all: "Todos os Posts",
        blog_cat_guides: "Guias de Destinos",
        blog_cat_hacks: "Dicas de Vida Nômade",
        blog_cat_stories: "Histórias de Sucesso",
        blog_cat_market: "Insights de Mercado",
        blog_cat_cultural: "Dicas Culturais",
        blog_featured_title: "O Guia Completo para Viver em Florianópolis como Nômade Digital",
        blog_featured_desc: "Descubra por que Floripa está se tornando o destino #1 para nômades digitais na América do Sul. Dos melhores bairros aos espaços de coworking, velocidades de internet e detalhamento de custos.",
        blog_read_time: "min de leitura",
        blog_read_article: "Ler Artigo",
        blog_read_more: "Leia Mais",
        
        // About Page
        about_hero_title: "Seu Parceiro em Encontrar o Paraíso",
        about_hero_subtitle: "Ajudando nômades digitais a descobrir sua casa costeira perfeita no Brasil desde 2010",
        about_mission_title: "Nossa Missão",
        about_stat_props: "Propriedades Vendidas",
        about_stat_countries: "Países Atendidos",
        about_stat_rating: "★ Avaliação Média",
        about_stat_years: "Anos de Experiência",
        about_mission_lead: "Acreditamos que onde você vive deve inspirar como você vive. Por isso, nos dedicamos a conectar nômades digitais com propriedades costeiras excepcionais nas regiões mais belas do Brasil.",
        about_mission_p1: "Há mais de uma década, nos especializamos em ajudar trabalhadores remotos, empreendedores e profissionais independentes de localização a encontrar seu equilíbrio perfeito entre trabalho e paraíso. Entendemos as necessidades únicas dos nômades digitais – internet confiável, ambientes inspiradores, comunidades vibrantes e oportunidades de investimento inteligentes.",
        about_mission_p2: "Nosso profundo conhecimento local, combinado com nossa perspectiva internacional, nos permite fornecer serviço incomparável a clientes de todo o mundo.",
        about_expert_title: "Conheça Seu Especialista",
        about_expert_subtitle: "Conhecimento local. Perspectiva internacional. Serviço dedicado.",
        about_rodrigo_position: "Fundador & Especialista em Propriedades Costeiras",
        about_story_title: "Minha História",
        about_story_p1: "Nascido e criado em Curitiba, passei toda a minha vida explorando as deslumbrantes regiões costeiras do Paraná e Santa Catarina. O que começou como uma paixão por imóveis evoluiu para uma vocação – ajudar pessoas de todo o mundo a descobrir a qualidade de vida excepcional que o litoral brasileiro oferece.",
        about_story_p2: "Depois de passar vários anos morando no exterior como nômade digital, voltei ao Brasil com uma compreensão única do que os trabalhadores remotos realmente precisam em uma casa. Internet rápida e confiável não é um luxo – é essencial. Uma comunidade vibrante importa tanto quanto uma vista bonita. E a propriedade certa não é apenas um lugar para morar; é um investimento no seu estilo de vida e futuro.",
        about_story_p3: "Hoje, lidero uma equipe dedicada que combina profunda expertise local com padrões internacionais de serviço. Não estamos apenas vendendo propriedades – estamos ajudando você a começar seu próximo capítulo.",
        about_credentials_title: "Credenciais & Experiência",
        about_chat_rodrigo: "Conversar com Rodrigo",
        about_send_email: "Enviar E-mail",
        
        // Property Detail Page
        property_back: "Voltar para Propriedades",
        property_bedrooms_label: "Quartos",
        property_bathrooms_label: "Banheiros",
        property_area_label: "m²",
        property_type_label: "Tipo",
        property_about_title: "Sobre Este Imóvel",
        property_qol_title: "Pontuação de Qualidade de Vida",
        property_qol_excellent: "Localização Excelente",
        property_qol_desc: "Esta área pontua alto para nômades digitais em todas as métricas chave",
        property_qol_safety: "Segurança",
        property_qol_safety_desc: "Baixa taxa de criminalidade, ruas bem iluminadas, vigilância comunitária ativa",
        property_qol_cost_living: "Custo de Vida",
        property_qol_cost_desc: "Refeições, supermercados e serviços acessíveis comparado a grandes cidades",
        property_qol_internet_speed: "Velocidade de Internet",
        property_qol_internet_desc: "Fibra óptica disponível, até 1Gbps, conexão estável",
        property_qol_community_label: "Comunidade",
        property_qol_community_desc: "Comunidade expat ativa, encontros regulares, eventos de coworking",
        property_qol_climate_label: "Clima",
        property_qol_climate_desc: "Temperaturas amenas o ano todo, dias ensolarados, estações agradáveis",
        property_amenities_title: "Comodidades & Características",
        property_location_title: "Localização & Próximo",
        property_poi_title: "Pontos de Interesse",
        property_calculator_title: "Calculadora de Custo de Vida",
        property_calculator_desc: "Compare o custo da sua cidade atual com morar aqui",
        property_calculator_current_city: "Sua Cidade Atual",
        property_calculator_select: "Selecione uma cidade",
        property_calculator_btn: "Calcular",
        property_faq_title: "Perguntas Frequentes",
        property_faq_q1: "Estrangeiros podem comprar imóveis no Brasil?",
        property_faq_a1: "Sim! Estrangeiros podem comprar imóveis no Brasil com restrições mínimas. Você precisará de um CPF, que podemos ajudá-lo a obter. O processo é direto e normalmente leva 30-60 dias.",
        property_faq_q2: "Quais são os custos mensais?",
        property_faq_a2: "Os custos mensais típicos incluem IPTU, taxas de condomínio (se aplicável), serviços públicos (eletricidade, água, internet) e manutenção. Para este imóvel, espere cerca de $200-400/mês em custos totais.",
        property_faq_q3: "A internet é confiável para trabalho remoto?",
        property_faq_a3: "Com certeza! Esta área tem internet de fibra óptica com velocidades de até 1Gbps. A maioria dos nômades digitais relata conexões estáveis perfeitas para videochamadas, streaming e transferência de arquivos grandes.",
        property_faq_q4: "Posso alugar este imóvel?",
        property_faq_a4: "Sim, renda de aluguel é permitida. Muitos proprietários alugam seus imóveis em plataformas como Airbnb ou longo prazo para outros expats. Podemos conectá-lo com serviços de gestão de propriedades se necessário.",
        property_faq_q5: "E quanto à saúde?",
        property_faq_a5: "O Brasil oferece excelente saúde privada a preços acessíveis. Hospitais e clínicas de qualidade estão próximos, e o seguro saúde privado custa cerca de $50-150/mês dependendo da cobertura.",
        property_price_label: "Preço",
        property_whatsapp_btn: "Conversar no WhatsApp",
        property_tour_btn: "Agendar Tour Virtual",
        property_guide_btn: "Baixar Guia do Imóvel",
        
        // Property Data (Dynamic Content)
        property_1_title: "Apartamento Frente Mar com Vista para o Oceano",
        property_1_desc: "Deslumbrante apartamento frente mar com vistas panorâmicas do oceano. Perfeito para nômades digitais que buscam inspiração e tranquilidade. Internet de fibra de alta velocidade, acabamentos modernos e a poucos passos de espaços de coworking.",
        property_2_title: "Loft Moderno no Centro de Curitiba",
        property_2_desc: "Loft contemporâneo no vibrante centro de Curitiba. Base urbana perfeita para nômades digitais que querem comodidades da cidade com acesso costeiro. Caminhada até restaurantes, cafés e locais culturais.",
        property_3_title: "Condomínio de Luxo em Balneário Camboriú",
        property_3_desc: "Condomínio de luxo em arranha-céu com vistas deslumbrantes do oceano. Comodidades modernas, piscina no rooftop e localização prime à beira-mar. Oportunidade de investimento na cidade costeira que mais cresce no Brasil.",
        property_4_title: "Casa de Praia Aconchegante em Guaratuba",
        property_4_desc: "Charmosa casa de praia perfeita para quem busca paz e natureza. Grande jardim, espaço de trabalho ao ar livre e a passos de praias intocadas. Ideal para profissionais criativos e famílias.",
        property_5_title: "Eco Lodge na Ilha do Mel",
        property_5_desc: "Paraíso off-grid para nômades digitais que buscam tranquilidade máxima. Energia solar, coleta de água da chuva, cercado pela Mata Atlântica. Acesso limitado de carros mantém ambiente intocado.",
        property_6_title: "Cobertura com Vista Panorâmica da Baía",
        property_6_desc: "Cobertura espetacular oferecendo vistas 360º da baía de Florianópolis e montanhas. Acabamentos premium, terraço privativo e serviço de concierge. Máximo luxo em vida costeira.",
        property_7_title: "Estúdio Moderno Perto da Praia",
        property_7_desc: "Estúdio acessível perfeito para nômades digitais solo. Recentemente renovado, totalmente mobiliado, distância de caminhada para praia e espaços de coworking. Ótimo potencial de ROI.",
        property_8_title: "Vila Familiar com Piscina Privativa",
        property_8_desc: "Vila espaçosa ideal para famílias ou quem quer espaço extra. Piscina privativa, escritório em casa, quartos de hóspedes e grande área de entretenimento ao ar livre. Bairro tranquilo, perto de escolas internacionais.",
        
        // Price Ranges
        price_range_1: "Até $300 mil",
        price_range_2: "$300 mil - $500 mil",
        price_range_3: "$500 mil - $800 mil",
        price_range_4: "$800 mil+",
        
        // QoL Section
        qol_title: "Qualidade de Vida no Litoral Brasileiro",
        qol_subtitle: "Por que nômades digitais estão escolhendo o litoral do Brasil",
        qol_safety: "Segurança",
        qol_safety_desc: "Condomínios fechados e segurança 24/7",
        qol_cost: "Custo de Vida",
        qol_cost_desc: "30-50% menor que EUA/Europa",
        qol_internet: "Internet Fibra",
        qol_internet_desc: "100-500 Mbps em todos os lugares",
        qol_community: "Comunidade Nômade",
        qol_community_desc: "Comunidade internacional crescente",
        qol_climate: "Clima Perfeito",
        qol_climate_desc: "Sol e calor o ano todo",
        qol_culture: "Cultura Rica",
        qol_culture_desc: "Pessoas acolhedoras e cultura vibrante",
        
        // Featured Properties Section
        featured_title: "Propriedades em Destaque",
        featured_subtitle: "Paraísos costeiros selecionados perfeitos para nômades digitais",
        featured_view_all: "Ver Todas as Propriedades",
        btn_view_all: "Ver Todas as Propriedades",
        btn_portfolio: "Portfólio Completo",
        
        // Quality of Life Section
        qol_main_title: "Por Que o Litoral do Brasil?",
        qol_main_subtitle: "Qualidade de vida excepcional para nômades digitais",
        qol_safe_title: "Comunidades Seguras",
        qol_safe_desc: "Baixas taxas de criminalidade em bairros costeiros com comunidades expat ativas",
        qol_affordable_title: "Custo Acessível",
        qol_affordable_desc: "30-50% menor custo de vida comparado à América do Norte ou Europa",
        qol_internet_title: "Internet Rápida",
        qol_internet_desc: "Conexões de fibra óptica de até 1Gbps disponíveis na maioria das áreas",
        qol_community_title: "Comunidade Vibrante",
        qol_community_desc: "Comunidades crescentes de nômades digitais e expats com eventos de networking",
        qol_climate_title: "Clima Perfeito",
        qol_climate_desc: "Temperaturas amenas o ano todo, praias infinitas e atividades ao ar livre",
        qol_relocation_title: "Fácil Relocação",
        qol_relocation_desc: "Políticas de visto amigáveis e cultura acolhedora para compradores internacionais",
        
        // Property Card
        property_bedrooms: "quartos",
        property_bathrooms: "banheiros",
        property_from: "A partir de",
        property_view_details: "Ver Detalhes",
        property_save: "Salvar",
        property_share: "Compartilhar",
        
        // Success Stories
        stories_title: "Histórias de Sucesso de Nômades",
        stories_subtitle: "Pessoas reais vivendo seus sonhos de vida costeira",
        
        // Newsletter
        newsletter_title: "Receba Atualizações sobre Novas Propriedades",
        newsletter_subtitle: "Receba listagens exclusivas e dicas de vida nômade direto na sua caixa de entrada",
        newsletter_email_placeholder: "Digite seu e-mail",
        newsletter_placeholder: "Digite seu email",
        newsletter_btn: "Inscrever-se",
        
        // CTA Section
        cta_title: "Pronto para Encontrar Seu Paraíso Costeiro?",
        cta_subtitle: "Converse conosco no WhatsApp e vamos encontrar sua propriedade perfeita hoje",
        cta_btn_whatsapp: "Conversar no WhatsApp",
        cta_btn_browse: "Navegar pelas Propriedades",
        cta_btn_schedule: "Agendar Videochamada",
        
        // Footer
        footer_about: "Seu parceiro confiável para imóveis costeiros no Sul do Brasil. Ajudando nômades digitais a encontrar seu lar perfeito desde 2024.",
        footer_explore: "Explorar",
        footer_all_properties: "Todas as Propriedades",
        footer_events: "Eventos & Viagens",
        footer_how_to_buy: "Como Comprar",
        footer_portfolio: "Portfólio",
        footer_resources: "Recursos",
        footer_blog: "Blog",
        footer_guides: "Guias de Destinos",
        footer_hacks: "Dicas de Vida Nômade",
        footer_about_us: "Sobre Nós",
        footer_contact: "Contato",
        footer_copyright: "© 2024 CoastalNomad. Todos os direitos reservados.",
        footer_privacy: "Política de Privacidade",
        footer_terms: "Termos de Serviço",
        footer_about_title: "Sobre CoastalNomad",
        footer_about_text: "Conectando nômades digitais com suas casas costeiras perfeitas no Brasil.",
        footer_quick_links: "Links Rápidos",
        footer_support: "Suporte",
        footer_follow: "Siga-nos",
        footer_rights: "Todos os direitos reservados.",
        
        // Properties Page
        properties_title: "Encontre Sua Propriedade Perfeita",
        properties_subtitle: "Navegue por nossa seleção de casas costeiras",
        properties_filter_location: "Filtrar por Localização",
        properties_filter_type: "Tipo de Imóvel",
        properties_filter_price: "Faixa de Preço",
        properties_filter_lifestyle: "Estilo de Vida",
        properties_filter_amenities: "Comodidades",
        properties_clear_filters: "Limpar Todos os Filtros",
        properties_results: "propriedades encontradas",
        properties_showing: "Mostrando",
        properties_properties: "propriedades",
        amenities_label: "Comodidades",
        amenity_fiber_internet: "Internet Fibra",
        amenity_coworking_nearby: "Coworking Próximo",
        amenity_beach_access: "Acesso à Praia",
        amenity_pool_label: "Piscina",
        amenity_gym_label: "Academia",
        properties_sort: "Ordenar por",
        properties_sort_newest: "Mais Recentes",
        properties_sort_price_low: "Preço: Menor para Maior",
        properties_sort_price_high: "Preço: Maior para Menor",
        properties_view_grid: "Visualização em Grade",
        properties_view_list: "Visualização em Lista",
        properties_no_results: "Nenhuma propriedade encontrada",
        properties_no_results_desc: "Tente ajustar seus filtros para ver mais resultados",
        properties_reset_filters: "Resetar Filtros",
        properties_cta_title: "Não Encontrou o Que Procura?",
        properties_cta_subtitle: "Nos diga suas necessidades e encontraremos a propriedade perfeita para você",
        properties_cta_btn: "Diga-nos o Que Você Precisa",
        
        // Amenities
        amenity_fiber: "Internet Fibra",
        amenity_coworking: "Coworking",
        amenity_beach: "Acesso à Praia",
        amenity_pool: "Piscina",
        amenity_gym: "Academia",
        amenity_parking: "Estacionamento",
        amenity_security: "Segurança 24/7",
        
        // Buttons
        btn_learn_more: "Saiba Mais",
        btn_contact: "Fale Conosco",
        btn_back: "Voltar",
        btn_next: "Próximo",
        btn_close: "Fechar",
        
        // Common
        common_loading: "Carregando...",
        common_error: "Ocorreu um erro",
        common_success: "Sucesso!",
    }
};

/**
 * i18n Manager Class
 */
class I18nManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || this.detectBrowserLanguage();
        this.init();
    }
    
    init() {
        // Apply language on load
        this.applyLanguage(this.currentLanguage);
        
        // Listen for language changes
        document.addEventListener('languageChanged', (e) => {
            this.applyLanguage(e.detail.language);
        });
    }
    
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('pt')) {
            return 'pt-BR';
        }
        return 'en';
    }
    
    getStoredLanguage() {
        return localStorage.getItem('preferred_language');
    }
    
    setLanguage(lang) {
        console.log(`🌐 Setting language to: ${lang}`);
        this.currentLanguage = lang;
        localStorage.setItem('preferred_language', lang);
        this.applyLanguage(lang);
        
        // Dispatch event
        const event = new CustomEvent('languageChanged', {
            detail: { language: lang }
        });
        document.dispatchEvent(event);
        console.log(`✅ Language changed to: ${lang}`);
    }
    
    applyLanguage(lang) {
        console.log(`📝 Applying language: ${lang}`);
        
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        console.log(`📝 Translating ${elements.length} elements`);
        let translated = 0;
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key, lang);
            
            if (translation) {
                // Check if element has icon children that should be preserved
                const icons = element.querySelectorAll('i, svg');
                
                if (icons.length > 0 && element.tagName !== 'OPTION') {
                    // Element has icons - preserve them
                    // Find text nodes and update only them
                    const childNodes = Array.from(element.childNodes);
                    childNodes.forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                            node.textContent = ' ' + translation;
                        }
                    });
                } else {
                    // Simple element - just update textContent
                    element.textContent = translation;
                }
                
                translated++;
            }
        });
        
        console.log(`✅ Translated ${translated} elements`);
        
        // Update placeholder attributes
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.translate(key, lang);
            if (translation) {
                element.setAttribute('placeholder', translation);
            }
        });
        
        // Update title attributes (tooltips)
        const titleElements = document.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = this.translate(key, lang);
            if (translation) {
                element.setAttribute('title', translation);
            }
        });
        
        // Update language selector
        this.updateLanguageSelector(lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
    
    translate(key, lang = null) {
        const language = lang || this.currentLanguage;
        if (translations[language] && translations[language][key]) {
            return translations[language][key];
        }
        // Fallback to English
        if (translations['en'] && translations['en'][key]) {
            return translations['en'][key];
        }
        return key;
    }
    
    updateLanguageSelector(lang) {
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.value = lang;
        }
        
        // Update flag icons if they exist
        const flags = document.querySelectorAll('.language-flag');
        flags.forEach(flag => {
            if (flag.dataset.lang === lang) {
                flag.classList.add('active');
            } else {
                flag.classList.remove('active');
            }
        });
    }
}

// Initialize i18n when DOM is ready
let i18nManager;

function initializeI18n() {
    console.log('🌍 Initializing i18n system...');
    i18nManager = new I18nManager();
    
    // Make it globally accessible
    window.i18nManager = i18nManager;
    
    // Setup language selector
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            i18nManager.setLanguage(e.target.value);
        });
        console.log('✅ Language selector initialized');
    }
    
    // Setup flag buttons
    const languageFlags = document.querySelectorAll('.language-flag');
    console.log(`🚩 Found ${languageFlags.length} language flags`);
    
    if (languageFlags.length === 0) {
        console.warn('⚠️ No language flags found! Check HTML structure.');
    }
    
    languageFlags.forEach((flag, index) => {
        console.log(`  → Flag ${index + 1}: data-lang="${flag.dataset.lang}"`);
        
        flag.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = flag.dataset.lang;
            console.log(`🔄 Switching to language: ${lang}`);
            
            if (i18nManager && typeof i18nManager.setLanguage === 'function') {
                i18nManager.setLanguage(lang);
            } else {
                console.error('❌ i18nManager.setLanguage is not available!');
            }
        });
    });
    
    console.log('✅ i18n system initialized successfully');
    console.log(`   Current language: ${i18nManager.currentLanguage}`);
}

// Try multiple initialization methods to ensure it works
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeI18n);
} else {
    // DOM is already loaded
    initializeI18n();
}

// Also try after window load as fallback
window.addEventListener('load', () => {
    if (!window.i18nManager) {
        console.warn('⚠️ i18n not initialized on DOMContentLoaded, trying again...');
        initializeI18n();
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, I18nManager };
}
