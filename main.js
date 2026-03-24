document.addEventListener('DOMContentLoaded', () => {
  // Simple Intersection Observer to fade elements in when scrolling into view
  const fadeElements = document.querySelectorAll('.fade-up');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => {
    observer.observe(el);
  });
});

window.copyBTC = function() {
  const address = 'bc1qw968re5gseqpkk5nx0ezqrp6dfhd20s8sll4k7';
  navigator.clipboard.writeText(address).then(() => {
    const btn = document.getElementById('copy-btn');
    const originalText = btn.innerHTML;
    
    // Get localized copied text if available, fallback to hardcoded
    const copiedText = window.miniappI18n ? window.miniappI18n.t('app.btn_copied') : 'Copied!';
    
    btn.innerHTML = `<span data-i18n="app.btn_copied">${copiedText}</span>`;
    btn.classList.add('bg-green-500/20', 'text-green-400', 'border-green-500/50');
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.remove('bg-green-500/20', 'text-green-400', 'border-green-500/50');
    }, 2000);
  });
};
