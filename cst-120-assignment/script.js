// Timeline toggle details
if (document.body.classList.contains('timeline')) {
  document.querySelectorAll('.toggle-detail').forEach(btn => {
    btn.addEventListener('click', () => {
      const detail = btn.parentElement.querySelector('.detail');
      detail.classList.toggle('hidden');
    });
  });
}

// Home page button alert
if (document.body.classList.contains('home')) {
  const homeBtn = document.querySelector('.home-intro button');
  if (homeBtn) {
    homeBtn.addEventListener('click', () => alert('Welcome! Enjoy your visit!'));
  }
}

// Contact form submission
if (document.body.classList.contains('contact')) {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      form.reset();
    });
  }
}