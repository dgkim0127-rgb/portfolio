const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('open');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('[data-glow]').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.background = `radial-gradient(240px circle at ${x}px ${y}px, rgba(136,176,255,0.26), rgba(255,255,255,0.03) 60%)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.background = 'linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))';
  });
});
