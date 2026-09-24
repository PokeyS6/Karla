const button = document.querySelector('.heart-button');
const card = document.querySelector('.card');
const message = document.querySelector('.message');
const floatingHearts = document.querySelector('.floating-hearts');

button.addEventListener('click', () => {
  if (card.classList.contains('opened')) return;

  const heading = document.createElement('h1');
  heading.textContent = 'Feliz Cumple amor! ❤️';
  const greeting = document.createElement('p');
  greeting.textContent = 'Pasala increible en Colombia';
  message.append(heading, greeting);

  card.classList.add('opened');
  button.setAttribute('aria-expanded', 'true');
  button.setAttribute('aria-label', 'Sorpresa abierta ❤️');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // A small, one-time burst of hearts keeps the card quiet and simple.
  for (let i = 0; i < 7; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = '♥';
    heart.style.setProperty('--left', `${10 + i * 12}%`);
    heart.style.setProperty('--size', `${14 + (i % 3) * 5}px`);
    heart.style.setProperty('--delay', `${i * 0.18}s`);
    floatingHearts.append(heart);
    heart.addEventListener('animationend', () => heart.remove(), { once: true });
  }
});
