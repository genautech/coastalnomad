// About Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
    setupScheduleCall();
});

// Setup Contact Form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                interest: document.getElementById('interest').value,
                message: document.getElementById('message').value
            };
            
            // In a real application, this would send data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert(`Thank you, ${formData.name}! We've received your message and will get back to you within 24 hours at ${formData.email}.`);
            
            // Reset form
            contactForm.reset();
            
            // Alternatively, could redirect to WhatsApp
            // const whatsappMessage = `Hi! I'm ${formData.name}. ${formData.message}`;
            // window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        });
    }
}

// Setup Schedule Call Button
function setupScheduleCall() {
    const scheduleCallBtn = document.getElementById('scheduleCallBtn');
    
    if (scheduleCallBtn) {
        scheduleCallBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // In a real application, this would open a calendar scheduling tool
            // For now, redirect to WhatsApp
            const message = "Hi! I'd like to schedule a video call to discuss coastal properties.";
            window.open(`https://wa.me/5541999999999?text=${encodeURIComponent(message)}`, '_blank');
        });
    }
}

// Animate stats on scroll
const observerOptions = {
    threshold: 0.5
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statCards = entry.target.querySelectorAll('.stat-card');
            statCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const missionStats = document.querySelector('.mission-stats');
    if (missionStats) {
        const statCards = missionStats.querySelectorAll('.stat-card');
        statCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        statsObserver.observe(missionStats);
    }
});