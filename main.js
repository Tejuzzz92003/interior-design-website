// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// AI Upload Functionality
const fileInput = document.getElementById('fileInput');
const aiSuggestions = document.getElementById('aiSuggestions');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            // Simulate AI processing
            setTimeout(() => {
                aiSuggestions.innerHTML = `
                    <div class="suggestion-card active">
                        <h4>✅ AI Analysis Complete!</h4>
                        <p>Your living room is perfect for Modern Minimalist design</p>
                        <div class="color-palette">
                            <div class="color" style="background: #f8f9fa;"></div>
                            <div class="color" style="background: #2c3e50;"></div>
                            <div class="color" style="background: #e74c3c;"></div>
                        </div>
                        <button class="cta-btn primary" style="margin-top: 1rem; width: 100%;">
                            Apply This Design
                        </button>
                    </div>
                `;
            }, 2000);
        };
        reader.readAsDataURL(file);
    }
});

// Cost Estimator
function calculateCost() {
    const roomType = document.getElementById('roomType').value;
    const roomSize = parseInt(document.getElementById('roomSize').value);
    const budget = document.getElementById('budget').value;
    
    if (!roomSize) {
        alert('Please enter room size');
        return;
    }
    
    const rates = {
        economy: 8,
        standard: 15,
        premium: 30,
        luxury: 50
    };
    
    const baseCost = roomSize * rates[budget];
    const totalCost = Math.round(baseCost * 1.2); // 20% additional charges
    
    const costResult = document.getElementById('costResult');
    costResult.innerHTML = `
        <div style="font-size: 2rem; color: #2ecc71;">
            ₹${totalCost.toLocaleString()} 
            <span style="font-size: 1rem;">(incl. taxes & materials)</span>
        </div>
        <p style="margin-top: 1rem; opacity: 0.9;">
            ${roomType.toUpperCase()} - ${budget.toUpperCase()} Package
        </p>
    `;
    
    costResult.style.display = 'block';
}

// Chatbot Functionality
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const chatbot = document.getElementById('chatbot');

let chatResponses = {
    'cost': "Our interior design costs start from ₹8/sqft for economy packages up to ₹50+/sqft for luxury designs. Use our Cost Estimator tool above! 💰",
    'kitchen': "Kitchen interior design starts at ₹15/sqft. Popular modular designs with premium fittings. Use the cost estimator for exact pricing! 🍳",
    '2bhk': "Complete 2BHK interior design packages start from ₹3.5 lakhs onwards depending on materials and specifications. 🏠",
    'book': "Click the 'Book Consultation' section below to schedule your free AI design consultation! 📅",
    'hello': "Hi there! I'm your AI Design Assistant. Ask me about pricing, services, or booking! 😊",
    'services': "We offer AI Design Consultation, Cost Estimation, 3D Visualization, and Complete Interior Solutions! ✨"
};

function toggleChatbot() {
    chatbot.classList.toggle('active');
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Simulate typing
    setTimeout(() => {
        const response = getAIResponse(message.toLowerCase());
        addMessage(response, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(message) {
    for (let key in chatResponses) {
        if (message.includes(key)) {
            return chatResponses[key];
        }
    }
    return "That's a great question! For detailed information, please use our cost estimator or book a consultation. How else can I assist you? 🤖";
}

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Booking Form
document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        date: document.getElementById('date').value
    };
    
    // Simulate booking success
    alert(`✅ Appointment booked successfully!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nDate: ${formData.date}\n\nOur team will contact you soon!`);
    
    // Reset form
    document.getElementById('bookingForm').reset();
});

// Chatbot toggle button (add this to HTML if needed)
document.addEventListener('DOMContentLoaded', () => {
    // Set minimum date to today
    document.getElementById('date').min = new Date().toISOString().split('T')[0];
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Typing effect for hero
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-content h1');
    typeWriter(heroTitle, 'Transform Your Space with AI-Powered Design');
});