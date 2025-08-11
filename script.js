// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
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

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Interactive project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
});

// Skill cards animation
document.querySelectorAll('.skill-card').forEach((card, index) => {
    const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)', 'var(--purple-accent)', 'var(--orange-accent)', 'var(--primary-color)'];
    
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
        this.style.background = `linear-gradient(135deg, ${colors[index]}, ${colors[(index + 1) % colors.length]})`;
        this.style.color = 'white';
        this.style.boxShadow = 'var(--glow), var(--shadow)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.background = 'white';
        this.style.color = 'var(--text-primary)';
        this.style.boxShadow = 'var(--shadow)';
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Animate submit button
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent! ✅';
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'var(--gradient)';
            this.reset();
        }, 2000);
    }, 1500);
});

// Floating shapes animation
document.querySelectorAll('.shape').forEach(shape => {
    setInterval(() => {
        shape.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
    }, 3000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Type writer effect for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(type, 1000);
}

// Initialize typewriter effect
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    const originalText = subtitle.textContent;
    typeWriter(subtitle, originalText, 50);
});