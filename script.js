const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});

nav?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);


// ===============================
// THEME TOGGLE
// Dark mode = DEFAULT
// ===============================

const theme = document.getElementById('theme');

// Keep previously selected theme if available
const saved = localStorage.getItem('theme');

if (saved === 'light') {
  document.documentElement.dataset.theme = 'light';
} else {
  document.documentElement.dataset.theme = '';
  localStorage.setItem('theme', 'dark');
}

function updateTheme() {
  const light =
    document.documentElement.dataset.theme === 'light';

  theme.textContent = light ? '☾' : '☼';

  theme.setAttribute(
    'aria-label',
    light ? 'Switch to dark mode' : 'Switch to light mode'
  );
}

updateTheme();

theme?.addEventListener('click', () => {

  const light =
    document.documentElement.dataset.theme !== 'light';

  document.documentElement.dataset.theme =
    light ? 'light' : '';

  localStorage.setItem(
    'theme',
    light ? 'light' : 'dark'
  );

  updateTheme();
});


// ===============================
// TOOL FILTER
// ===============================

document.querySelectorAll('.filter-btn').forEach(btn => {

  btn.addEventListener('click', () => {

    document
      .querySelectorAll('.filter-btn')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');

    const f = btn.dataset.filter;

    document
      .querySelectorAll('.tool')
      .forEach(t =>
        t.classList.toggle(
          'hide',
          f !== 'all' && t.dataset.cat !== f
        )
      );

  });

});
