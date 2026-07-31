// Mobile nav toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const caption = item.dataset.caption || '';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption;
    lightbox.hidden = false;
  });
});

function closeLightbox() {
  lightbox.hidden = true;
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Booking form
const bookingForm = document.getElementById('bookingForm');
const formNote = document.getElementById('formNote');
const BAR_PHONE = '+79603784311';

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = bookingForm.name.value.trim();
  const phone = bookingForm.phone.value.trim();

  formNote.classList.remove('success', 'error');

  if (!name || !phone) {
    formNote.textContent = 'Заполните имя и телефон — по ним мы вам перезвоним.';
    formNote.classList.add('error');
    return;
  }

  formNote.textContent = 'Заявка принята! Мы перезвоним вам в ближайшее время для подтверждения брони.';
  formNote.classList.add('success');
  bookingForm.reset();
  bookingForm.time.value = '19:00';
  bookingForm.guests.value = 2;
});
