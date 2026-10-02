// -------------------------------------------------
// Nikhillesh Bhatkar Learning Academy — Scripts
// -------------------------------------------------

/* Update the copyright year automatically */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Hide gallery placeholder if real images loaded
  const galleryGrid = document.querySelector('.gallery-grid');
  const placeholder = document.getElementById('galleryPlaceholder');
  if (galleryGrid && placeholder) {
    const imgs = galleryGrid.querySelectorAll('img');
    let loaded = 0;
    let failed = 0;

    imgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        loaded++;
      } else {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded > 0) placeholder.style.display = 'none';
        });
        img.addEventListener('error', () => {
          failed++;
          img.style.display = 'none';
          if (failed === imgs.length) {
            galleryGrid.style.display = 'none';
            placeholder.style.display = 'block';
          }
        });
      }
    });

    if (loaded > 0) placeholder.style.display = 'none';
    if (loaded === 0 && imgs.length === 0) placeholder.style.display = 'block';
  }
});

/* Contact form — Formspree submission */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const action = contactForm.getAttribute('action');

    // If Formspree not yet configured, show setup instructions
    if (action.includes('YOUR_FORMSPREE_ID')) {
      e.preventDefault();
      alert(
        'Contact form is not yet connected to Formspree.\n\n' +
        'To set it up:\n' +
        '1. Go to https://formspree.io\n' +
        '2. Create a free account and a new form\n' +
        '3. Replace YOUR_FORMSPREE_ID in index.html with your form ID.'
      );
      return;
    }

    // Submit via fetch (no page reload)
    e.preventDefault();
    const data = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    fetch(action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then((response) => {
      if (response.ok) {
        contactForm.reset();
        contactForm.style.display = 'none';
        const successMsg = document.getElementById('contactSuccess');
        if (successMsg) successMsg.style.display = 'block';
      } else {
        alert('Something went wrong. Please try again or call us directly.');
      }
    })
    .catch(() => {
      alert('Network error. Please check your connection and try again.');
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    });
  });
}

/* Mobile hamburger menu toggle */
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a nav link is tapped (mobile)
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* Syllabus Tabs switcher */
const tabButtons = document.querySelectorAll('.syllabus-tab-controls .tab-btn');
const tabPanels = document.querySelectorAll('.syllabus-panel');

if (tabButtons.length > 0 && tabPanels.length > 0) {
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');

      // Update active button state
      tabButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Show matching panel, hide others
      tabPanels.forEach((panel) => {
        if (panel.id === targetId) {
          panel.classList.add('active');
          panel.removeAttribute('hidden');
        } else {
          panel.classList.remove('active');
          panel.setAttribute('hidden', '');
        }
      });
    });
  });
}

