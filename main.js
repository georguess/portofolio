// main.js - Core functionality

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Fade in animation on scroll using Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // 2. Typing effect for hero title
  const titleElement = document.querySelector('.hero-title');
  if (titleElement) {
    const textToType = titleElement.getAttribute('data-text') || titleElement.textContent;
    titleElement.textContent = '';
    
    let charIndex = 0;
    
    setTimeout(() => {
      const typingInterval = setInterval(() => {
        titleElement.textContent += textToType[charIndex++];
        if (charIndex >= textToType.length) {
          clearInterval(typingInterval);
        }
      }, 50);
    }, 300); // 300ms delay before start
  }

});

// 3. Contact Form Handler (exposed globally for the onclick attribute)
window.handleContact = function(event) {
  if (event) event.preventDefault();
  
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const msgInput = document.getElementById('contact-message');
  
  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const msg = msgInput ? msgInput.value.trim() : '';
  
  if (!name || !email || !msg) {
    alert('Mohon isi semua form dengan lengkap sebelum mengirim pesan.');
    return;
  }
  
  // Build mailto URI
  const subject = encodeURIComponent(`Portfolio Contact dari ${name}`);
  const body = encodeURIComponent(`${msg}\n\n---\nDari: ${name}\nEmail: ${email}`);
  
  window.location.href = `mailto:mfadhelsaputra2@gmail.com?subject=${subject}&body=${body}`;
};
