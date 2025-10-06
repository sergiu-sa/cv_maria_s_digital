/**
 * Maria Sarbu - Personal Resume Website
 * Main JavaScript File
 */

// ===================================
// DOM ELEMENTS
// ===================================
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');
const navLinksContainer = document.getElementById('navLinks');
const mobileToggle = document.getElementById('mobileToggle');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const backToTop = document.getElementById('backToTop');
const scrollProgress = document.getElementById('scrollProgress');
const sections = document.querySelectorAll('section[id]');
const hero = document.getElementById('hero');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

// ===================================
// SCROLL PROGRESS BAR
// ===================================
function updateScrollProgress() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
    scrollProgress.setAttribute('aria-valuenow', Math.round(scrolled));
}

// ===================================
// NAVIGATION VISIBILITY
// ===================================
let lastScroll = 0;
function handleNavigation() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 300) {
        mainNav.classList.add('visible');
    } else {
        mainNav.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================
function toggleMobileMenu() {
    const isActive = navLinksContainer.classList.toggle('active');
    mobileToggle.setAttribute('aria-expanded', isActive);
    mobileToggle.querySelector('span').textContent = isActive ? '✕' : '☰';
}

function closeMobileMenu() {
    navLinksContainer.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.querySelector('span').textContent = '☰';
}

// ===================================
// ACTIVE NAV LINK ON SCROLL
// ===================================
function updateActiveLink() {
    const scrollPos = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// INTERSECTION OBSERVER FOR SECTIONS
// ===================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// ===================================
// HERO FADE ON SCROLL
// ===================================
function fadeHeroOnScroll() {
    if (!hero) return;
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;
    const opacity = 1 - (scrolled / heroHeight) * 0.5;
    hero.style.opacity = Math.max(opacity, 0.5);
}

// ===================================
// BACK TO TOP BUTTON
// ===================================
function toggleBackToTop() {
    if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===================================
// DARK/LIGHT THEME TOGGLE
// ===================================
function initializeTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-pressed', currentTheme === 'dark');
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-pressed', newTheme === 'dark');
}

// ===================================
// SMOOTH SCROLL WITH OFFSET
// ===================================
function smoothScrollToSection(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#' || !targetId.startsWith('#')) return;
    
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        const navHeight = mainNav.offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        closeMobileMenu();
    }
}

// ===================================
// CONTACT FORM VALIDATION & SUBMISSION
// ===================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.textContent = '';
    }
}

function clearAllErrors() {
    ['name', 'email', 'message'].forEach(clearError);
}

function showFormStatus(type, message) {
    formStatus.className = `form-status ${type}`;
    formStatus.textContent = message;
    formStatus.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

function validateForm() {
    clearAllErrors();
    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name) {
        showError('name', 'Le nom est requis');
        isValid = false;
    }
    
    if (!email) {
        showError('email', 'L\'email est requis');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Veuillez entrer un email valide');
        isValid = false;
    }
    
    if (!message) {
        showError('message', 'Le message est requis');
        isValid = false;
    } else if (message.length < 10) {
        showError('message', 'Le message doit contenir au moins 10 caractères');
        isValid = false;
    }
    
    return isValid;
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    formStatus.style.display = 'none';
    
    try {
        // Submit to Formspree
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showFormStatus('success', 'Merci ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.');
            contactForm.reset();
        } else {
            throw new Error('Erreur lors de l\'envoi');
        }
    } catch (error) {
        showFormStatus('error', 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.');
    } finally {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

// Real-time validation
function setupRealtimeValidation() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    nameInput.addEventListener('blur', () => {
        if (!nameInput.value.trim()) {
            showError('name', 'Le nom est requis');
        } else {
            clearError('name');
        }
    });
    
    emailInput.addEventListener('blur', () => {
        const email = emailInput.value.trim();
        if (!email) {
            showError('email', 'L\'email est requis');
        } else if (!validateEmail(email)) {
            showError('email', 'Veuillez entrer un email valide');
        } else {
            clearError('email');
        }
    });
    
    messageInput.addEventListener('blur', () => {
        const message = messageInput.value.trim();
        if (!message) {
            showError('message', 'Le message est requis');
        } else if (message.length < 10) {
            showError('message', 'Le message doit contenir au moins 10 caractères');
        } else {
            clearError('message');
        }
    });
}

// ===================================
// SCROLL EVENT HANDLER (OPTIMIZED)
// ===================================
let ticking = false;
function handleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateScrollProgress();
            handleNavigation();
            updateActiveLink();
            toggleBackToTop();
            fadeHeroOnScroll();
            ticking = false;
        });
        ticking = true;
    }
}

// ===================================
// EVENT LISTENERS
// ===================================
function initializeEventListeners() {
    // Scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Mobile menu
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScrollToSection);
    });
    
    // Back to top button
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
    }
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        setupRealtimeValidation();
    }
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (!anchor.classList.contains('nav-link')) {
            anchor.addEventListener('click', smoothScrollToSection);
        }
    });
}

// ===================================
// INITIALIZATION
// ===================================
function init() {
    // Initialize theme
    initializeTheme();
    
    // Set up event listeners
    initializeEventListeners();
    
    // Initial scroll position check
    handleScroll();
    
    // Make hero immediately visible
    if (hero) {
        hero.style.opacity = '1';
    }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===================================
// KEYBOARD ACCESSIBILITY
// ===================================
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navLinksContainer.classList.contains('active')) {
        closeMobileMenu();
    }
    
    // Scroll to top on Home key
    if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();
        scrollToTop();
    }
});