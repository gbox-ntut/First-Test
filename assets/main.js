// Accessible nav toggle for small screens
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('primary-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.hidden = expanded;
  });
  // Initialize hidden state for small screens
  const mq = window.matchMedia('(max-width: 700px)');
  const setMenu = () => { menu.hidden = mq.matches; };
  mq.addEventListener('change', setMenu);
  setMenu();
}
