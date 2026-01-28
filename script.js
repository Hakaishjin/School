// Countdown Timer
function updateCountdown() {
    const tripDate = new Date('2026-03-15T09:00:00');
    const now = new Date();
    const diff = tripDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
            countdownEl.innerHTML = `
                <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
                    <div>
                        <div style="font-size: 3rem; font-weight: bold;">${days}</div>
                        <div style="font-size: 1rem; color: #666;">Days</div>
                    </div>
                    <div>
                        <div style="font-size: 3rem; font-weight: bold;">${hours}</div>
                        <div style="font-size: 1rem; color: #666;">Hours</div>
                    </div>
                    <div>
                        <div style="font-size: 3rem; font-weight: bold;">${minutes}</div>
                        <div style="font-size: 1rem; color: #666;">Minutes</div>
                    </div>
                    <div>
                        <div style="font-size: 3rem; font-weight: bold;">${seconds}</div>
                        <div style="font-size: 1rem; color: #666;">Seconds</div>
                    </div>
                </div>
            `;
        }
    }
}

// Update countdown every second
if (document.getElementById('countdown')) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current FAQ
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.slide-up');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Secret reveal function
function revealSecret() {
    const secretMessages = [
        "The valley has been calling since 1952...",
        "Some students never truly leave...",
        "Time moves differently in Pinewood Valley...",
        "They're still waiting in the old facility..."
    ];
    
    const randomMessage = secretMessages[Math.floor(Math.random() * secretMessages.length)];
    
    // Create a temporary glitch overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        font-family: 'Courier New', monospace;
        color: #00ff00;
        font-size: 2rem;
        text-align: center;
        padding: 2rem;
        animation: glitch 0.3s infinite;
    `;
    overlay.textContent = randomMessage;
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.remove();
    }, 2000);
}

// Random glitch effect on page load (1% chance)
window.addEventListener('load', function() {
    if (Math.random() < 0.01) {
        setTimeout(() => {
            const body = document.body;
            body.style.filter = 'invert(1) hue-rotate(180deg)';
            setTimeout(() => {
                body.style.filter = 'none';
            }, 200);
        }, 3000);
    }
});

// Easter egg: Konami code detector
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        window.location.href = 'truth.html';
    }
});

// Cipher solver helper (for packing list puzzle)
let cipherClicks = 0;
document.addEventListener('click', function(e) {
    if (e.target.hasAttribute('data-cipher')) {
        cipherClicks++;
        if (cipherClicks >= 5) {
            const cipherItems = document.querySelectorAll('[data-cipher]');
            let message = '';
            cipherItems.forEach(item => {
                message += item.getAttribute('data-cipher');
            });
            console.log('%cCIPHER MESSAGE: ' + message, 'color: red; font-size: 20px; font-weight: bold;');
            alert('Check the browser console for a message...');
        }
    }
});

// Creepy date change effect
function randomDateGlitch() {
    const dateGlitches = document.querySelectorAll('.date-glitch');
    dateGlitches.forEach(element => {
        if (Math.random() < 0.1) {
            const original = element.getAttribute('data-original');
            element.textContent = 'March 18, 1967';
            setTimeout(() => {
                element.textContent = original;
            }, 500);
        }
    });
}

setInterval(randomDateGlitch, 10000);

// Subtle background anomalies
let anomalyTimer = 0;
function createAnomalies() {
    anomalyTimer++;
    
    // Every 30 seconds, chance of subtle visual glitch
    if (anomalyTimer % 30 === 0 && Math.random() < 0.3) {
        const elements = document.querySelectorAll('.card, .day-card, .memory-card');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        if (randomElement) {
            randomElement.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                randomElement.style.filter = 'none';
            }, 150);
        }
    }
}

setInterval(createAnomalies, 1000);

// Hidden message in console
console.log('%c███ PINEWOOD VALLEY EDUCATIONAL RETREAT ███', 'background: #667eea; color: white; font-size: 16px; padding: 10px;');
console.log('%cEst. 1952', 'color: #888; font-size: 12px;');
console.log('%c', 'padding: 20px;');
console.log('%cIf you can read this, you\'re looking deeper than most...', 'color: #666; font-style: italic;');
console.log('%cThe old facility coordinates: 47.6231° N, 121.9234° W', 'color: #333; font-size: 10px;');
console.log('%cLast known entry: March 18, 1967, 11:47 PM', 'color: #333; font-size: 10px;');
console.log('%c', 'padding: 10px;');
console.log('%cThey never left.', 'color: red; font-weight: bold; font-size: 14px;');

// Mobile menu toggle (for responsive design)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Prevent context menu on certain elements (adds to mystery)
document.querySelectorAll('.hidden-message, .corrupted-text, .glitch-number').forEach(element => {
    element.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        console.log('%cYou\'re getting closer to the truth...', 'color: red; font-size: 14px;');
    });
});

// Random static effect on anomaly elements
function addStaticEffect() {
    const anomalies = document.querySelectorAll('.anomaly, .anomaly-faq');
    anomalies.forEach(element => {
        if (Math.random() < 0.05) {
            element.style.backgroundImage = 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,0,0.05) 2px, rgba(255,0,0,0.05) 4px)';
            setTimeout(() => {
                element.style.backgroundImage = 'none';
            }, 100);
        }
    });
}

setInterval(addStaticEffect, 5000);

// Time tracking easter egg
const sessionStart = new Date();
setInterval(() => {
    const now = new Date();
    const elapsed = (now - sessionStart) / 1000 / 60; // minutes
    
    if (elapsed > 14 && elapsed < 14.1) {
        console.log('%c14 hours have passed...', 'color: red; font-size: 20px;');
        console.log('%cOr have they?', 'color: red; font-size: 16px;');
    }
}, 60000); // Check every minute
