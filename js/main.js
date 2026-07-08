const photos = [
  { src: 'images/gallery/photo-1.svg', category: 'Action', caption: 'Full fart på bane' },
  { src: 'images/gallery/photo-2.svg', category: 'Statisk', caption: 'Rent studio-oppsett' },
  { src: 'images/gallery/photo-3.svg', category: 'Rollers', caption: 'Rulling i bykjernen' },
  { src: 'images/gallery/photo-4.svg', category: 'Action', caption: 'Drift gjennom svingen' },
  { src: 'images/gallery/photo-5.svg', category: 'Statisk', caption: 'Detaljer i lakken' },
  { src: 'images/gallery/photo-6.svg', category: 'Rollers', caption: 'Rulling ved solnedgang' },
  { src: 'images/gallery/photo-7.svg', category: 'Action', caption: 'Racing på strekk' },
  { src: 'images/gallery/photo-8.svg', category: 'Statisk', caption: 'Front i kveldslys' },
  { src: 'images/gallery/photo-9.svg', category: 'Rollers', caption: 'Rulling på landevei' },
  { src: 'images/gallery/photo-10.svg', category: 'Action', caption: 'Sladd i grusen' },
  { src: 'images/gallery/photo-11.svg', category: 'Statisk', caption: 'Profilbilde, tomt bakgrunn' },
  { src: 'images/gallery/photo-12.svg', category: 'Rollers', caption: 'Rulling i tunnel' },
];

const grid = document.getElementById('grid');
const filters = document.getElementById('filters');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

let currentIndex = 0;
let visiblePhotos = photos;

function renderGrid() {
  grid.innerHTML = '';
  photos.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = 'grid-item';
    item.dataset.category = photo.category;
    item.dataset.index = index;
    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
      <div class="caption">${photo.caption} · ${photo.category}</div>
    `;
    item.addEventListener('click', () => openLightbox(index));
    grid.appendChild(item);
  });
}

function applyFilter(category) {
  const items = grid.querySelectorAll('.grid-item');
  items.forEach((item) => {
    const match = category === 'all' || item.dataset.category === category;
    item.classList.toggle('hidden', !match);
  });
  visiblePhotos = category === 'all'
    ? photos
    : photos.filter((p) => p.category === category);
}

filters.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  filters.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilter(btn.dataset.filter);
});

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const photo = photos[currentIndex];
  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.caption;
  lightboxCaption.textContent = `${photo.caption} · ${photo.category}`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % photos.length;
  updateLightbox();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  updateLightbox();
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxNext').addEventListener('click', showNext);
document.getElementById('lightboxPrev').addEventListener('click', showPrev);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
navToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form (static placeholder — see README for hooking up a real backend)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Takk for meldingen! Jeg svarer så snart som mulig.';
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();

renderGrid();
