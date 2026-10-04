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

    // Check totals once all async events have settled
    function updatePlaceholder() {
      if (loaded > 0) {
        placeholder.style.display = 'none';
      } else if (loaded + failed === imgs.length) {
        // Every image failed to load
        galleryGrid.style.display = 'none';
        placeholder.style.display = 'block';
      }
    }

    imgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        // Already decoded and valid
        loaded++;
      } else if (img.complete && img.naturalWidth === 0) {
        // Already errored (broken src)
        failed++;
        img.style.display = 'none';
      } else {
        img.addEventListener('load', () => {
          loaded++;
          updatePlaceholder();
        });
        img.addEventListener('error', () => {
          failed++;
          img.style.display = 'none';
          updatePlaceholder();
        });
      }
    });

    // Handle any synchronously resolved images
    updatePlaceholder();
    if (imgs.length === 0) placeholder.style.display = 'block';
  }

  // Populate Toppers / Testimonials dynamically if AcademyDB is present
  const testimonialsGrid = document.querySelector('.testimonials-grid');
  if (testimonialsGrid && typeof AcademyDB !== 'undefined' && typeof AcademyDB.getToppers === 'function') {
    const toppers = AcademyDB.getToppers();
    if (toppers && toppers.length > 0) {
      testimonialsGrid.innerHTML = toppers.map(t => `
        <article class="card testimonial-card">
          <div class="testimonial-header">
            <span class="testimonial-badge">${t.badge || '🏆 Academy Topper'}</span>
            <span class="testimonial-score">${t.score || ''}</span>
          </div>
          <p class="testimonial-quote">&ldquo;${t.quote || ''}&rdquo;</p>
          <div class="testimonial-author-block">
            <strong class="testimonial-author">${t.name}</strong>
            <span class="testimonial-exam">${t.exam} ${t.year ? '• ' + t.year : ''} ${t.school ? '• ' + t.school : ''}</span>
            ${t.subjects ? `<span class="testimonial-subs">${t.subjects}</span>` : ''}
          </div>
        </article>
      `).join('');
    }
  }
});

/* Contact form — FormSubmit AJAX submission */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const action = contactForm.getAttribute('action');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    const data = new FormData(contactForm);

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
        return response.json().then(json => {
          throw new Error(json.message || 'Submission failed');
        });
      }
    })
    .catch((err) => {
      alert('Submission note: If this is your first submission, please verify and activate FormSubmit via the link sent to your email (nikhileshbhatkar379@gmail.com).\n\nDetails: ' + (err.message || 'Please check your connection and try again.'));
    })
    .finally(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        // Restore button text using active language
        const lang = (typeof I18n !== 'undefined' && I18n.getCurrentLang) ? I18n.getCurrentLang() : 'en';
        const labels = { en: 'Send Message', mr: 'संदेश पाठवा', hi: 'संदेश भेजें' };
        submitBtn.textContent = labels[lang] || 'Send Message';
      }
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

